import { Ingredients } from './ingredient.interface';

export interface Cocktails {
  name: string;
  img?: string;
  description: string;
  ingredients?: Ingredients[];
}
