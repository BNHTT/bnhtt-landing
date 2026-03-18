import { Outlet } from "react-router";
import { DockNav } from "./DockNav";

export default function RootLayout() {
  return (
    <div className="relative w-full">
      <Outlet />
      {/* Bottom spacer so content isn't hidden behind fixed dock */}
      <div className="h-28" />
      <DockNav />
    </div>
  );
}