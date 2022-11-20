export interface CarListModel {
  id: number;
  brandId: number;
  model: string;
  year: number;
  color: string;
  price: number;
  isSold: boolean;
  state: number;
  description: string;
  imagePath: string;
}
