export const makeUrl = (protocol: string, domain: string, path: string): string => (
  `${protocol}://${domain}/${path}`
)

export const convertHMSToMS = (hms: string): number => {
  const [hh, mm, ss] = hms.split(':')

  return ((+hh) * 60 * 60 + (+mm) * 60 + (+ss)) * 1000
}

export const getIsScreenRetina = (): boolean | 0 => (
  ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3))
)
