import Discounted from "./_components/Discounted";
import Featured from "./_components/Featured";
import Slider from "./_components/Slider";

import { Suspense } from "react";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Suspense key="yarrak" fallback={<p>Loading...</p>}>
        <Featured />
      </Suspense>
      <Suspense key="dassak" fallback={<p>Loading...</p>}>
        <Discounted />
      </Suspense>
    </>
  );
};

export default HomePage;
