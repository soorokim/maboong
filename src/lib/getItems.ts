import { Database } from "./database.types";

export const getItems = async () => {
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
