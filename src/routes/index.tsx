import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Compass, Hammer, Layers, ShieldCheck, Users, Clock } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { showDemoNotice } from "@/lib/demo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ملک باستان | طراحی مدرن، اجرای دقیق ساختمان" },
      {
        name: "description",
        content:
          "شرکت ملک باستان؛ طراحی نقشه و پلان، گودبرداری، اجرای پروژه‌های ساختمانی و نظارت مهندسی با استاندارد روز.",
      },
      { property: "og:title", content: "ملک باستان | طراحی مدرن، اجرای دقیق" },
      {
        property: "og:description",
        content: "از ایده تا اجرا؛ طراحی و ساخت ساختمان با دقت مهندسی.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Compass,
    title: "طراحی نقشه و پلان",
    text: "ارائه طراحی دقیق و استاندارد با توجه به نیاز پروژه و شرایط محیطی.",
  },
  {
    icon: Layers,
    title: "گودبرداری و زمین",
    text: "انجام عملیات گودبرداری، خاک‌برداری و آماده‌سازی زمین برای شروع ساخت.",
  },
  {
    icon: Hammer,
    title: "اجرای پروژه‌ها",
    text: "اجرای تمامی مراحل ساخت و نظارت دقیق بر پیشرفت پروژه تا تکمیل.",
  },
];

const reasons = [
  { icon: Clock, title: "مدیریت دقیق", text: "هماهنگی کامل تیم‌ها، تحویل در زمان مقرر و شفافیت در هزینه‌ها." },
  { icon: ShieldCheck, title: "استانداردهای روز", text: "استفاده از متریال درجه‌یک و همگام با جدیدترین ضوابط ساخت." },
  { icon: Users, title: "تیم متخصص", text: "مهندسان و طراحان حرفه‌ای با سابقه چندین‌ساله در پروژه‌های شهری." },
];

const featured = [
  { img: project1, title: "مجتمع مسکونی رویال", tag: "مسکونی" },
  { img: project2, title: "لابی هتل پارس", tag: "تجاری" },
  { img: project3, title: "ویلای مهرشهر", tag: "گودبرداری" },
];

function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
        <img
          src={heroImg}
          alt="ساختمان بلندمرتبه در حال ساخت"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-background/50" />
        <div className="mx-auto w-full max-w-6xl px-5 text-center">
          <p className="fade-up text-xs tracking-[0.4em] text-gold">MOLKEBASTAN</p>
          <h1 className="fade-up mt-6 text-4xl leading-tight md:text-6xl">
            طراحی مدرن، اجرای دقیق
          </h1>
          <p className="fade-up mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground md:text-base">
            نقش ملک باستان از ایده تا اجراست؛ خلق فضاهایی که زیبایی و کاربری را هم‌زمان
            ارائه می‌دهند. مشاوره و مدیریت کامل پروژه، صرفه‌جویی در هزینه و زمان و
            جلوگیری از اشتباهات اجرایی.
          </p>
          <div className="fade-up mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              مشاهده پروژه‌ها
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            </Link>
            <button
              onClick={() => showDemoNotice("ارسال درخواست")}
              className="rounded-sm border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              ارسال درخواست
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="group bg-surface p-8 transition-colors hover:bg-surface-2"
            >
              <p.icon size={22} className="text-gold" />
              <h3 className="mt-5 text-base">{p.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl">پروژه‌های ما</h2>
            <span className="gold-rule mt-4" />
          </div>
          <Link to="/projects" className="text-sm text-muted-foreground hover:text-gold">
            مشاهده همه
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.title}
              to="/projects"
              className="group relative block aspect-4/5 overflow-hidden rounded-sm border border-border"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-[11px] text-gold">{p.tag}</span>
                <h3 className="mt-1 text-base">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-center text-2xl md:text-3xl">چرا ما را انتخاب می‌کنید؟</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="border-t border-border pt-6">
                <r.icon size={20} className="text-gold" />
                <h3 className="mt-4 text-base">{r.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h2 className="text-2xl md:text-3xl">پروژه‌ای در ذهن دارید؟</h2>
        <p className="mt-4 text-sm leading-8 text-muted-foreground">
          از مرحله طراحی تا تحویل کلید، کنار شما هستیم.
        </p>
        <button
          onClick={() => showDemoNotice("فرم تماس")}
          className="mt-8 rounded-sm bg-gold px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          شروع گفت‌وگو
        </button>
      </section>
    </>
  );
}
