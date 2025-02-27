// import { getNewProducts } from "@/services/server-action";
// import Banner from "@/components/Banner";
import NewProductList from "@/components/NewProductList";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/components/Banner"), {
  ssr: false,
});

const HomePage = async () => {
  // 사용할 때 기다려서 import 하는 것
  const { getNewProducts } = await import("@/services/server-action");
  const { data } = await getNewProducts();

  return (
    <section className="m-auto flex flex-col p-4 gap-4 w-full items-center max-w-screen-lg">
      <Banner products={data} />
      <h2 className="text-xl font-bold flex-1 text-left w-full">
        New Arrivals
      </h2>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <NewProductList />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
