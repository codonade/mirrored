import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import stylesheet from "~/styles.css?url";

export const Route = createRootRoute({
  head: () => ({ links: [{ rel: "stylesheet", href: stylesheet }] }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang="en" className="h-full">
      <head>
        <HeadContent />
      </head>
      <body className="h-full antialiased">
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
