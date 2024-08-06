type Category = {
  name: string
  url: string
}

type Treatment = {
  name: string
  url: string
  categories: string[]
}

export type { Category, Treatment }
