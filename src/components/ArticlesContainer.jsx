import { Article } from "./Article";
import imgArticle from "../assets/images/image-retro-pcs.jpg";
import imgLap from "../assets/images/image-top-laptops.jpg";
import imgGaming from "../assets/images/image-gaming-growth.jpg";

export const ArticlesContainer = () => {
  return (
    <section className="mt-6 md:flex md:flex-wrap md:gap-10">
      <Article
        img={imgArticle}
        number="01"
        title="Reviving Retro PCs"
        text="What happens when old PCs are given modern upgrades?"
      />
      <Article
        img={imgLap}
        number="02"
        title="Top 10 Laptops of 2022"
        text="Our best picks for various needs and budgets."
      />
      <Article
        img={imgGaming}
        number="03"
        title="The Growth of Gaming"
        text="How the pandemic has sparked fresh opportunities."
      />
    </section>
  );
};
