import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { showDemoNotice } from "@/lib/demo";

const nav = [
  { to: "/", label: "صفحه اصلی" },
  { to: "/about", label: "درباره ما" },
  { to: "/services", label: "خدمات" },
  { to: "/projects", label: "پروژه‌ها" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="text-lg font-bold tracking-[0.22em] text-foreground">
          MOLKE<span className="text-gold">BASTAN</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "relative py-1 text-sm text-foreground after:absolute after:-bottom-1 after:right-0 after:h-px after:w-full after:bg-gold",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => showDemoNotice("مشاوره رایگان")}
            className="hidden rounded-sm border border-gold/50 px-4 py-2 text-xs text-gold transition-colors hover:bg-gold hover:text-primary-foreground md:block"
          >
            مشاوره رایگان
          </button>
          <button
            className="text-foreground md:hidden"
            aria-label="منو"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/85 backdrop-blur-md md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={[
          "fixed inset-y-0 left-0 z-50 w-1/3 min-w-[140px] bg-background shadow-2xl transition-transform duration-300 ease-out md:hidden",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex h-16 items-center justify-end border-b border-border px-5">
          <button
            className="text-foreground"
            aria-label="بستن منو"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col px-5 py-6">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "py-3 text-base text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              showDemoNotice("مشاوره رایگان");
            }}
            className="mt-4 rounded-sm border border-gold/50 px-4 py-2.5 text-center text-sm text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            مشاوره رایگان
          </button>
        </nav>
      </div>
    </header>
  );
}
