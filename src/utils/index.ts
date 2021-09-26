export const makeUrl = (protocol: string, domain: string, path: string) => (
  `${protocol}://${domain}/${path}`
)
