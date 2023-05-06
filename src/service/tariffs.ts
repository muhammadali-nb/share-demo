export interface ITariff {
  id: number,
  name: string,
  image: string
  deposite: number
}

export const tariffs: Array<ITariff> = [
  {
    id: 1,
    name: 'Start',
    image: '/taxi_clasess/tesla_3.png',
    deposite: 2
  },
  {
    id: 2,
    name: 'Comfort',
    image: '/taxi_clasess/tesla_s.png',
    deposite: 2.5
  },
  {
    id: 3,
    name: 'Busines',
    image: '/taxi_clasess/tesla_x.png',
    deposite: 3.5
  }
]