import { ReactNode } from 'react'

interface Project {
  name: string
  description: ReactNode
  imageUrl: string
  link?: string
}

export default Project