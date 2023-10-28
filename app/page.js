import Banner from "./components/Banner/index";
import Features from "./components/Work/index";
import Cook from "./components/Cook/index";
import Expert from "./components/Expert/index";
import Gallery from "./components/Gallery/index";
import Newsletter from "./components/Newsletter/Newsletter";
import Image from "next/image";
import ekantikLogo from "./assets/Ekantik2.png";

export default function Home() {
    return (
        <main>
            <Image src={ekantikLogo} alt="logo" width={36} height={36} />
            <Banner />
            <Features />
            <Cook />
            {/* <Expert /> */}
            <Gallery />
            <Newsletter />
        </main>
    );
}
