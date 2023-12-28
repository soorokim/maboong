import Link from "next/link";
import { Database } from "@/lib/database.types";

type Props = {
  item: Database["public"]["Tables"]["\buser_site"]["Row"];
};

export const SiteItem = ({ item }: Props) => {
  return (
    <Link className="w-full aspect-square bg-red-500" href={item.url}>
      {item.title}
    </Link>
  );
};
