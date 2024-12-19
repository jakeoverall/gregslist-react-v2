import { action, makeAutoObservable } from "mobx"

import { Car } from './Car'


class CarsStore {

  baseUrl = 'https://sandbox.codeworksacademy.com/api/cars'

  cars: Car[] = []


  constructor() {
    makeAutoObservable(this)
  }

}


export const carsStore = new Proxy(new CarsStore(), {
  get(target, prop: string) {
    // @ts-ignore
    return target[prop]
  },
  set(target, prop: string, value) {
    action(() => {
      // @ts-ignore
      target[prop] = value
    })()
    return true
  }
})