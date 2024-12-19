import { AppState } from '../AppState';
import CarsList from '../features/cars/CarsList';

export default function HomePage() {



  return (
    <div className="home-page">
      <CarsList />
    </div>
  )
}