import { observer } from 'mobx-react-lite';
import { carsStore } from './CarsStore';
import { useEffect } from 'react';
import { carsService } from './CarsService';
import CarCard from './CarCard';

function CarsList() {


  const cars = carsStore.cars

  useEffect(() => {
    carsService.getCars()
  }, [])



  return (
    <div className="CarsList">
      <div className="container">
        <div className="row">
          {
            cars.map(c => <div className='col-md-4 my-2'>
              <CarCard car={c} />
            </div>
            )
          }

        </div>
      </div>
    </div>
  )

}
export default observer(CarsList)