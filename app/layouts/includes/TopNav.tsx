import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function TopNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div
        id="navbar"
        className="fixed bg-white flex items-center w-full z-20 border-b"
      >
        <div
          className={`flex items-center justify-between gap-6 w-full px-4 mx-auto${
            pathname === "/" ? "max-w-[1150px]" : ""
          }`}
        >
          <Link href="/" className="flex items-center flex-column">
            <img
              className="min-w-[50px] w-[50px]"
              src="/images/logo-tiktok.svg"
              href="#"
            />
            Tiktok
          </Link>
        </div>
      </div>
    </>
  );
}
