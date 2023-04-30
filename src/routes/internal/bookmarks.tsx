import { JSX } from "solid-js";
import { Link, Title } from "solid-start";

export default function Bookmarks(): JSX.Element {
  return (
    <main class="flex w-full h-full bg-[color:var(--frame)] text-white">
      <Title>Bookmarks</Title>
      <Link rel="icon" href="/icons/star.svg"></Link>
      {/*  */}
    </main>
  );
}
