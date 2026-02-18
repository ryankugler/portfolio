import type { Project } from './types'

export const DEFAULT_PROJECTS: Project[] = [
  {
    title: 'NBA Imposter Game (In Progress)',
    description:
      'Everyone is given a random NBA superstar except for one player (the imposter), figure out who the imposter is before they can guess the NBA player!',
    tags: ['Typescript', 'Postgres', 'Statefulness', 'Real-Time', 'React'],
    link: 'https://nba-imposter.vercel.app/',
  },
  {
    title: '2-D Rectangle Packer',
    description:
      'This project implements a genetic algorithm using Ant Colony Optimization (ACO) to solve the NP-Hard Rectangle Packing Problem.',
    tags: ['Python', 'Ant Colony Optimization', 'numpy', 'matplotlib'],
    link: 'https://github.com/ryankugler/bin-packing-aco',
  },
  {
    title: 'Systolic Matrix Multiplier',
    description:
      'Created a systolic 16x16 matrix in Verilog to deploy onto a Xilinx PYNQ FPGA',
    tags: ['Verilog', 'Xilinx PYNQ FPGA', 'Vivado'],
    link: 'https://github.com/ryankugler/systolic_array',
  },
  {
    title: 'Youtube to MP3 Converter',
    description:
      'Quickly download the .mp3 of a Youtube video and integrate with personal, offline, Spotify playlists',
    tags: ['Python'],
    link: 'https://github.com/ryankugler/yt2mp3',
  },
]

function createTagEl(text: string): HTMLSpanElement {
  const span = document.createElement('span')
  span.className = 'tag'
  span.textContent = text
  return span
}

function createProjectCard(project: Project): HTMLDivElement {
  const card = document.createElement('div')
  card.className = 'project-card reveal'

  const header = document.createElement('div')
  header.className = 'project-header'

  const title = document.createElement('span')
  title.className = 'project-title'
  title.textContent = project.title

  const link = document.createElement('a')
  link.className = 'project-link'
  link.href = project.link
  link.textContent = '↗ View'

  header.append(title, link)

  const desc = document.createElement('p')
  desc.className = 'project-desc'
  desc.textContent = project.description

  const tags = document.createElement('div')
  tags.className = 'tags'
  project.tags.forEach((t) => tags.appendChild(createTagEl(t)))

  card.append(header, desc, tags)
  return card
}

export function initProjects(): void {
  const grid = document.getElementById('projects-grid')
  if (!grid) return

  DEFAULT_PROJECTS.forEach((project) => {
    grid.appendChild(createProjectCard(project))
  })
}
