import { createClient } from "@/utils/supabase/server";
import { load } from "cheerio";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const revalidate = 60;

export async function GET() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { error, data } = await supabase.from("user_site").select();
  if (error) return NextResponse.json([]);

  const temps = await Promise.all(
    data.map(async ({ url, img, title, check, ...rest }) => {
      if (!check) {
        try {
          const response = await fetch(url);
          const html = await response.text();
          const $ = load(html);
          const ogDescription = $('meta[property="og:description"]').attr(
            "content"
          );
          let ogImage = $('meta[property="og:image"]').attr("content");
          if (ogImage?.startsWith("/")) {
            const domain = url.split("/")[2]; // https://domain/path => [https:,,domain,path]
            ogImage = "https://" + domain + ogImage;
          }
          const item = {
            url,
            ...rest,
            title,
            check: !check,
            img: ogImage ?? null,
            description: ogDescription ?? null,
          };

          await supabase
            .from("user_site")
            .update({
              check: !check,
              img: ogImage ?? null,
              description: ogDescription ?? null,
            })
            .eq("id", item.id);
          return { ...item };
        } catch (e) {
          console.log(e);
          await supabase
            .from("user_site")
            .update({
              ...rest,
              check: !check,
            })
            .eq("id", rest.id);
        }
      } else {
        return {
          url,
          img,
          title,
          ...rest,
        };
      }
    })
  );
  const items = temps.filter(Boolean);

  return NextResponse.json(items.sort((a, b) => b!.id - a!.id));
}
