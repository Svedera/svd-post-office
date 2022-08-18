import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeSwedish from '@angular/common/locales/sv';
import localeenGB from '@angular/common/locales/en-GB';
import localeET from '@angular/common/locales/et';
import localeRU from '@angular/common/locales/ru';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private defaultLocale = 'en-US';

  registerLocaleCulture(): string {
    const currentLocale = this.getCurrentLocale();
    const registeredLocale = this.registerCulture(currentLocale);
    return registeredLocale;
  }

  private registerCulture(culture: string): string {
    if (!culture) {
      return this.defaultLocale;
    }
    culture = culture.toLowerCase();
    // Register locale data since only the en-US locale data comes with Angular
    switch (culture) {
      case 'en-gb': {
        registerLocaleData(localeenGB);
        return 'en-gb';
      }
      case 'sv-se': {
        registerLocaleData(localeSwedish);
        return 'sv-se';
      }
      case 'et': {
        registerLocaleData(localeET);
        return 'et';
      }
      case 'ru': {
        registerLocaleData(localeRU);
        return 'ru';
      }
      default:
        return this.defaultLocale;
    }
  }

  getCurrentLocale(): string {
    if (typeof window === 'undefined'
      || typeof window.navigator === 'undefined') {
      return this.defaultLocale;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wn = window.navigator as any;
    let lang = wn.languages ? wn.languages[0] : this.defaultLocale;
    lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
    return lang;
  }
}
