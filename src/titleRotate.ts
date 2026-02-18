const ROTATING_TITLES = [
  'Software Engineer',
  'AI Enthusiast',
  'Builder',
  'Full-Stack Developer',
  'NBA Fan',
  'Security Engineer',
  'Nerd',
]

const ROTATE_INTERVAL_MS = 2400
const EXIT_DURATION_MS = 220
const ENTER_CLEANUP_MS = 280

export function initTitleRotate(): void {
  const eyebrow = document.querySelector<HTMLElement>('.hero-eyebrow')
  if (!eyebrow || ROTATING_TITLES.length === 0) return

  let titleIndex = 0
  eyebrow.textContent = ROTATING_TITLES[titleIndex]

  window.setInterval(() => {
    eyebrow.classList.remove('title-in')
    eyebrow.classList.add('title-out')

    window.setTimeout(() => {
      titleIndex = (titleIndex + 1) % ROTATING_TITLES.length
      eyebrow.textContent = ROTATING_TITLES[titleIndex]

      eyebrow.classList.remove('title-out')
      eyebrow.classList.add('title-in')

      window.setTimeout(() => {
        eyebrow.classList.remove('title-in')
      }, ENTER_CLEANUP_MS)
    }, EXIT_DURATION_MS)
  }, ROTATE_INTERVAL_MS)
}
