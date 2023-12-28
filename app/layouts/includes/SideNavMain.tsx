import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";

export default function SideNavMain() {
    const pathname = usePathname();
    return (
        <>
            <div
                id="SidebarMain"
                className={`fixed z-10 bg-white pt-[70px] h-full w-[100px] border-r-0 overflow-auto 
    ${pathname === "/" ? "lg:w-[310px]" : "lg:w-[300px]"}`}>
                <div className="lg:w-full w-[100px] mx-auto">
                    <Link href="/">
                        <MenuItem iconString="For You" colorString={pathname == "/" ? "#F02C56" : ""} sizeString="25" />
                        <MenuItem iconString="Following" colorString="#000000" sizeString="25" />
                        <MenuItem iconString="Live" colorString="#000000" sizeString="25" />
                    </Link>
                </div>
            </div>
        </>
    );
}
