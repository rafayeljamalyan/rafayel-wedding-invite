import Image from "next/image";

export default function RSVPSection() {
  return (
    <div className="relative size-full bg-white">
      {/* Mobile (max-width: 768px) & Tablet MD (769px-1200px) & Desktop L (1201px-1560px) & Desktop XL (1561px+) */}
      <div className="flex flex-col gap-[10px] items-center justify-center px-[20px] md:px-[40px] min-[1201px]:px-[80px] py-[64px] md:py-[120px] min-[1201px]:py-[160px] relative size-full">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            alt=""
            className="absolute inset-0 max-w-none object-cover size-full"
            src="/rsvp-bg.jpg"
            fill
            style={{ objectPosition: "50% 50%" }}
          />
        </div>
        <div className="bg-white flex flex-col gap-[24px] min-[1201px]:gap-[40px] items-end p-[20px] md:p-[24px] min-[1201px]:p-[40px] relative shrink-0 w-full min-[1201px]:max-w-[600px] min-[1201px]:w-[600px] z-10">
          <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] min-[1201px]:leading-[28px] min-[1561px]:leading-[36px] not-italic relative shrink-0 text-[#332d27] text-[20px] min-[1201px]:text-[24px] min-[1561px]:text-[28px] w-full">
            Խնդրում ենք ստորև մուտքագրել Ձեր անունը և ազգանունը, ինչպես նաև նշել անդամների քանակը՝ մասնակցությունը հաստատելու համար։
          </p>
          <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="border-[#e3e3df] border-b border-solid flex items-center pb-[16px] pt-[14px] px-[16px] relative shrink-0 w-full">
              <p className="flex-1 font-['Arti_v05:Regular',sans-serif] leading-[20px] min-[1201px]:leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] min-[1201px]:text-[20px]">
                Անուն ազգանուն
              </p>
            </div>
            <div className="border-[#e3e3df] border-b border-solid flex items-center pb-[16px] pt-[14px] px-[16px] relative shrink-0 w-full">
              <p className="flex-1 font-['Arti_v05:Regular',sans-serif] leading-[20px] min-[1201px]:leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] min-[1201px]:text-[20px]">
                Անդամների քանակ
              </p>
            </div>
          </div>
          <div className="bg-[#110c09] flex items-center justify-center pb-[16px] pt-[14px] px-[40px] relative shrink-0 w-full md:w-auto md:self-end">
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
              Ուղարկել
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
