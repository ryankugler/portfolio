export function initScrollReveal(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08 },
  )

  // Observe existing + future .reveal elements via a MutationObserver
  const attachObserver = (root: Element | Document = document): void => {
    root.querySelectorAll<HTMLElement>('.reveal').forEach((el) => observer.observe(el))
  }

  attachObserver()

  const mutation = new MutationObserver((records) => {
    records.forEach((record) => {
      record.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          if (node.classList.contains('reveal')) observer.observe(node)
          node.querySelectorAll<HTMLElement>('.reveal').forEach((el) => observer.observe(el))
        }
      })
    })
  })

  mutation.observe(document.body, { childList: true, subtree: true })
}
