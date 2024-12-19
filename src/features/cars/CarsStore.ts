import { action, makeAutoObservable } from "mobx"

import { Car } from './Car'


class CarsStore {

  baseUrl = 'https://sandbox.codeworksacademy.com/api/cars'
  userId = ''

  cars: Car[] = [
    // {
    //   _id: '',
    //   createdAt: new Date().toISOString(),
    //   updatedAt: new Date().toISOString(),
    //   creator: { _id: '1234567', name: 'testing', picture: 'https://media.tumblr.com/73b6bbb5a253780cfa957f4afd8d9e86/tumblr_inline_mqe0j8cDgp1qz4rgp.gif', id: '1234567' },
    //   creatorId: '1234567',
    //   id: '',
    //   imgUrl: 'https://www.bing.com/th?id=OIP.TAWljuSMTPGLyOgpWNYAHgHaEh&w=197&h=120&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2',
    //   make: 'Honda',
    //   model: 'Accord',
    //   price: 9000,
    //   year: 1985
    // }
  ]

  /**
   * Can use this method to set the identity of the cars store
   * @param userId 
   */
  setUserId(userId: string) {
    this.userId = userId
  }

  addCar(car: Car) {
    this.cars = [...this.cars, car]
  }
  removeCar(id: string) {
    this.cars = this.cars.filter(c => c.id != id)
  }

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