import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TechnologyIcon(props) {
    const { logo } = props;

    return (
        <div className="p-4 flex justify-center hover:shadow-[0_15px_30px_rgb(0_0_128_/_15%)] transition duration-700 ease-in-out rounded-2xl h-20 w-[168px]">
            <Link href="/" className="mx-auto flex">
                <Image src={logo} alt="logo" width="auto" height="auto" loading="lazy" />
            </Link>
        </div>
    );
}
