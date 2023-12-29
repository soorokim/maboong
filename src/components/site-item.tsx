import Link from "next/link";
import { Database } from "@/lib/database.types";

type Props = {
  item: Database["public"]["Tables"]["UserSite"]["Row"];
};

export const SiteItem = ({ item }: Props) => {
  return (
    <Link className="w-full aspect-square bg-orange-500" href={item.url}>
      <div className=" border-blue-300">{item.title}</div>
    </Link>
  );
};
