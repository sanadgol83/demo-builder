import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { showDemoNotice } from "@/lib/demo";

const extra = ["تماس با ما", "سوالات متداول", "حریم خصوصی", "قوانین", "وبلاگ"];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold tracking-[0.22em] text-gold">MOLKEBASTAN</p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-muted-foreground">
            طراحی و بازسازی فضاهای مدرن و کاربردی؛ از ایده تا اجرا، با دقت مهندسی.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">دسترسی سریع</h3>
          <span className="gold-rule mt-3" />
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="transition-colors hover:text-gold">
                درباره ما
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors hover:text-gold">
                خدمات
              </Link>
            </li>
            <li>
              <Link to="/projects" className="transition-colors hover:text-gold">
                پروژه‌ها
              </Link>
            </li>
            {extra.map((label) => (
              <li key={label}>
                <button
                  onClick={() => showDemoNotice(label)}
                  className="transition-colors hover:text-gold"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">تماس با ما</h3>
          <span className="gold-rule mt-3" />
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 shrink-0 text-gold" />
              <span>کرج، بلوار طالقانی جنوبی، نبش کوچه جمالپور، ساختمان کاج، واحد ۶</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-gold" />
              <span dir="ltr">0922 919 0920 — 026 3220 7487</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-gold" />
              <span dir="ltr">molkebastan@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground">
          © ۲۰۲۶ ملک باستان. تمامی حقوق محفوظ است — نسخه دمو.
        </p>
      </div>
    </footer>
  );
}
