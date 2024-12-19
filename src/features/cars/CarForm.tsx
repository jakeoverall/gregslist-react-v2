import { useState } from 'react'
import { Car, CarCreation, getCarCreationObj } from './Car'
import { carsService } from './CarsService'

export default function CarForm() {

  const [carData, setCarData] = useState<CarCreation>(getCarCreationObj())


  async function handleSubmit() {
    event?.preventDefault()
    const form = event?.target as HTMLFormElement

    await carsService.createCar(carData)

    // look this up
    // const data = {
    //   make: form.make.value,
    //   model: form.model.value
    // }

    // console.log('cool thanks for submitting', data)
    form.reset()
    setCarData(getCarCreationObj())
  }

  function handleChange() {
    const target = event?.target as HTMLInputElement
    const { name, value } = target // syntactic sugar
    console.log('did it clear', name)
    setCarData({ ...carData, [name]: value })
  }


  return (
    <form className="CarForm" onSubmit={handleSubmit}>

      <div className="row">
        <div className="col">
          <div className="form-floating">
            <input type="text" name='make' className='form-control' required placeholder='make' onChange={handleChange} />
            <label htmlFor="make">Make</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input type="text" name='model' className='form-control' required placeholder='model' onChange={handleChange} />
            <label htmlFor="model">Model</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input type="text" name='year' className='form-control' required placeholder='year' onChange={handleChange} />
            <label htmlFor="year">Year</label>
          </div>
        </div>
      </div>
      <div className="row my-2">
        <div className="col">
          <div className="form-floating">
            <input type="text" name='price' className='form-control' required placeholder='price' onChange={handleChange} />
            <label htmlFor="price">price</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input type="text" name='imgUrl' className='form-control' required placeholder='http://carpicture.com' onChange={handleChange} />
            <label htmlFor="imgUrl">http://</label>
          </div>
        </div>
      </div>

      <button type='submit' className='btn btn-outline-primary'>Submit</button>


    </form>
  )

}