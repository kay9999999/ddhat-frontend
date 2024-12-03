import Slider from "@/components/custom/Slider";
import "./globals.css";
import FeaturesComponent from "@/components/custom/Features Section";
import CTAComponent from "@/components/custom/Call-to-action";
import TechnologiesComponent from "@/components/custom/Technologies";

export default function Home() {
  return (
    <div>
      <Slider />
      <FeaturesComponent />
      <CTAComponent />
      <TechnologiesComponent />
    </div>
  );
}
