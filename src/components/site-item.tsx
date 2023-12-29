import Link from "next/link";
import { Database } from "@/lib/database.types";

type Props = {
  item: Database["public"]["Tables"]["user_site"]["Row"];
};

export const SiteItem = ({ item }: Props) => {
  return (
    <Link
      className="gradation-button relative overflow-hidden w-full aspect-square whitespace-pre-wrap rounded-xl"
      href={item.url}
    >
      {item.img ? (
        <>
          <img src={item.img} className="w-full h-[50%] object-cover" />
          <p className="text-center text-white font-bold text-[12px] rounded px-2 mt-1">
            {item.title}
          </p>
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-full my-auto">
            <p className="text-center text-white font-bold text-[12px] rounded px-2">
              {item.title}
            </p>
          </div>
        </div>
      )}
    </Link>
  );
};
