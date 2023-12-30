import { Grid } from "@/components/grid";
import { SiteItem } from "@/components/site-item";
import { Database } from "@/lib/database.types";

const getItems = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user-site`,
      {
        method: "get",
      }
    );
    if (!response.ok) {
      return [];
    }
    const json = await response.json();
    return json as Database["public"]["Tables"]["user_site"]["Row"][];
  } catch {
    return [] as Database["public"]["Tables"]["user_site"]["Row"][];
  }
};

export default async function Home() {
  const items = await getItems();
  return (
    <main>
      <Grid>
        {items.map((item) => item && <SiteItem key={item.id} item={item} />)}
      </Grid>
    </main>
  );
}
