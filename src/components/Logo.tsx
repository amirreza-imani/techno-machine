import Image from "next/image";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

export default function Logo({
  className = "",
  width = 160,
  height = 50,
}: LogoProps) {
  return (
    <Image
      src="/public/images/IMG_5071.PNG"
      alt="تکنو ماشین صنعت"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
