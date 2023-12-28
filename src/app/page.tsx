import { Grid } from "@/components/grid";
import { SiteItem } from "@/components/site-item";
import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Home() {
  const supabase = createClientComponentClient<Database>();
  const response = await supabase.from("\buser_site").select();

  if (response.error) return;
  return (
    <main className="">
      <Grid>
        {response.data.map((item) => (
          <SiteItem key={item.id} item={item} />
        ))}
      </Grid>
    </main>
  );
}
