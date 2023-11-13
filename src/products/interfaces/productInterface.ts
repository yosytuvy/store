import categoryType from "../types/categoryType";

interface ProductInterface {
  _id?: Object;
  name: string;
  category: categoryType;
  price: number;
  rating: number;
  image: string;
  company: string;
  screen?: string | null;
  processor?: string | null;
  battery?: string | null;
  lens?: string | null;
  inches?: number | null;
  graphicCard?: string | null;
  output?: string | null;
  storage?: string | null;
  engine?: string | null;
  capacity?: string | null;
  weight?: string | null;
  connections?: string | null;
}

export default ProductInterface;
