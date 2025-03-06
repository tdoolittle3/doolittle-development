import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

 // Custom smooth scroll function with slower animation
export const smoothScrollToDiv = (e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => {
    e.preventDefault()

    const projectsSection = document.getElementById(sectionId)
    if (!projectsSection) return

    const targetPosition = projectsSection.offsetTop
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 1500 // Longer duration for slower scroll (in ms)
    let start: number | null = null

    // Easing function for smoother acceleration/deceleration
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const animateScroll = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = easeInOutCubic(progress)

      window.scrollTo(0, startPosition + distance * easeProgress)

      if (elapsed < duration) {
        window.requestAnimationFrame(animateScroll)
      }
    }

    window.requestAnimationFrame(animateScroll)
  }
