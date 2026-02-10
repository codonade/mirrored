import { createFileRoute } from "@tanstack/react-router";
import { mirror } from "mirrored";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Mirrored Todo" }] }),
  component: HomePage,
});

function HomePage() {
  const todos = mirror();
  return (
    <main className="flex h-full items-center justify-center">
      <h1 className="font-bold text-4xl">Hello, Procrastinators!</h1>
    </main>
  );
}
