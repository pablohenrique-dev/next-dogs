export function handleApiError(error: any) {
  if (error instanceof Error) {
    return error.message;
  }

  return "Um erro inesperado aconteceu.";
}
