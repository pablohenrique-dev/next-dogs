export function handleApiError(error: any) {
  if (error instanceof Error) {
    return { ok: false, error: error.message, data: null };
  }
  return { ok: false, error: "Um erro inesperado aconteceu.", data: null };
}
