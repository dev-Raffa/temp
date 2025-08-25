import { storageKeys } from '@/config/storage-keys';
import axios from 'axios';

const tenant = process.env.NEXT_PUBLIC_TENANT

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_API,
  headers: {
    'Content-Type': 'application/json;',
    Tenant: `${tenant}`
  },
})

export class AuthService {
  static async signIn(
    username: string,
    password: string,
  ) {
    try {
      const { data } = await httpClient.post("/users/login", {
        username,
        password,
      })

      localStorage.setItem(storageKeys.accessToken, data.accessToken);

      return data
    } catch (error) {
      console.log(error)
      throw new Error('Internal server error!')
    }
  }
}
