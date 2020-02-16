import axios from 'axios'
import { Image } from '@/models/Image'

const app = axios.create({
  baseURL: 'http://localhost:3000',
})

export async function getList(): Promise<Image[]> {
  return app.get('/imgs').then(val => val.data)
}

export async function getImageInfo(name: string): Promise<Image> {
  const spl = name.split('.')
  return app.get(`/info/${spl[1]}/${spl[0]}`).then(val => val.data)
}
