import Axios from 'axios'
import { Car, CarCreation } from './Car'
import { carsStore } from './CarsStore'

export const carsApi = Axios.create({
  baseURL: carsStore.baseUrl,
  timeout: 8000
})


class CarsService {
  async createCar(carData: CarCreation) {
    const res = carsApi.post('', carData)
  }

  async getCars() {
    const response = await carsApi.get('')
    carsStore.cars = response.data
  }


}


export const carsService = new CarsService()