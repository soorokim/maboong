import { Grid } from "@/components/grid";
import { SiteItem } from "@/components/site-item";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { error, data } = await supabase.from("UserSite").select();
  if (error) return;
  return (
    <main className="">
      <Grid>
        {data.map((item) => (
          <SiteItem key={item.id} item={item} />
        ))}
      </Grid>
    </main>
  );
}
