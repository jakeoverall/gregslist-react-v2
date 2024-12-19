import { Car } from './Car'
import { carsStore } from './CarsStore'


class CarsService {

  async getCars() {
    const response = await fetch(carsStore.baseUrl)
    const cars = await response.json()
    carsStore.cars = cars
  }


}


export const carsService = new CarsService()