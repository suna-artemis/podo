import { useAtom } from 'jotai'

import Counter from '../components/Counter'
import { countState } from '../states/CountState'
import UserList from '../components/UserList'
import { usersState } from '../states/UserState'

interface IndexProps {}
const Main = ({}: IndexProps) => {
  const [res] = useAtom(usersState)

  return (
    <div className='h-screen overflow-y-auto bg-slate-400'>
      {res.state === 'loading' ? (
        <div>loading </div>
      ) : res.state === 'hasError' ? (
        <div>error</div>
      ) : (
        <UserList users={res.data.data} />
      )}
    </div>
  )
}

export default Main
