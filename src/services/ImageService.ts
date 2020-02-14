import axios from 'axios'
import { Img } from '@/models/Img'

const app = axios.create({
  baseURL: 'http://localhost:3000',
})

export async function getList(): Promise<Img[]> {
  return app.get('/imgs').then(val => val.data)
}
