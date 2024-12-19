import { action, makeAutoObservable } from "mobx"
import { isValidProp } from "../../utils/isValidProp"
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
    isValidProp(target, prop)
    // @ts-ignore
    return target[prop]
  },
  set(target, prop: string, value) {
    isValidProp(target, prop)
    action(() => {
      // @ts-ignore
      target[prop] = value
    })()
    return true
  }
})