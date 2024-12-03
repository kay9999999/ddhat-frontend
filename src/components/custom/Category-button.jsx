"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CategoryButton({ value, children }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const currentCategory = searchParams.get("category");
  console.log(currentCategory);

  const handleSelect = (value) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value.toLowerCase());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <button
      type="button"
      onClick={() => handleSelect(value)}
      className="relative px-6 py-2 text-white bg-black rounded-full shadow-lg outline outline-2 outline-white transform transition-transform duration-300 hover:bg-white hover:text-black hover:outline-black hover:shadow-xl hover:translate-y-[-5px] hover:animate-pulse"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-75 rounded-full blur-sm transition-transform duration-300 group-hover:animate-pulse"></span>
      <span className="relative">{children}</span>
    </button>
  );
}
