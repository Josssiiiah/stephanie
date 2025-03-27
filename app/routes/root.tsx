import { Link, Outlet } from "react-router";
import { Button } from "../components/ui/button";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <main className="p-0 m-0">
        <Outlet />
      </main>
    </div>
  );
}
