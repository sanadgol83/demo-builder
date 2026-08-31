import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import serviceDesign from "@/assets/service-design.jpg";
import serviceBuild from "@/assets/service-build.jpg";
import project3 from "@/assets/project-3.jpg";
import project1 from "@/assets/project-1.jpg";
import { showDemoNotice } from "@/lib/demo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "خدمات | ملک باستان" },
      {
        name: "description",
        content:
          "خدمات ملک باستان: طراحی فاز ۱ و ۲، طراحی نقشه و پلان معماری، اجرای پروژه‌های ساختمانی و گودبرداری.",
      },
      { property: "og:title", content: "خدمات | ملک باستان" },
      {
        property: "og:description",
        content: "مشاوره و مدیریت کامل پروژه ساختمانی، از طراحی تا اجرا.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    img: serviceDesign,
    title: "طراحی فاز ۱ و فاز ۲",
    text: "تدوین طرح‌های اجرایی مطابق با استانداردهای روز و مقررات ساختمانی.",
  },
  {
    img: project1,
    title: "طراحی نقشه و پلان‌های معماری",
    text: "ارائه طراحی دقیق و استاندارد با توجه به نیاز پروژه و شرایط محیطی.",
  },
  {
    img: serviceBuild,
    title: "اجرای پروژه‌های ساختمانی",
    text: "اجرای تمامی مراحل ساخت و نظارت دقیق بر پیشرفت پروژه تا تکمیل.",
  },
  {
    img: project3,
    title: "گودبرداری و آماده‌سازی زمین",
    text: "انجام عملیات گودبرداری، خاک‌برداری و آماده‌سازی زمین برای شروع ساخت.",
  },
];

function Services() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-20 pb-14 text-center">
        <h1 className="text-3xl md:text-4xl">خدمات ما</h1>
        <span className="gold-rule mx-auto mt-5" />
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
          خلق فضاهایی که زیبایی و کاربری را هم‌زمان ارائه می‌دهند؛ مشاوره و مدیریت کامل
          پروژه، صرفه‌جویی در هزینه و زمان و جلوگیری از اشتباهات اجرایی.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-sm border border-border bg-surface"
            >
              <div className="aspect-16/10 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h2 className="text-lg text-gold">{s.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{s.text}</p>
                <button
                  onClick={() => showDemoNotice(s.title)}
                  className="mt-6 flex w-full items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground transition-colors hover:text-gold"
                >
                  <span>جزئیات بیشتر</span>
                  <ArrowLeft size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
