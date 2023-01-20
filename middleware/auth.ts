import { useAuth } from "~~/stores/auth"
const isValid: boolean = false
export default defineNuxtRouteMiddleware(async () => {

    const user = useAuth().user
    if (!user) {
        // fetch user info
    } else {
        const cookieToken = useCookie('token').value
        // validate token

        // invalid
  }

  if (!isValid) navigateTo('/login')
})
