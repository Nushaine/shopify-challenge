export default async function getNasaImages(rover: string) {
  let resp = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&api_key=Mj456ZXrmYebTCpWvzStW0ho1ashh4KG7IogHFhn`)
  return resp.json()
}