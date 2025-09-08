import { getNavItems, getNavPreview, type NavItem, type NavPreview } from './content'

// Export navigation items from content loader
export const NAV_ITEMS: NavItem[] = getNavItems()

// Helper function to get nav preview data
export function getNavPreviewData(key: string): NavPreview | undefined {
  return getNavPreview(key)
}
