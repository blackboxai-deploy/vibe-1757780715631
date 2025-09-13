export interface FoodItem {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  commonBrands?: string[];
  unit: string;
  description?: string;
}

export interface ShoppingListItem extends FoodItem {
  quantity: number;
  notes?: string;
  completed: boolean;
  addedAt: Date;
}

export interface FoodCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface GroceryAppState {
  shoppingList: ShoppingListItem[];
  searchTerm: string;
  selectedCategory: string | null;
  viewMode: 'browse' | 'list';
}

export type SortOption = 'name' | 'category' | 'added' | 'completed';

export interface FilterOptions {
  category?: string;
  completed?: boolean;
  searchTerm?: string;
}