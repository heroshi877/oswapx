export const SUPPORTED_LOCALES = [
  // order as they appear in the language dropdown
  "en",
  "fr",
  "nl",
  "tr",
 
] as const;

export type SupportedLocale = typeof SUPPORTED_LOCALES[number];

export const DEFAULT_LOCALE: SupportedLocale = "en";

export const LOCALE_LABEL: { [locale in SupportedLocale]: string } = {
  en: "English",
  nl: "Nederlands",
  fr: "Français",
  tr: "Türkçe",
};

export const getUserLanguage = (): SupportedLocale => {
  const localStorageLanguage = localStorage
    .getItem("i18nextLng")
    ?.substring(0, 2) as SupportedLocale;
  const deviceLanguage = window.navigator.language.substring(
    0,
    2
  ) as SupportedLocale;

  if (
    localStorageLanguage &&
    SUPPORTED_LOCALES.includes(localStorageLanguage)
  ) {
    return localStorageLanguage;
  }

  if (deviceLanguage && SUPPORTED_LOCALES.includes(deviceLanguage)) {
    return deviceLanguage;
  }

  return DEFAULT_LOCALE;
};
