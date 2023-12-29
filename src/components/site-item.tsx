import Link from "next/link";
import { Database } from "@/lib/database.types";

type Props = {
  item: Database["public"]["Tables"]["UserSite"]["Row"];
};

export const SiteItem = ({ item }: Props) => {
  return (
    <Link
      className="gradation-button w-full aspect-square whitespace-pre-wrap bg-[#34495e] p-2 rounded-xl flex justify-center items-center "
      href={item.url}
    >
      <p className="font-sans text-center text-white font-bold">{item.title}</p>
    </Link>
  );
};
