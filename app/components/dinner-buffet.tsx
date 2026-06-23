import React from "react";

const buffetPrices = [
  { label: "Adult", price: "$26" },
  { label: "Seniors", price: "$25" },
  { label: "Kid", price: "Age x $1.50" },
];

const DinnerBuffet = () => {
  return (
    <section className="relative bg-[#130f0c] px-4 py-14 text-white md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl border-y border-[#d29a5a]/35 py-10 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="block h-[1px] w-12 bg-[#d29a5a]" />
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d29a5a] md:text-base">
                Every Saturday
              </p>
            </div>
            <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Dinner Buffet
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/75 md:text-xl">
              Enjoy a weekend spread of Namaste favourites, served fresh every
              Saturday for families, friends, and guests of all ages.
            </p>
          </div>

          <div className="w-full max-w-md bg-[#1b1510] p-6 shadow-2xl shadow-black/25 ring-1 ring-[#d29a5a]/25 md:p-8">
            <div className="space-y-5">
              {buffetPrices.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-6 border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                >
                  <span className="text-xl font-semibold">{item.label}</span>
                  <span className="text-right text-2xl font-bold text-[#d29a5a]">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DinnerBuffet;
