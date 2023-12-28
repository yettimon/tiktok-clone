import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function TopNav() {
    const router = useRouter();
    const pathname = usePathname();

    const handleSearchName = (event: { target: { value: string } }) => {
        console.log(event.target.value);
    };
    const navigateTo = () => {
        console.log("Load");
    };

    const logIn = () => {
        console.log("Login");
    };

    return (
        <>
            <div id="navbar" className="fixed bg-white flex items-center w-full z-20 border-b">
                <div
                    className={`flex items-center justify-between gap-6 w-full px-4 mx-auto${
                        pathname === "/" ? "max-w-[1150px]" : ""
                    }`}>
                    <Link href="/" className="flex items-center flex-column">
                        <img className="min-w-[50px] w-[50px]" src="/images/logo-tiktok.svg" href="#" />
                        Tiktok
                    </Link>

                    <div className="relative md:flex items-center justify-end bg-[#f3f3f3] p-1 rounded-full max-w-[430px] w-full">
                        <input
                            type="text"
                            onChange={handleSearchName}
                            className="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none"
                            placeholder="Search profiles"
                        />

                        <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
                            <div className="p-1">
                                <Link
                                    href={`/profile/1`}
                                    className="flex items-center justify-between w-full cursor-pointer hover:bg-red-400 p-1 px-2 hover:text-white">
                                    <div className="flex items-center">
                                        <img className="rounded-md" width="40" src="https://placehold.co/40" />
                                        <div className="truncate ml-2" id="user_name">
                                            Dima
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="px-3 py-1 flex items-center border-1 border-l-gray-300 ">
                            <BiSearch color="A1A2A7" size="22" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigateTo()}
                            className="flex items-center border rounded-sm py-[6px] hover:bg-gray-100 pl-1.5">
                            <AiOutlinePlus clolor="#000000" size="22" />
                            <span className="px-2 font-medium text-[15px]">Load</span>
                        </button>

                        <div className="flex items-center">
                            <button
                                onClick={() => logIn()}
                                className="flex items-center border rounded-md py-[6px] bg-red-700 text-white">
                                <span className="whitespace-nowrap mx-4 font-medium text-[15px]">Log In</span>
                            </button>
                            <BsThreeDotsVertical color="#000000" size="25" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
