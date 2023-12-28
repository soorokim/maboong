import { Grid } from "./components/grid";

export default function Home() {
  return (
    <main className="">
      <Grid>
        <div className="w-full aspect-square bg-red-500"></div>
        <div className="w-full aspect-square bg-blue-500"></div>
        <div className="w-full aspect-square bg-green-500"></div>
      </Grid>
    </main>
  );
}
