import { service } from './service'

export const getUsers = (userId?: number) =>
  userId ? service.get(`/users/${userId}`) : service.get('/users')
