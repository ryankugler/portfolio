import type { TimelineEntry } from './types'

export const DEFAULT_TIMELINE: TimelineEntry[] = [
  {
    date: 'January 2026',
    role: "Pursuing a Master's Degree!",
    company: 'The University of Colorado-Boulder',
    body: "Enrolled in the Master's of Science in Artificial Intelligence at the University of Colorado-Boulder",
  },
  {
    date: 'February 2025 - Present',
    role: 'Vulnerability Security Engineer',
    company: 'TD Bank',
    body: 'Joined TD Bank full-time as part of the Vulnerability Protect team!',
  },
  {
    date: 'November 2024 - December 2024',
    role: 'Automation Engineer (Contract)',
    company: 'Automation Accelerator',
    body: 'Joined Automation Accelerator to support their mission of providing innovative solutions to difficult problems using automation and artificial intelligence',
  },
  {
    date: 'June 2024',
    role: 'Graduated Computer Engineering!',
    company: 'University of Waterloo',
    body: 'Received my BASc. in Computer Engineering from the University of Waterloo Graduated with Distinction!',
  },
  {
    date: 'Sept 2023 - Dec 2023',
    role: 'Software Engineer (Co-op)',
    company: 'Studica Robotics',
    body: 'From low-level C++ performance gains to a sleek React interface, I modernized a flagship application into a fast, real-time, cross-platform desktop experience',
  },
  {
    date: 'Jan 2023 - Apr 2023',
    role: 'Full-Stack Software Engineer (Co-op)',
    company: 'TD Bank',
    body: 'I helped transform credit card approvals into a fast, automated experience by assisting in the development of a full-stack Java and React application, designing scalable UI components, and writing extensive test coverage that significantly boosted product quality and team velocity.',
  },
  {
    date: 'Jan 2022 - Apr 2022',
    role: 'QA Analyst (Co-op)',
    company: 'TD Bank',
    body: 'I helped improve the quality and confidence of secure software releases by building automated test coverage, streamlining regression validation, and managing large-scale test suites that verified core object-oriented functionality.',
  },
  {
    date: 'May 2021 - Aug 2021',
    role: 'Project Manager (Co-op)',
    company: 'AltaML / University of Waterloo',
    body: 'I led a cross-functional team to design and deliver an AI/ML learning experience, guiding students through hands-on projects in NLP, computer vision, sentiment analysis, and chatbots using Azure and Python’s machine learning ecosystem.',
  },
  {
    date: 'Jan 2021',
    role: 'Switched Majors to Computer Engineering!',
    company: 'University of Waterloo',
    body: 'Decided I\'ve had enough of circuits, I wanted to code more!',
  },
  {
    date: 'Sep 2020 - Dec 2020',
    role: 'Front-End Software Developer (Co-op)',
    company: 'University of Waterloo',
    body: 'I built interactive front-end experiences in React for an academic platform used by hundreds of students',
  },
  {
    date: 'Jan 2020 - Apr 2020',
    role: 'IT Analyst (Co-op)',
    company: 'MS Canada',
    body: 'I engineered software and hardware solutions for a large workforce (in english and french!), analyzing recurring issues and building clear technical documentation that improved system reliability and day-to-day support efficiency.',
  },
  {
    date: '2019 - 2024',
    role: 'Started Electrical Engineering',
    company: 'University of Waterloo',
    body: '',
  },
]

function createTimelineItem(entry: TimelineEntry): HTMLDivElement {
  const item = document.createElement('div')
  item.className = 'timeline-item reveal'

  const dot = document.createElement('div')
  dot.className = 'timeline-dot'

  const date = document.createElement('div')
  date.className = 'timeline-date'
  date.textContent = entry.date

  const role = document.createElement('div')
  role.className = 'timeline-role'
  role.textContent = entry.role

  const company = document.createElement('div')
  company.className = 'timeline-company'
  company.textContent = entry.company

  const body = document.createElement('div')
  body.className = 'timeline-body'
  body.textContent = entry.body

  item.append(dot, date, role, company, body)
  return item
}

export function initTimeline(): void {
  const list = document.getElementById('timeline-list')
  if (!list) return

  DEFAULT_TIMELINE.forEach((entry) => {
    list.appendChild(createTimelineItem(entry))
  })
}
