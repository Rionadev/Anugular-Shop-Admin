import { Component, OnInit, OnDestroy } from '@angular/core';

interface Product {
  name: string;
  category: string;
  barcode: string;
  retailPrice: number;
  inventory: number;
  active: boolean;
  touch: boolean;
  created: Date;
}
const products: Product[] = [
  {
    name: 'Product 1',
    category: 'Category 1',
    barcode: '123456789',
    retailPrice: 10.00,
    inventory: 100,
    active: true,
    touch: false,
    created: new Date('2024-01-01')
  },
  {
    name: 'Product 2',
    category: 'Category 2',
    barcode: '987654321',
    retailPrice: 20.00,
    inventory: 50,
    active: false,
    touch: true,
    created: new Date('2024-02-01')
  },
  {
    name: 'Product 3',
    category: 'Category 1',
    barcode: '111222333',
    retailPrice: 15.50,
    inventory: 75,
    active: true,
    touch: false,
    created: new Date('2024-01-15')
  },
  {
    name: 'Product 4',
    category: 'Category 3',
    barcode: '444555666',
    retailPrice: 30.00,
    inventory: 200,
    active: true,
    touch: true,
    created: new Date('2024-03-01')
  },
  {
    name: 'Product 5',
    category: 'Category 2',
    barcode: '777888999',
    retailPrice: 25.00,
    inventory: 0,
    active: false,
    touch: false,
    created: new Date('2024-04-01')
  },
  {
    name: 'Product 6',
    category: 'Category 1',
    barcode: '000111222',
    retailPrice: 12.99,
    inventory: 150,
    active: true,
    touch: true,
    created: new Date('2024-05-01')
  },
  {
    name: 'Product 7',
    category: 'Category 4',
    barcode: '333444555',
    retailPrice: 18.75,
    inventory: 80,
    active: true,
    touch: false,
    created: new Date('2024-06-01')
  },
  {
    name: 'Product 8',
    category: 'Category 3',
    barcode: '666777888',
    retailPrice: 22.50,
    inventory: 60,
    active: false,
    touch: true,
    created: new Date('2024-07-01')
  },
  {
    name: 'Product 9',
    category: 'Category 2',
    barcode: '999000111',
    retailPrice: 28.00,
    inventory: 20,
    active: true,
    touch: false,
    created: new Date('2024-08-01')
  },
  {
    name: 'Product 10',
    category: 'Category 1',
    barcode: '222333444',
    retailPrice: 14.99,
    inventory: 40,
    active: true,
    touch: true,
    created: new Date('2024-09-01')
  },
  {
    name: 'Product 11',
    category: 'Category 5',
    barcode: '555666777',
    retailPrice: 35.00,
    inventory: 10,
    active: false,
    touch: false,
    created: new Date('2024-10-01')
  },
  {
    name: 'Product 12',
    category: 'Category 4',
    barcode: '888999000',
    retailPrice: 19.99,
    inventory: 90,
    active: true,
    touch: true,
    created: new Date('2024-11-01')
  },
  {
    name: 'Product 13',
    category: 'Category 3',
    barcode: '1234567890',
    retailPrice: 27.50,
    inventory: 30,
    active: true,
    touch: false,
    created: new Date('2024-12-01')
  },
  {
    name: 'Product 14',
    category: 'Category 2',
    barcode: '0987654321',
    retailPrice: 16.75,
    inventory: 110,
    active: false,
    touch: true,
    created: new Date('2024-01-05')
  },
  {
    name: 'Product 15',
    category: 'Category 1',
    barcode: '1122334455',
    retailPrice: 29.99,
    inventory: 5,
    active: true,
    touch: false,
    created: new Date('2024-02-10')
  },
  {
    name: 'Product 16',
    category: 'Category 3',
    barcode: '2233445566',
    retailPrice: 17.50,
    inventory: 45,
    active: true,
    touch: true,
    created: new Date('2024-03-15')
  },
  {
    name: 'Product 17',
    category: 'Category 4',
    barcode: '3344556677',
    retailPrice: 23.00,
    inventory: 25,
    active: false,
    touch: false,
    created: new Date('2024-04-20')
  },
  {
    name: 'Product 18',
    category: 'Category 5',
    barcode: '4455667788',
    retailPrice: 39.99,
    inventory: 15,
    active: true,
    touch: true,
    created: new Date('2024-05-25')
  },
  {
    name: 'Product 19',
    category: 'Category 2',
    barcode: '5566778899',
    retailPrice: 11.50,
    inventory: 85,
    active: true,
    touch: false,
    created: new Date('2024-06-30')
  },
  {
    name: 'Product 20',
    category: 'Category 1',
    barcode: '6677889900',
    retailPrice: 21.00,
    inventory: 60,
    active: false,
    touch: true,
    created: new Date('2024-07-15')
  }
];

@Component({
  // standalone: true,
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.scss'],
  // imports: [NgbPaginationModule] // Import NgbPaginationModule directly here
})
export class ProductOneComponent implements OnInit {

  page: number = 1;
  pageSize: number = 4;
  collectionSize: number = products.length;
  arr_products: Product[];

  searchText: string = '';
  selectedType: string = '';
  selectedBrand: string = '';
  selectedSupplier: string = '';
  selectedAttributes: string = '';
  selectedTags: string = '';
  selectedStatus: string = '';

  filteredProducts: Product[] = [];

  constructor() {
  }
  ngOnDestroy() {
    // Cleanup logic here
  }
  ngOnInit(): void {
    this.filteredProducts = products; // Initialize with all products
    this.refreshTable();

  }
  refreshTable() {
    this.arr_products = products.map((country, i) => ({ id: i + 1, ...country })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
    console.log(`Current Page: ${this.page}   arr_products:${JSON.stringify(this.arr_products, null,2)}`);
  }

  searchProducts() {
    this.arr_products = products.filter(product => {
      return (
        (this.searchText ? product.name.includes(this.searchText) : true) &&
        (this.selectedType ? product.category === this.selectedType : true) &&
        (this.selectedBrand ? product.barcode === this.selectedBrand : true) &&
        (this.selectedSupplier ? product.category === this.selectedSupplier : true) &&
        (this.selectedAttributes ? product.category === this.selectedAttributes : true) &&
        (this.selectedTags ? product.category === this.selectedTags : true) &&
        (this.selectedStatus ? product.active === (this.selectedStatus === 'Active') : true)
      );
    });
    console.log(`Current Page: ${this.page}   arr_products:${JSON.stringify(this.arr_products, null,2)}`);

  }

  clearFilters() {
    this.searchText = '';
    this.selectedType = '';
    this.selectedBrand = '';
    this.selectedSupplier = '';
    this.selectedAttributes = '';
    this.selectedTags = '';
    this.selectedStatus = '';
    this.arr_products = products; // Reset to all products
  }
}
