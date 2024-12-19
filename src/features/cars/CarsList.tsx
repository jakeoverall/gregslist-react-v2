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
      {
        cars.map(c => <div className='car-card' key={c.id}>
          <CarCard car={c} />
        </div>
        )
      }

    </div>
  )

}
export default observer(CarsList)