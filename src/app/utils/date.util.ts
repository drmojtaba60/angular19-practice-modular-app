export function formatDate(date: Date, locale = 'fa-IR'): string {
  return new Intl.DateTimeFormat(locale).format(date);
}
