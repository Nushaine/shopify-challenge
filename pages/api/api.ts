// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function getNasaImages(rover: string) {
  let resp = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&api_key=Mj456ZXrmYebTCpWvzStW0ho1ashh4KG7IogHFhn`)
  return resp.json()
}
