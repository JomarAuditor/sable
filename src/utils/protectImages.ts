/**
 * Blocks right-click context menu on all images,
 * prevents drag-to-save, and disables long-press save on mobile.
 * Call once at app mount.
 */
export function enableImageProtection() {
  const block = (e: Event) => e.preventDefault()

  // Right-click context menu on <img> elements
  document.addEventListener('contextmenu', (e) => {
    if ((e.target as HTMLElement).tagName === 'IMG') e.preventDefault()
  })

  // Drag start (drag-to-desktop on desktop browsers)
  document.addEventListener('dragstart', (e) => {
    if ((e.target as HTMLElement).tagName === 'IMG') e.preventDefault()
  })

  // Touch callout / long-press on iOS Safari — handled via CSS (see index.css)
  return block // unused, satisfies linter
}
