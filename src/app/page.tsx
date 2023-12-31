import { Grid } from "@/components/grid";
import { SiteItems } from "@/components/site-items";
import { getItems } from "@/lib/getItems";

export default async function Home() {
  const items = await getItems();
  return (
    <main>
      <Grid>
        <SiteItems initialData={items} />
      </Grid>
    </main>
  );
}
