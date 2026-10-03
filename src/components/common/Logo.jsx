import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image 
      width={288}
      height={64}
      src="/cricfot.png" alt="Logo" className="w-46 h-14" />
    </Link>
  );
};

export default Logo;
