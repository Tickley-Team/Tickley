export const delay: (ms: number) => Promise<boolean> = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

export const DateNowToUnix = () => Math.floor(Date.now() / 1000)
