import { Car } from './Car';

type CarCardProps = {
  car: Car
}

export default function CarCard({ car }: CarCardProps) {

  return (

    <div className="CarCard card rounded">
      <img className='rounded' src={car.imgUrl} alt={car._id} />
    </div>
  )

}