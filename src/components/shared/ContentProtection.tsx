"use client"

import { useEffect } from "react"

export function ContentProtection() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Disable common keyboard shortcuts for saving/inspecting
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "C") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "u") ||
        (e.ctrlKey && e.key === "s") ||
        (e.ctrlKey && e.key === "p")
      ) {
        e.preventDefault()
        return false
      }
    }

    // Disable drag on images
    const handleDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault()
        return false
      }
    }

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("dragstart", handleDragStart)

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("dragstart", handleDragStart)
    }
  }, [])

  return null
}