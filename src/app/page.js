import AboutUs from "@/components/AboutUs";
import { Exo_2 } from "next/font/google";
import ChooseUs from "@/components/ChooseUs";
import Header from "@/components/Header";
import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faq";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

const exo_2 = Exo_2({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
export default function Home() {
  return (
    <main
      className={` ${exo_2.className} overflow-hidden`}
    >
      <Header />
      <AboutUs />
      <ChooseUs />
      <ContactUs />
      <Faq />
      <Subscribe />
      <Footer />
    </main>
  );
}
