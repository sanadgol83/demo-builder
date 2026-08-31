import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import serviceBuild from "@/assets/service-build.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import aboutImg from "@/assets/about.jpg";
import { showDemoNotice } from "@/lib/demo";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "پروژه‌ها | ملک باستان" },
      {
        name: "description",
        content:
          "نمونه پروژه‌های ملک باستان؛ مجتمع‌های مسکونی، پروژه‌های تجاری، صنعتی و گودبرداری.",
      },
      { property: "og:title", content: "پروژه‌ها | ملک باستان" },
      {
        property: "og:description",
        content: "نمونه‌هایی از طراحی و اجرای دقیق مهندسی در پروژه‌های ملک باستان.",
      },
    ],
  }),
  component: Projects,
});

const projects = [
  { img: project1, title: "مجتمع مسکونی رویال", tag: "مسکونی", sub: "طراحی فاز ۲ و اجرای کامل", span: "md:col-span-2 md:row-span-2" },
  { img: project2, title: "لابی هتل پارس", tag: "تجاری", sub: "طراحی داخلی و نما", span: "" },
  { img: serviceBuild, title: "برج مسکونی آرام", tag: "مسکونی", sub: "اجرای اسکلت و نما", span: "" },
  { img: project3, title: "ویلای مهرشهر", tag: "گودبرداری", sub: "خاک‌برداری و پی‌سازی", span: "" },
  { img: aboutImg, title: "مجتمع طالقانی", tag: "مسکونی", sub: "بازسازی نما", span: "" },
  { img: serviceDesign, title: "ساختمان اداری کیش", tag: "اداری", sub: "طراحی فاز ۱ و ۲", span: "md:col-span-2" },
];

function Projects() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-20 pb-14">
        <h1 className="text-3xl md:text-4xl">پروژه‌های ما</h1>
        <span className="gold-rule mt-5" />
        <p className="mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
          نمونه‌هایی از طراحی و اجرای دقیق مهندسی؛ تجلی ترکیب خلاقیت و تخصص در خلق فضاهای
          مدرن و ماندگار. با بهره‌گیری از استانداردهای روز و متریال باکیفیت، پروژه‌هایی
          فراتر از انتظار را به واقعیت تبدیل می‌کنیم.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
          {projects.map((p) => (
            <button
              key={p.title}
              onClick={() => showDemoNotice(`صفحه پروژه ${p.title}`)}
              className={`group relative overflow-hidden rounded-sm border border-border text-right ${p.span}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover grayscale-[30%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="rounded-xs bg-gold/90 px-2 py-0.5 text-[10px] text-primary-foreground">
                  {p.tag}
                </span>
                <h2 className="mt-2 text-base">{p.title}</h2>
                <p className="mt-1 text-xs text-muted-foreground">{p.sub}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="pb-24 text-center">
        <button
          onClick={() => showDemoNotice("مشاهده پروژه‌های بیشتر")}
          className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm text-muted-foreground transition-colors hover:border-gold hover:text-gold"
        >
          مشاهده پروژه‌های بیشتر
          <ChevronDown size={16} />
        </button>
      </section>
    </>
  );
}
