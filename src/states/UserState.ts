import { atom } from 'jotai'
import { loadable } from 'jotai/utils'
import { AxiosResponse } from 'axios'

import { User } from '../types/User'
import { getUsers } from '../services/UserService'

export const usersState = loadable(
  atom<Promise<AxiosResponse<User[]>>>(async () => getUsers()),
)
