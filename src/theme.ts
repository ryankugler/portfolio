import type { Theme } from './types'

const STORAGE_KEY = 'portfolio-theme'

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
  return stored ?? getSystemTheme()
}

function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem(STORAGE_KEY, theme)
}

export function initTheme(): void {
  applyTheme(getInitialTheme())

  const toggle = document.getElementById('theme-toggle') as HTMLButtonElement | null
  if (!toggle) return

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') as Theme
    applyTheme(current === 'dark' ? 'light' : 'dark')
  })
}
