import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">
        <div className="flex">
          <Image
            src="/assets/icons/logo-icon.svg"
            alt="Logo"
            width={32}
            height={32}
            className="hidden md:block"
          />
          <Image
            src="/assets/icons/colabs.svg"
            alt="Logo with name"
            width={120}
            height={32}
            className="hidden md:block -mt-1"
          />
        </div>
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-1 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
