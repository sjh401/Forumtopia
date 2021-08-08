import { useEffect } from 'react'
import { signOut } from '../../services/user'
import { useHistory } from 'react-router-dom'

const SignOut = (props) => {
  const { setUser } = props
  const history = useHistory()

  useEffect(() => {
    const signOutUser = async () => {
      await signOut()
      setUser(null)
      history.push('/')
    }
    signOutUser()
  }, [history, setUser])

  
  return ''
}

export default SignOut
