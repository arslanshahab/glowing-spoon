import { StaticImageData } from 'next/image'

export type Asset = {
  name: string
  image: string
  thumbnail: string | StaticImageData | any
  permalink: string
}
