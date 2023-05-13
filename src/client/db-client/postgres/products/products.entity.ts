import { Column, Entity, PrimaryColumn } from 'typeorm';
export class FeatureDto {
  featureId: string;
  featureName: string;
  price: number;
}

@Entity('products')
export class Product {
  @PrimaryColumn('varchar')
  productId: string;

  @Column('varchar')
  productName: string;

  @Column('jsonb')
  features: FeatureDto[];
}
