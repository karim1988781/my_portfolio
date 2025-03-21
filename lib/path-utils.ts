/**
 * Get the base path for the application
 * In production (GitHub Pages), this will be the repository name
 * In development, this will be an empty string
 */
export function getBasePath(): string {
    return process.env.NODE_ENV === "production" ? "/portfolio" : ""
  }
  
  