export interface WidgetConfig {
  id: string;
  title?: string;
}

export function parseWidgetConfig(
  envVar: string | undefined,
  fallbackId: string
): WidgetConfig {
  if (!envVar) return { id: fallbackId };
  try {
    const parsed = JSON.parse(envVar);
    if (parsed && typeof parsed === "object" && typeof parsed.id === "string") {
      return parsed as WidgetConfig;
    }
  } catch {
    // invalid JSON — fall through to fallback
  }
  return { id: fallbackId };
}
