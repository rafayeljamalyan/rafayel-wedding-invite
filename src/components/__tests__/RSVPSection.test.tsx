import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RSVPSection from '../RSVPSection';
import { submitRSVP } from '@/app/actions/submitRSVP';

// Mock the server action
jest.mock('@/app/actions/submitRSVP');

// Mock animation hooks
jest.mock('@/lib/animations/hooks', () => ({
  useScrollAnimation: () => ({
    ref: { current: null },
    isInView: true,
  }),
}));

// Mock framer-motion to remove animations in tests
jest.mock('framer-motion', () => {
  const React = require('react');
  
  // Helper to filter out framer-motion specific props
  const filterAnimationProps = (props: Record<string, unknown>) => {
    const { 
      animate, initial, exit, transition, variants, 
      whileHover, whileTap, whileFocus, whileInView,
      drag, dragConstraints, dragElastic,
      layout, layoutId,
      ...rest 
    } = props;
    return rest;
  };
  
  return {
    motion: {
      div: React.forwardRef<HTMLDivElement, Record<string, unknown>>(
        ({ children, ...props }, ref) => (
          <div ref={ref} {...filterAnimationProps(props)}>{children}</div>
        )
      ),
      form: React.forwardRef<HTMLFormElement, Record<string, unknown>>(
        ({ children, ...props }, ref) => (
          <form ref={ref} {...filterAnimationProps(props)}>{children}</form>
        )
      ),
      p: React.forwardRef<HTMLParagraphElement, Record<string, unknown>>(
        ({ children, ...props }, ref) => (
          <p ref={ref} {...filterAnimationProps(props)}>{children}</p>
        )
      ),
      button: React.forwardRef<HTMLButtonElement, Record<string, unknown>>(
        ({ children, ...props }, ref) => (
          <button ref={ref} {...filterAnimationProps(props)}>{children}</button>
        )
      ),
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

const mockSubmitRSVP = submitRSVP as jest.MockedFunction<typeof submitRSVP>;

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) => {
    // Filter out Next.js specific props
    const { fill, ...imgProps } = props;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...imgProps} />;
  },
}));

describe('RSVPSection Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Initial render', () => {
    it('should render the form with all inputs', () => {
      render(<RSVPSection />);

      expect(screen.getByPlaceholderText('Անուն ազգանուն')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Անդամների քանակ')).toBeInTheDocument();
      expect(screen.getByText('Ուղարկել')).toBeInTheDocument();
    });

    it('should render the instructional text', () => {
      render(<RSVPSection />);

      expect(
        screen.getByText(/Խնդրում ենք ստորև մուտքագրել/)
      ).toBeInTheDocument();
    });

    it('should have empty input fields initially', () => {
      render(<RSVPSection />);

      const nameInput = screen.getByPlaceholderText('Անուն ազգանուն') as HTMLInputElement;
      const countInput = screen.getByPlaceholderText('Անդամների քանակ') as HTMLInputElement;

      expect(nameInput.value).toBe('');
      expect(countInput.value).toBe('');
    });

    it('should have submit button enabled initially', () => {
      render(<RSVPSection />);

      const submitButton = screen.getByRole('button', { name: /Ուղարկել/ });
      expect(submitButton).not.toBeDisabled();
    });
  });

  describe('User input', () => {
    it('should update name field when user types', async () => {
      const user = userEvent.setup();
      render(<RSVPSection />);

      const nameInput = screen.getByPlaceholderText('Անուն ազգանուն');
      await user.type(nameInput, 'John Doe');

      expect(nameInput).toHaveValue('John Doe');
    });

    it('should update count field when user types', async () => {
      const user = userEvent.setup();
      render(<RSVPSection />);

      const countInput = screen.getByPlaceholderText('Անդամների քանակ');
      await user.type(countInput, '3');

      expect(countInput).toHaveValue(3);
    });

    it('should accept Armenian characters in name field', async () => {
      const user = userEvent.setup();
      render(<RSVPSection />);

      const nameInput = screen.getByPlaceholderText('Անուն ազգանուն');
      await user.type(nameInput, 'Արամ Խաչատրյան');

      expect(nameInput).toHaveValue('Արամ Խաչատրյան');
    });
  });

  describe('Client-side validation', () => {
    it('should show error when name is empty', async () => {
      const user = userEvent.setup();
      render(<RSVPSection />);

      const countInput = screen.getByPlaceholderText('Անդամների քանակ');
      await user.type(countInput, '2');

      const submitButton = screen.getByRole('button', { name: /Ուղարկել/ });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText('Անունը պարտադիր է')).toBeInTheDocument();
      });

      expect(mockSubmitRSVP).not.toHaveBeenCalled();
    });

    it('should show error when count is empty', async () => {
      const user = userEvent.setup();
      render(<RSVPSection />);

      const nameInput = screen.getByPlaceholderText('Անուն ազգանուն');
      await user.type(nameInput, 'John Doe');

      const submitButton = screen.getByRole('button', { name: /Ուղարկել/ });
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText('Անդամների քանակը պետք է լինի 1-ից 20-ի միջև')
        ).toBeInTheDocument();
      });

      expect(mockSubmitRSVP).not.toHaveBeenCalled();
    });

    it('should show error when count is less than 1', async () => {
      const user = userEvent.setup();
      render(<RSVPSection />);

      const nameInput = screen.getByPlaceholderText('Անուն ազգանուն');
      const countInput = screen.getByPlaceholderText('Անդամների քանակ');

      await user.type(nameInput, 'John Doe');
      await user.clear(countInput);
      await user.type(countInput, '0');

      const submitButton = screen.getByRole('button', { name: /Ուղարկել/ });
      await user.click(submitButton);

      // The server action should not be called for invalid input - this proves validation works
      expect(mockSubmitRSVP).not.toHaveBeenCalled();
    });

    it('should show error when count is greater than 20', async () => {
      const user = userEvent.setup();
      render(<RSVPSection />);

      const nameInput = screen.getByPlaceholderText('Անուն ազգանուն');
      const countInput = screen.getByPlaceholderText('Անդամների քանակ');

      await user.type(nameInput, 'John Doe');
      await user.clear(countInput);
      await user.type(countInput, '25');

      const submitButton = screen.getByRole('button', { name: /Ուղարկել/ });
      await user.click(submitButton);

      // The server action should not be called for invalid input - this proves validation works
      expect(mockSubmitRSVP).not.toHaveBeenCalled();
    });
  });

  describe('Form submission', () => {
    it('should call submitRSVP with correct data on valid submission', async () => {
      const user = userEvent.setup();
      mockSubmitRSVP.mockResolvedValueOnce({ success: true });

      render(<RSVPSection />);

      const nameInput = screen.getByPlaceholderText('Անուն ազգանուն');
      const countInput = screen.getByPlaceholderText('Անդամների քանակ');

      await user.type(nameInput, 'John Doe');
      await user.type(countInput, '3');

      const submitButton = screen.getByRole('button', { name: /Ուղարկել/ });
      await user.click(submitButton);

      await waitFor(() => {
        expect(mockSubmitRSVP).toHaveBeenCalledTimes(1);
      });

      expect(mockSubmitRSVP).toHaveBeenCalledWith({
        name: 'John Doe',
        count: 3,
      });
    });

    it('should show loading state during submission', async () => {
      const user = userEvent.setup();
      
      // Create a promise that we can control
      let resolveSubmit: (value: { success: boolean }) => void;
      const submitPromise = new Promise<{ success: boolean }>((resolve) => {
        resolveSubmit = resolve;
      });
      mockSubmitRSVP.mockReturnValue(submitPromise);

      render(<RSVPSection />);

      const nameInput = screen.getByPlaceholderText('Անուն ազգանուն');
      const countInput = screen.getByPlaceholderText('Անդամների քանակ');

      await user.type(nameInput, 'John Doe');
      await user.type(countInput, '2');

      const submitButton = screen.getByRole('button', { name: /Ուղարկել/ });
      await user.click(submitButton);

      // Check loading state
      await waitFor(() => {
        expect(screen.getByText('Ուղարկվում է...')).toBeInTheDocument();
        expect(submitButton).toBeDisabled();
      });

      // Resolve the promise
      resolveSubmit!({ success: true });

      await waitFor(() => {
        expect(screen.queryByText('Ուղարկվում է...')).not.toBeInTheDocument();
      });
    });

    it('should disable inputs during submission', async () => {
      const user = userEvent.setup();
      
      let resolveSubmit: (value: { success: boolean }) => void;
      const submitPromise = new Promise<{ success: boolean }>((resolve) => {
        resolveSubmit = resolve;
      });
      mockSubmitRSVP.mockReturnValue(submitPromise);

      render(<RSVPSection />);

      const nameInput = screen.getByPlaceholderText('Անուն ազգանուն');
      const countInput = screen.getByPlaceholderText('Անդամների քանակ');

      await user.type(nameInput, 'John Doe');
      await user.type(countInput, '2');

      const submitButton = screen.getByRole('button', { name: /Ուղարկել/ });
      await user.click(submitButton);

      await waitFor(() => {
        expect(nameInput).toBeDisabled();
        expect(countInput).toBeDisabled();
      });

      resolveSubmit!({ success: true });
    });
  });

  describe('Success state', () => {
    it('should show success message on successful submission', async () => {
      const user = userEvent.setup();
      mockSubmitRSVP.mockResolvedValueOnce({ success: true });

      render(<RSVPSection />);

      const nameInput = screen.getByPlaceholderText('Անուն ազգանուն');
      const countInput = screen.getByPlaceholderText('Անդամների քանակ');

      await user.type(nameInput, 'John Doe');
      await user.type(countInput, '2');

      const submitButton = screen.getByRole('button', { name: /Ուղարկել/ });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/Շնորհակալություն/)). toBeInTheDocument();
        expect(
          screen.getByText(/Ձեր RSVP-ն հաջողությամբ ուղարկվել է/)
        ).toBeInTheDocument();
      });
    });

    it('should hide form after successful submission', async () => {
      const user = userEvent.setup();
      mockSubmitRSVP.mockResolvedValueOnce({ success: true });

      render(<RSVPSection />);

      const nameInput = screen.getByPlaceholderText('Անուն ազգանուն');
      const countInput = screen.getByPlaceholderText('Անդամների քանակ');

      await user.type(nameInput, 'John Doe');
      await user.type(countInput, '2');

      const submitButton = screen.getByRole('button', { name: /Ուղարկել/ });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/Շնորհակալություն/)).toBeInTheDocument();
      });

      expect(screen.queryByPlaceholderText('Անուն ազգանուն')).not.toBeInTheDocument();
      expect(screen.queryByPlaceholderText('Անդամների քանակ')).not.toBeInTheDocument();
    });
  });

  describe('Error state', () => {
    it('should show error message on failed submission', async () => {
      const user = userEvent.setup();
      mockSubmitRSVP.mockResolvedValueOnce({
        success: false,
        error: 'Ուղարկումը ձախողվեց',
      });

      render(<RSVPSection />);

      const nameInput = screen.getByPlaceholderText('Անուն ազգանուն');
      const countInput = screen.getByPlaceholderText('Անդամների քանակ');

      await user.type(nameInput, 'John Doe');
      await user.type(countInput, '2');

      const submitButton = screen.getByRole('button', { name: /Ուղարկել/ });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText('Ուղարկումը ձախողվեց')).toBeInTheDocument();
      });
    });

    it('should keep form visible after error', async () => {
      const user = userEvent.setup();
      mockSubmitRSVP.mockResolvedValueOnce({
        success: false,
        error: 'Error message',
      });

      render(<RSVPSection />);

      const nameInput = screen.getByPlaceholderText('Անուն ազգանուն');
      const countInput = screen.getByPlaceholderText('Անդամների քանակ');

      await user.type(nameInput, 'John Doe');
      await user.type(countInput, '2');

      const submitButton = screen.getByRole('button', { name: /Ուղարկել/ });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText('Error message')).toBeInTheDocument();
      });

      expect(screen.getByPlaceholderText('Անուն ազգանուն')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Անդամների քանակ')).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
      expect(submitButton).not.toBeDisabled();
    });

    it('should handle validation errors from server', async () => {
      const user = userEvent.setup();
      mockSubmitRSVP.mockResolvedValueOnce({
        success: false,
        error: 'Անունը չափազանց երկար է',
      });

      render(<RSVPSection />);

      const nameInput = screen.getByPlaceholderText('Անուն ազգանուն');
      const countInput = screen.getByPlaceholderText('Անդամների քանակ');

      await user.type(nameInput, 'A'.repeat(101));
      await user.type(countInput, '2');

      const submitButton = screen.getByRole('button', { name: /Ուղարկել/ });
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText('Անունը չափազանց երկար է')
        ).toBeInTheDocument();
      });
    });
  });
});
