import { useState } from 'react';
import { Car } from './Car';
import { carsService } from './CarsService';
import { AxiosError } from 'axios';
import Swal from 'sweetalert2';

type CarCardProps = {
  car: Car
}

export default function CarCard({ car }: CarCardProps) {


  const [error, setError] = useState('')

  async function deleteCar() {

    const yes = confirm('are you sure?')

    if (!yes) { return }

    try {
      await carsService.deleteCar(car.id)
    }
    catch (e) {
      const error = e as AxiosError
      setError(error.message)
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        iconColor: 'var(--bs-danger-text-emphasis)',
        text: 'Uh-oh',
        position: 'top-right',
        timer: 1000 * 5,
        toast: true,
        showConfirmButton: false,
        color: 'var(--bs-danger-text-emphasis)',
        background: 'var(--bs-danger-bg-subtle)'
      })
    }


  }


  return (

    <div className="CarCard card rounded">
      <img className='rounded' src={car.imgUrl} alt={car._id} />

      <button className='btn btn-danger' onClick={deleteCar}>
        {error ? <span>{error}</span> : ''}
        <i className="mdi mdi-delete"></i>
      </button>

    </div>
  )

}