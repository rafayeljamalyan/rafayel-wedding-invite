'use server';

import { z } from 'zod';
import { appendRowToSheet } from '@/lib/googleSheets';

// Validation schema for RSVP form data
const rsvpSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Անունը պարտադիր է')
    .max(100, 'Անունը չափազանց երկար է'),
  count: z
    .number()
    .int('Անդամների քանակը պետք է լինի ամբողջ թիվ')
    .min(1, 'Անդամների քանակը պետք է լինի առնվազն 1')
    .max(20, 'Անդամների քանակը չի կարող գերազանցել 20-ը'),
});

export type RSVPFormData = z.infer<typeof rsvpSchema>;

export type RSVPResult =
  | { success: true }
  | { success: false; error: string };

/**
 * Server Action to submit RSVP to Google Sheets
 */
export async function submitRSVP(formData: RSVPFormData): Promise<RSVPResult> {
  try {
    // Validate input
    const validated = rsvpSchema.safeParse(formData);

    if (!validated.success) {
      const firstError = validated.error.issues[0];
      return {
        success: false,
        error: firstError.message,
      };
    }

    const { name, count } = validated.data;

    // Append to Google Sheets
    await appendRowToSheet(name, count);

    return { success: true };
  } catch (error) {
    console.error('Error submitting RSVP:', error);

    // Don't expose internal errors to client
    return {
      success: false,
      error: 'Ուղարկումը ձախողվեց, խնդրում ենք կրկին փորձել',
    };
  }
}
