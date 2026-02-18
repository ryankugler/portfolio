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
    body: 'Refactored the company’s flagship application backend from C# to C++ leading to a 30% increase in system performance and full compatibility with API updates Leveraged Boost.Asio to facilitate real-time data reception from COM ports, enhancing the precision of gyro sensor data by 15% Pivoted the front-end architecture from an HTML/CSS structure into a dynamic and responsive React framework, improving load-times by 25% Packaged the application using Electron for cross-platform deployment on Windows and macOS',
  },
  {
    date: 'Jan 2023 - Apr 2023',
    role: 'Full-Stack Software Engineer (Co-op)',
    company: 'TD Bank',
    body: 'Developed and maintained a Java and React application for bank associates, reducing approval-time for credit cards by 65% by automating eligibility-assessments and decision-making processes Created reusable and scalable UI components using TailwindCSS and MaterialUI in React, resulting in a 20% reduction in front-end development time Authored 60+ JUnit test-suites using Mockito, improving defect-detection in legacy code by 80%',
  },
  {
    date: 'Jan 2022 - Apr 2022',
    role: 'QA Analyst (Co-op)',
    company: 'TD Bank',
    body: 'Built and executed testing suites using Tricentis Tosca to automate verification of high-security applications, achieving a 50% reduction in testing time Automated functional and regression tests, improving overall result accuracy by 15% Oversaw a test suite of over 300 test cases built to assess OOP behavior such as abstraction and inheritance',
  },
  {
    date: 'May 2021 - Aug 2021',
    role: 'Project Manager (Co-op)',
    company: 'AltaML / University of Waterloo',
    body: 'Led a team of software developers and industry experts to create and deliver an AI/ML course for 90+ students using Gantt Charts for process-mapping; resulting in a 97% course-completion rate and 99% satisfaction rate Designed, administered, and tested 4 machine-learning oriented projects based on NLP, computer vision, sentiment analysis, and chatbots using Azure and various Python libraries (scikit-learn, OpenCV, NLTK)',
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
    body: 'Led a team of software developers and industry experts to create and deliver an AI/ML course for 90+ students using Gantt Charts for process-mapping; resulting in a 97% course-completion rate and 99% satisfaction rate Designed, administered, and tested 4 machine-learning oriented projects based on NLP, computer vision, sentiment analysis, and chatbots using Azure and various Python libraries (scikit-learn, OpenCV, NLTK)',
  },
  {
    date: 'Jan 2020 - Apr 2020',
    role: 'IT Analyst (Co-op)',
    company: 'MS Canada',
    body: 'Engineered various software and hardware solutions for over 500 employees in English and French Conducted thorough analysis of recurring issues to identify trends and develop technical documentation for company solutions database, resulting in a 75% reduction in problem occurrence',
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
