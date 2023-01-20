import { defineStore } from "pinia";
interface IAuthStore {
    user: {
        name: string
        id: number
        number: string
        token: string
    } | null
}
export const useAuth = defineStore('auth', {
    state: () => ({
        user: null
    })
})