import { NewArticule } from "./NewArticule";

export const NewContainer = () => {
  return (
    <aside className="bg-Very-dark-blue text-Off-white py-[28px] px-[20px] flex-none mb-[60px] md:w-[350px] md:mb-0 ">
      <h1 className="text-SoftOrange text-4xl font-bold">New</h1>
      <NewArticule
        title="Hydrogen VS Electric Cars"
        text="Will hydrogen-fueled cars ever catch up to EVs?"
      />
      <NewArticule
        title="The Downsides of AI Artistry"
        text="What are the possible adverse effects of on-demand AI image generation?"
      />
      <NewArticule
        title="Is VC Funding Drying Up?"
        text="Private funding by VC firms is down 50% YOY. We take a look at what that means."
      />
    </aside>
  );
};
