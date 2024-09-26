export interface Cards {
  name: string
  url: string
}

export interface CardsResponse {
  count: number
  next: string | null
  previous: string | null
  results: Cards[]
}
