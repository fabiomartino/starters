import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeClass = 'ion-palette-dark';

  /**
   * Toggle dark/light theme and persist user preference
   */
  toggleDarkMode(): void {
    const isDark = document.documentElement.classList.toggle(this.themeClass);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  /**
   * Apply dark mode explicitly
   */
  setDarkMode(enabled: boolean): void {
    document.documentElement.classList.toggle(this.themeClass, enabled);
    localStorage.setItem('theme', enabled ? 'dark' : 'light');
  }

  /**
   * Return current theme status
   */
  isDarkMode(): boolean {
    return document.documentElement.classList.contains(this.themeClass);
  }

  /**
   * Initialize theme based on localStorage or system preference
   */
  initializeTheme(): void {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored === 'dark' || (!stored && prefersDark);
    document.documentElement.classList.toggle(this.themeClass, isDark);
  }
}
