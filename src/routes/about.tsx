import { createFileRoute } from "@tanstack/react-router";
import { PenTool, HardHat, Users } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import { showDemoNotice } from "@/lib/demo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "درباره ما | ملک باستان" },
      {
        name: "description",
        content:
          "داستان ملک باستان: تلفیق هنر معماری و دقت مهندسی در طراحی و اجرای پروژه‌های ساختمانی.",
      },
      { property: "og:title", content: "درباره ما | ملک باستان" },
      {
        property: "og:description",
        content: "تیم متخصص ملک باستان، از طراحی تا اجرای پروژه‌های ساختمانی.",
      },
    ],
  }),
  component: About,
});

const team = [
  { icon: PenTool, title: "طراحان حرفه‌ای", text: "طراحی بر پایه استانداردهای روز دنیا و استفاده از متریال درجه‌یک." },
  { icon: HardHat, title: "مهندسان باتجربه", text: "نظارت دقیق و اجرای پروژه‌های ساختمانی با بالاترین استاندارد ایمنی." },
  { icon: Users, title: "نیروهای اجرایی", text: "تضمین کیفیت، دوام و کارایی در هر مرحله از اجرا توسط متخصصین زبده." },
];

function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-20 pb-12">
        <h1 className="text-3xl text-gold md:text-4xl">درباره ما</h1>
        <span className="gold-rule mt-5" />
        <p className="mt-6 max-w-2xl text-lg leading-9 md:text-xl">
          خلق فضاهایی که زیبایی و کاربری را هم‌زمان ارائه می‌دهند.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 md:grid-cols-2">
        <img
          src={aboutImg}
          alt="نمای ساختمان کلاسیک"
          width={1280}
          height={960}
          loading="lazy"
          className="w-full rounded-sm border border-border object-cover grayscale"
        />
        <div className="rounded-sm border border-border bg-surface p-8">
          <h2 className="text-xl text-gold">داستان ما</h2>
          <p className="mt-5 text-sm leading-8 text-muted-foreground">
            در <span className="text-foreground">شرکت ملک باستان</span>، ما باور داریم که
            هر پروژه ساختمانی باید فراتر از یک سازه باشد؛ یک اثر ماندگار از دقت مهندسی،
            خلاقیت و زیبایی.
          </p>
          <p className="mt-4 text-sm leading-8 text-muted-foreground">
            با تکیه بر تجربه‌ای تخصصی در طراحی نقشه‌ها، فازهای اجرایی، گودبرداری و اجرای
            پروژه‌های ساختمانی، ما فرآیند ساخت را با استفاده از فناوری‌های نوین به سطحی
            جدید رسانده‌ایم.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 text-center">
            {[
              ["۱۲+", "سال تجربه"],
              ["۸۰+", "پروژه اجراشده"],
              ["۳۰+", "متخصص"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="text-xl text-gold">{n}</p>
                <p className="mt-1 text-xs text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-center text-2xl text-gold md:text-3xl">تیم و تخصص</h2>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            تلفیق هنر معماری و دقت مهندسی در یک کالبد واحد
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {team.map((t) => (
              <article key={t.title} className="rounded-sm border border-border bg-surface p-8">
                <span className="inline-flex size-10 items-center justify-center rounded-sm bg-gold/10">
                  <t.icon size={18} className="text-gold" />
                </span>
                <h3 className="mt-5 text-base">{t.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{t.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-sm border border-border bg-surface p-10 text-center md:p-16">
          <h2 className="text-2xl text-gold md:text-3xl">چشم‌انداز و ماموریت</h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-9 text-muted-foreground">
            هدف ما ارائه خدماتی با بالاترین کیفیت در هر مرحله از پروژه است، از طراحی تا
            اجرا؛ تا بتوانیم پروژه‌هایی بسازیم که نه‌تنها عملکرد عالی داشته باشند، بلکه با
            دقت و زیبایی مهندسی‌شده خود، ارزش و اعتبار را به مشتریانمان هدیه دهند.
          </p>
          <button
            onClick={() => showDemoNotice("تماس با ما")}
            className="mt-9 rounded-sm bg-gold px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            تماس با ما
          </button>
        </div>
      </section>
    </>
  );
}
