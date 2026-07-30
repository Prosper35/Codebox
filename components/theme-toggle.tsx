'use client'

import { Moon, Sun } from 'lucide-react'

const themeStorageKey = 'codebox-theme'

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement
    const followsDarkSystemTheme =
      !root.classList.contains('light') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = root.classList.contains('dark') || followsDarkSystemTheme
    const nextTheme = isDark ? 'light' : 'dark'

    root.classList.remove('light', 'dark')
    root.classList.add(nextTheme)
    localStorage.setItem(themeStorageKey, nextTheme)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      className="flex size-10 items-center justify-center text-foreground transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-none"
    >
      <Moon className="size-4 dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-4 dark:block" aria-hidden="true" />
    </button>
  )
}
