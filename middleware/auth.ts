import { useAuth } from "~~/stores/auth"
const isValid: boolean = false
let cookieToken = useCookie('token').value
export default defineNuxtRouteMiddleware(async () => {
    const user = useAuth().user
    if (!user) {
        // fetch user info
        const {data, error, pending, refresh} = useFetch('')
        //set token
    } else {
        // validate token

        // invalid
  }
  if (!isValid) navigateTo('/login')
})
