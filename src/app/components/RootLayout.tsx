import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { DockNav } from "./DockNav";
import { Cursor } from "./Cursor";
import { Preloader } from "./Preloader";
import { RouteTransition } from "./RouteTransition";
import { ScrollProgress } from "./ScrollProgress";
import { useLenis, getLenis } from "../../hooks/useLenis";
import { useIsTouch } from "../../hooks/useIsTouch";

export default function RootLayout() {
  const location = useLocation();
  const isTouch = useIsTouch();
  useLenis();

  // Reset scroll to top on route change.
  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className={`relative w-full ${isTouch ? "" : "cursor-none"}`}>
      <Preloader />
      <ScrollProgress />
      <RouteTransition />

      <Outlet />

      {/* Bottom spacer so content isn't hidden behind fixed dock */}
      <div className="h-28" />
      <DockNav />

      {!isTouch && <Cursor />}
    </div>
  );
}
