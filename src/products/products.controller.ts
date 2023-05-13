import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @UseGuards(AuthGuard)
  @Get('my-products')
  getUsersProducts(@Request() req) {
    return this.productService.listUsersProducts(req.user.username);
  }
  @UseGuards(AuthGuard)
  @Get('list-products')
  getAllProducts() {
    return this.productService.listAllProducts();
  }
}
