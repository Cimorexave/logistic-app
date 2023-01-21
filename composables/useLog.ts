const {log} = console
const useLog = (input: unknown, label?: string) => log(`${label ?? input}`,input)
export default useLog

