export type Theme = 'light' | 'dark'

export interface Project {
  title: string
  description: string
  tags: string[]
  link: string
}

export interface TimelineEntry {
  date: string
  role: string
  company: string
  body: string
}
