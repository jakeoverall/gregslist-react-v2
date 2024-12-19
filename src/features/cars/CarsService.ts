import Axios from 'axios'
import { Car, CarCreation } from './Car'
import { carsStore } from './CarsStore'

export const carsApi = Axios.create({
  baseURL: carsStore.baseUrl,
  timeout: 8000
})


class CarsService {
  async deleteCar(id: string) {
    await carsApi.delete(id)
    carsStore.removeCar(id)
  }
  async createCar(carData: CarCreation) {
    const res = await carsApi.post('', carData)
    carsStore.addCar(res.data)
  }

  async getCars() {
    const response = await carsApi.get('')
    carsStore.cars = response.data
  }


}


export const carsService = new CarsService()