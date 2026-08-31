import { toast } from "sonner";

export function showDemoNotice(section?: string) {
  toast("این بخش در نسخه دمو طراحی نشده است", {
    description: section
      ? `«${section}» در نسخه کامل پیاده‌سازی می‌شود.`
      : "تنها صفحات اصلی، درباره ما، خدمات و پروژه‌ها در دمو طراحی شده‌اند.",
  });
}
