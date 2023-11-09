import { Controller, Get } from '@nestjs/common';

 interface Product {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    rating: number;
    imageUrl: string;
    available: boolean;
}

@Controller('products')
export class ProductsController {
    products: Product[] = [
        {
          productId: 1,
          productName: 'Smartphone X',
          productCode: 'SPX001',
          releaseDate: '2023-08-29',
          description: 'The latest flagship smartphone with advanced features.',
          price: 899.99,
          rating: 4.7,
          imageUrl: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1600',
          available: true,
        },
        {
          productId: 2,
          productName: 'Laptop Pro',
          productCode: 'LTP002',
          releaseDate: '2023-09-05',
          description: 'Powerful laptop for professionals and creators.',
          price: 1299.99,
          rating: 4.9,
          imageUrl: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600',
          available: true,
        },
        {
          productId: 3,
          productName: 'Wireless Headphones',
          productCode: 'HPH003',
          releaseDate: '2023-08-15',
          description: 'High-quality wireless headphones with noise cancellation.',
          price: 199.99,
          rating: 4.5,
          imageUrl: 'https://images.pexels.com/photos/8038334/pexels-photo-8038334.jpeg?auto=compress&cs=tinysrgb&w=1600',
          available: true,
        },
        {
          productId: 4,
          productName: "Smart Watch 3",
          productCode: "SWT004",
          releaseDate: "2023-07-22",
          description: "Stay connected with this feature-rich smartwatch.",
          price: 349.99,
          rating: 4.6,
          imageUrl: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1600",
          available: false,
        },
        {
          productId: 5,
          productName: "Gaming Console Ultimate",
          productCode: "GCN005",
          releaseDate: "2023-10-10",
          description: "Immerse yourself in gaming with the ultimate console.",
          price: 599.99,
          rating: 4.8,
          imageUrl: "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=1600",
          available: false,
        }
      ];

    @Get()
    getProducts() : Product[] {
        return this.products;
    }
}
