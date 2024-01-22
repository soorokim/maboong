"use client";

import { useQuery } from "react-query";
import { SiteItem } from "./site-item";
import { Database } from "@/lib/database.types";
import { getItems } from "@/lib/getItems";

export const SiteItems = ({
  initialData,
}: {
  initialData: Database["public"]["Tables"]["user_site"]["Row"][];
}) => {
  if (!initialData) return;

  return (
    <>
      {initialData.map(
        (item) => item && <SiteItem key={item.id} item={item} />
      )}
    </>
  );
};
