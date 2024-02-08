"use client";

import { useState } from "react";
import MusicCard, { MusicProp } from "@/components/MusicCard";
import { data } from "../constants/_data";
import LoadMore from "@/components/LoadMoreButton";
import Layout from "@/components/Layout";
function Home() {
  const [visibleItems, setVisibleItems] = useState(8); // Initial number of items to display

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  return (
    <Layout>
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-black font-bold">Explore List</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.slice(0, visibleItems).map((item: MusicProp, index) => (
          <MusicCard key={item.id} music={item} index={index} />
        ))}
      </section>

      {visibleItems < data.length && ( // Only show the "Load More" button if there are more items to load
        <LoadMore onLoadMore={handleLoadMore} />
      )}
    </main>
    </Layout>
  );
}

export default Home;
