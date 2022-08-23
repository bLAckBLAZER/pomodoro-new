import { Hero } from "../../components";

import { useTitle } from "../../utils/useTitle";

export const Homepage = () => {
  useTitle("Home | Subtle Clock");

  return (
    <main className=" flex-1">
      <Hero hero-img="" hero-title="" />
    </main>
  );
};
