export interface CarCreation {
  make: string;
  model: string;
  imgUrl: string;
  year: number;
  price: number;
  description?: string;
  engineType?: string;
  color?: string;
}

export function getCarCreationObj() {
  return {
    imgUrl: '',
    make: '',
    model: '',
    price: 0,
    year: 1900
  }
}

export interface Car extends CarCreation {
  _id: string;
  creatorId: string;
  createdAt: string;
  updatedAt: string;
  creator: Creator;
  id: string;
}

interface Creator {
  _id: string;
  name: string;
  picture: string;
  id: string;
}
