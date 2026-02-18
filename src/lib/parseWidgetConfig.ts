export function parseWidgetConfig(
  envVar: string | undefined,
  fallbackId: string
): { id: string; title?: string } {
  try {
    return JSON.parse(envVar ?? "");
  } catch {
    return { id: fallbackId };
  }
}
