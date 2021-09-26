import { DOMAIN, PROTOCOL } from "../constants/locations"
import { makeUrl } from "../utils"

async function fetchBody(url: string, headers?: Headers) {
  try {
    const res = await fetch(url, { headers })
    const { ok, status } = res

    if(ok) return res.json()
    throw new Error(`status code ${status}`)
  } catch(err) {
    throw err
  }
}

export async function fetchFromEndpoint(path: string): Promise<any> {
  const url = makeUrl(PROTOCOL, DOMAIN, path)

  try {
    return await fetchBody(url)
  } catch(err) {
    throw String(err)
  }
}
