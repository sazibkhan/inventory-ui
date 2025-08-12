export interface ProductModel {
  id?: number;
  productName: string;
  description: string;
  barCode: string;
  brandId: number;
  brandName?: string;
  categoryId: number;
  categoryName?: string;
  productImages?: any;
  purchasePrice: number;
  salesPrice: number;
  discountAmount: number;
  enabled?: boolean | null;
}
