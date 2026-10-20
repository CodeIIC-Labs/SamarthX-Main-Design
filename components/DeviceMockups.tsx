import Image from "next/image";
import type { CSSProperties } from "react";

type MockupProps = {
  className?: string;
  style?: CSSProperties;
};

export function LaptopMockup({ className, style }: MockupProps) {
  return (
    <div className={className} style={style}>
      <Image
        src="/mockups/laptop-mockup.svg"
        alt="SamarthX eGov portal on a laptop"
        width={1200}
        height={720}
        unoptimized
        className="block h-auto w-full"
      />
      <div
        className="absolute overflow-hidden"
        style={{
          left: "14.6667%",
          top: "8.8889%",
          width: "70.6667%",
          height: "73.6111%",
          borderRadius: "0.943% / 1.509%",
          backgroundColor: "#E9F1FE",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #76AAFE 0 50%, #F8F9FC 50% 100%) top / 100% 12.25% no-repeat, linear-gradient(90deg, #E9F1FE 0 50%, #F1F5FF 50% 100%)",
          }}
          aria-hidden="true"
        />
        <Image
          src="/images/laptop-mockup.jpeg"
          alt="SamarthX eGov portal login screen"
          fill
          sizes="(min-width: 1024px) 340px, 250px"
          className="object-contain"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export function PhoneMockup({ className, style }: MockupProps) {
  return (
    <div className={className} style={style}>
      <Image
        src="/mockups/mobile-mockup.svg"
        alt="SamarthX DHE Portal app on a phone"
        width={420}
        height={840}
        unoptimized
        className="block h-auto w-full"
      />

      <div
        className="absolute overflow-hidden bg-[#0B3EAF]"
        style={{
          left: "9.0476%",
          top: "4.5238%",
          width: "81.9048%",
          height: "90.9524%",
          borderRadius: "12.2% / 5.5%",
        }}
      >
        <div className="absolute inset-x-0 -top-[1.6%] h-[103.2%]">
          <Image
            src="/images/phone-mockup.jpeg"
            alt=""
            fill
            sizes="(min-width: 1024px) 76px, 60px"
            className="object-cover"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div
        className="absolute flex items-center justify-end rounded-full bg-black"
        style={{
          left: "37.619%",
          top: "6.1905%",
          width: "24.7619%",
          height: "3.5714%",
          paddingRight: "12.5%",
        }}
        aria-hidden="true"
      >
        <span
          className="block rounded-full bg-[#0f172a]"
          style={{ width: "9.6%", height: "33.3%" }}
        />
      </div>
      <div
        className="absolute rounded-full bg-white/85"
        style={{
          left: "35.7143%",
          top: "93.5714%",
          width: "28.5714%",
          height: "0.5952%",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
