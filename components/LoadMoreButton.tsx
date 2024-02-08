function LoadMore({ onLoadMore }: { onLoadMore: () => void }) {
  return (
    <section className="flex justify-center items-center w-full">
      <button
        className="border-4 px-10 py-2 text-black border-black transform  bg-[#ffff02] hover:scale-x-105"
        onClick={onLoadMore}
      >
        Load More
      </button>
    </section>
  );
}

export default LoadMore;
