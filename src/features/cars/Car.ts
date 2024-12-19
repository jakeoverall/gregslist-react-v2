export interface Car {
  _id: string;
  make: string;
  model: string;
  imgUrl: string;
  year: number;
  price: number;
  description?: string;
  engineType: string;
  creatorId: string;
  createdAt: string;
  updatedAt: string;
  creator: Creator;
  id: string;
  color?: string;
}

interface Creator {
  _id: string;
  name: string;
  picture: string;
  id: string;
}
