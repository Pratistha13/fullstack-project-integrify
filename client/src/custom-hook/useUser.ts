import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUser } from '../redux/actions/user'
import { AppState } from '../types'


const useUser = () => {
    const dispatch = useDispatch<any>();
  const userData = useSelector(
    (state: AppState) => state.user.users
  )
  useEffect(() => {
    dispatch(fetchAllUser())
  }, [dispatch])
  return userData
}

export default useUser