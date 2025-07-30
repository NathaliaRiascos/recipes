
export function getYouTubeVideoId(url?: string): string | null {
  if (!url) return null
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
  return match ? match[1] : null
}

export function extractInstructions(instructions: string) {
  if (!instructions) {
    return []
  }

  return instructions
    .split(/[\n\r]+/)
    .filter((step: string) => !/^\s*STEP \d+/i.test(step))
    .map((step) => step.replace(/^\s*\d+\.\s*/, '').trim())

}