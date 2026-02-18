import './style.css'
import { initTheme } from './theme'
import { initProjects } from './projects'
import { initTimeline } from './timeline'
import { initScrollReveal } from './scrollReveal'
import { initTitleRotate } from './titleRotate'

function forceTopOnLoad(): void {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }
  if (window.location.hash) {
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
  }
  window.scrollTo(0, 0)
}

document.addEventListener('DOMContentLoaded', () => {
  forceTopOnLoad()
  initTheme()
  initProjects()
  initTimeline()
  initScrollReveal()
  initTitleRotate()

  const loadingBuffer = document.getElementById('loading-buffer')
  window.setTimeout(() => {
    document.body.classList.remove('app-loading')
    if (!loadingBuffer) return
    loadingBuffer.classList.add('hidden')
    window.setTimeout(() => loadingBuffer.remove(), 220)
  }, 500)
})
