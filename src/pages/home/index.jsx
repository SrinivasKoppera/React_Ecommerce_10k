import HeroSection from "../../components/hero-section";
import EmblaCarousel from "../../components/testimonials";
import TextComponent from "../../components/test-componen";
import "./embla.css";

const Home = () => {
  const SLIDES = [
    {
      text: "This is the best e-commerce site I have ever used!",
      auther: "John Doe",
    },
    {
      text: "Amazing products and excellent customer service.",
      auther: "Jane Smith",
    },
    {
      text: "Amazing products and excellent customer service.",
      auther: "Jane Smith",
    },
    {
      text: "Amazing products and excellent customer service.",
      auther: "Jane Smith",
    },
    {
      text: "Amazing products and excellent customer service.",
      auther: "Jane Smith",
    },
  ];

  return (
    <div>
      <HeroSection />
      <TextComponent />
      <EmblaCarousel slides={SLIDES} />
    </div>
  );
};

export default Home;
