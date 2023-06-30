import type { Paths } from "@interfaces/paths"

export const getPaths = (props: Paths) => {
  const array = Object.values(props)
  return array.join('/')
}