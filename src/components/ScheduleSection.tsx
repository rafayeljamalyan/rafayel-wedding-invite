import Image from "next/image";

export default function ScheduleSection() {
  return (
    <div className="relative w-full bg-white">
      {/* Desktop Large (1920-1561px and 1920+) */}
      <div className="hidden min-[1561px]:flex items-center justify-between w-full">
        <div className="h-[720px] relative shrink-0 w-[640px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt="Schedule"
              className="absolute h-full left-0 max-w-none w-full object-cover"
              src="/schedule-image.jpg"
              width={640}
              height={720}
            />
          </div>
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <div className="basis-0 bg-white flex flex-col gap-[80px] grow h-full items-start justify-center min-h-px min-w-px pl-[120px] pr-[160px] py-[80px] relative shrink-0">
            <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#332d27] text-[28px] w-full">
                Ամուսնության պաշտոնական գրանցում և գինու հյուրասիրություն`
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src="/separator-large.svg"
                    width={100}
                    height={1}
                  />
                </div>
              </div>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#110c09] text-[40px] w-full">
                17:00
              </p>
            </div>
            <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#332d27] text-[28px] w-full">
                Ընթրիք ու լիիիքը պար`
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src="/separator-large.svg"
                    width={100}
                    height={1}
                  />
                </div>
              </div>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#110c09] text-[40px] w-full">
                18:00
              </p>
            </div>
            <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#332d27] text-[28px] w-full">
                Թռչող լապտերների արարողությում`
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src="/separator-large.svg"
                    width={100}
                    height={1}
                  />
                </div>
              </div>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#110c09] text-[40px] w-full">
                21:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Medium (1560-1201px) */}
      <div className="hidden min-[1201px]:flex min-[1561px]:hidden items-center justify-between w-full">
        <div className="h-[720px] relative shrink-0 w-[640px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt="Schedule"
              className="absolute h-full left-0 max-w-none w-full object-cover"
              src="/schedule-image.jpg"
              width={640}
              height={720}
            />
          </div>
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <div className="basis-0 bg-white flex flex-col gap-[80px] grow h-full items-start justify-center min-h-px min-w-px p-[80px] relative shrink-0">
            <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#332d27] text-[24px] w-full">
                Ամուսնության պաշտոնական գրանցում և գինու հյուրասիրություն`
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src="/separator-large.svg"
                    width={100}
                    height={1}
                  />
                </div>
              </div>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#110c09] text-[40px] w-full">
                17:00
              </p>
            </div>
            <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#332d27] text-[24px] w-full">
                Ընթրիք ու լիիիքը պար`
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src="/separator-large.svg"
                    width={100}
                    height={1}
                  />
                </div>
              </div>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#110c09] text-[40px] w-full">
                18:00
              </p>
            </div>
            <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#332d27] text-[24px] w-full">
                Թռչող լապտերների արարողությում`
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src="/separator-large.svg"
                    width={100}
                    height={1}
                  />
                </div>
              </div>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#110c09] text-[40px] w-full">
                21:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet (1200-769px) */}
      <div className="hidden min-[769px]:flex min-[1201px]:hidden flex-col items-start w-full">
        <div className="bg-white flex flex-col gap-[64px] items-start justify-center px-[40px] py-[80px] relative shrink-0 w-full">
          <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#332d27] text-[20px] w-full">
              Ամուսնության պաշտոնական գրանցում և գինու հյուրասիրություն`
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <Image
                  alt=""
                  className="block max-w-none size-full"
                  src="/separator-large.svg"
                  width={100}
                  height={1}
                />
              </div>
            </div>
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#110c09] text-[40px] w-full">
              17:00
            </p>
          </div>
          <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#332d27] text-[20px] w-full">
              Ընթրիք ու լիիիքը պար`
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <Image
                  alt=""
                  className="block max-w-none size-full"
                  src="/separator-large.svg"
                  width={100}
                  height={1}
                />
              </div>
            </div>
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#110c09] text-[40px] w-full">
              18:00
            </p>
          </div>
          <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#332d27] text-[20px] w-full">
              Թռչող լապտերների արարողությում`
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <Image
                  alt=""
                  className="block max-w-none size-full"
                  src="/separator-large.svg"
                  width={100}
                  height={1}
                />
              </div>
            </div>
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#110c09] text-[40px] w-full">
              21:00
            </p>
          </div>
        </div>
        <div className="h-[600px] overflow-clip relative shrink-0 w-full">
          <div className="absolute blur-[20px] filter inset-[-20px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt=""
                className="absolute h-full left-0 max-w-none w-full object-cover"
                src="/schedule-image.jpg"
                width={640}
                height={720}
              />
            </div>
          </div>
          <div className="absolute h-[600px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[520px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt="Schedule"
                className="absolute h-full left-0 max-w-none w-full object-cover"
                src="/schedule-image.jpg"
                width={520}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile (768-375px and 374px-) */}
      <div className="flex min-[769px]:hidden flex-col items-start w-full">
        <div className="bg-white flex flex-col gap-[48px] items-start justify-center px-[20px] py-[64px] relative shrink-0 w-full">
          <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#332d27] text-[20px] w-full">
              Ամուսնության պաշտոնական գրանցում և գինու հյուրասիրություն`
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <Image
                  alt=""
                  className="block max-w-none size-full"
                  src="/separator-large.svg"
                  width={100}
                  height={1}
                />
              </div>
            </div>
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#110c09] text-[28px] w-full">
              17:00
            </p>
          </div>
          <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#332d27] text-[20px] w-full">
              Ընթրիք ու լիիիքը պար`
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <Image
                  alt=""
                  className="block max-w-none size-full"
                  src="/separator-large.svg"
                  width={100}
                  height={1}
                />
              </div>
            </div>
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#110c09] text-[28px] w-full">
              18:00
            </p>
          </div>
          <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#332d27] text-[20px] w-full">
              Թռչող լապտերների արարողությում`
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <Image
                  alt=""
                  className="block max-w-none size-full"
                  src="/separator-large.svg"
                  width={100}
                  height={1}
                />
              </div>
            </div>
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#110c09] text-[28px] w-full">
              21:00
            </p>
          </div>
        </div>
        <div className="h-[462px] overflow-clip relative shrink-0 w-full">
          <div className="absolute blur-[20px] filter inset-[-20px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt=""
                className="absolute h-full left-0 max-w-none w-full object-cover"
                src="/schedule-image.jpg"
                width={640}
                height={720}
              />
            </div>
          </div>
          <div className="absolute h-[462px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[400px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt="Schedule"
                className="absolute h-full left-0 max-w-none w-full object-cover"
                src="/schedule-image.jpg"
                width={400}
                height={462}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
