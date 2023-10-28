import Link from "next/link";
import Image from "next/image";

const socialLinks = [
    {
        imgSrc: "/images/Footer/facebook.svg",
        link: "https://facebook.com",
        width: 10,
    },
    {
        imgSrc: "/images/Footer/insta.svg",
        link: "https://instagram.com",
        width: 14,
    },
    {
        imgSrc: "/images/Footer/twitter.svg",
        link: "https://twitter.com",
        width: 14,
    },
];

const products = [
    {
        id: 1,
        section: "Company",
        link: ["About", "Careers", "Blog", "How we work?"],
    },
    {
        id: 2,
        section: "Contact",
        link: ["Help/FAQ", "Affiliates", "Partners"],
    },
    {
        id: 3,
        section: "More",
        link: ["Projects", "Team", "Culture", "Support"],
    },
];

const footer = () => {
    return (
        <div className="mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-11">
                <div className="sm:col-span-6 lg:col-span-5">
                    <div className="flex flex-shrink-0 items-center border-right">
                        <Image src="/images/Logo/Logo.svg" alt="logo" width={56} height={56} />
                        <Link href="/" className="text-2xl font-semibold text-black ml-4">
                            Ekantik Technologies
                        </Link>
                    </div>
                    <h3 className="text-textbl text-xs font-medium mt-5 mb-4 lg:mb-16">
                        <div> Envisioning Tomorrow, Crafting Today</div>
                        <div className="pt-3"> Your Digital Future Starts Here.</div>
                    </h3>
                    <div className="flex gap-4">
                        {socialLinks.map((items, i) => (
                            <Link href={items.link} key={i}>
                                <div className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* CLOUMN-2/3/4 */}

                {products.map((product) => (
                    <div key={product.id} className="sm:col-span-2">
                        <p className="text-black text-xl font-semibold mb-9">{product.section}</p>
                        <ul>
                            {product.link.map((link, index) => (
                                <li key={index} className="mb-5">
                                    <Link href="/" className="text-footerlinks text-base font-normal mb-6 space-links">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* All Rights Reserved */}

            <div className="py-10 md:flex items-center justify-between border-t border-t-bordertop">
                <h4 className="text-darkgrey text-sm text-center md:text-start font-normal">@2023 - Ekantik Technologies. All Rights Reserved by</h4>
                <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
                    <h4 className="text-darkgrey text-sm font-normal">
                        <Link href="/" target="_blank">
                            Privacy policy
                        </Link>
                    </h4>
                    <div className="h-5 bg-bordertop w-0.5"></div>
                    <h4 className="text-darkgrey text-sm font-normal">
                        <Link href="/" target="_blank">
                            Terms & conditions
                        </Link>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default footer;
