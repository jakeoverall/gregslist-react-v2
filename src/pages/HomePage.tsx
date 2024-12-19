import { AppState } from '../AppState';
import CarForm from '../features/cars/CarForm';
import CarsList from '../features/cars/CarsList';

export default function HomePage() {



  return (
    <div className="home-page">
      <CarForm />
      <CarsList />
    </div>
  )
}