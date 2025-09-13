"use client";

import { useMemo } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { FoodItem } from '../lib/types';
import { foodCategories } from '../lib/foodData';

interface FoodDatabaseProps {
  foods: FoodItem[];
  onAddToList: (food: FoodItem) => void;
  shoppingListIds: Set<string>;
  searchTerm: string;
  selectedCategory: string | null;
}

export default function FoodDatabase({ 
  foods, 
  onAddToList, 
  shoppingListIds,
  searchTerm,
  selectedCategory 
}: FoodDatabaseProps) {
  
  // Group foods by category
  const groupedFoods = useMemo(() => {
    const groups: Record<string, FoodItem[]> = {};
    foods.forEach(food => {
      if (!groups[food.category]) {
        groups[food.category] = [];
      }
      groups[food.category].push(food);
    });
    return groups;
  }, [foods]);

  // Get category info
  const getCategoryInfo = (categoryId: string) => {
    return foodCategories.find(cat => cat.id === categoryId) || {
      id: categoryId,
      name: categoryId.charAt(0).toUpperCase() + categoryId.slice(1),
      icon: '📦',
      color: 'bg-gray-100 text-gray-800',
      description: ''
    };
  };

  // Sort categories to show selected first, then alphabetically
  const sortedCategoryIds = useMemo(() => {
    const categoryIds = Object.keys(groupedFoods);
    return categoryIds.sort((a, b) => {
      if (selectedCategory && a === selectedCategory) return -1;
      if (selectedCategory && b === selectedCategory) return 1;
      return getCategoryInfo(a).name.localeCompare(getCategoryInfo(b).name);
    });
  }, [groupedFoods, selectedCategory]);

  if (foods.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          {searchTerm || selectedCategory 
            ? "Try adjusting your search or category filter to find what you're looking for."
            : "The food database appears to be empty."
          }
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {sortedCategoryIds.map(categoryId => {
        const categoryFoods = groupedFoods[categoryId];
        const categoryInfo = getCategoryInfo(categoryId);
        
        return (
          <div key={categoryId} className="space-y-4">
            {/* Category Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{categoryInfo.icon}</div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {categoryInfo.name}
                  </h2>
                  <p className="text-sm text-gray-600">{categoryInfo.description}</p>
                </div>
                <Badge variant="secondary" className="ml-2">
                  {categoryFoods.length} items
                </Badge>
              </div>
            </div>

            {/* Food Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {categoryFoods.map(food => {
                const isInList = shoppingListIds.has(food.id);
                
                return (
                  <Card 
                    key={food.id} 
                    className={`hover:shadow-md transition-shadow duration-200 ${
                      isInList ? 'ring-2 ring-green-500 bg-green-50' : ''
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        {/* Food Name */}
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm leading-tight">
                            {food.name}
                          </h3>
                          {food.subcategory && (
                            <p className="text-xs text-gray-500 mt-1">
                              {food.subcategory}
                            </p>
                          )}
                        </div>

                        {/* Unit */}
                        <div className="flex items-center text-xs text-gray-600">
                          <span className="mr-1">📦</span>
                          per {food.unit}
                        </div>

                        {/* Common Brands */}
                        {food.commonBrands && food.commonBrands.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {food.commonBrands.slice(0, 2).map((brand, index) => (
                              <Badge 
                                key={index} 
                                variant="outline" 
                                className="text-xs py-0 px-1 h-5"
                              >
                                {brand}
                              </Badge>
                            ))}
                            {food.commonBrands.length > 2 && (
                              <Badge variant="outline" className="text-xs py-0 px-1 h-5">
                                +{food.commonBrands.length - 2}
                              </Badge>
                            )}
                          </div>
                        )}

                        {/* Add Button */}
                        <Button
                          onClick={() => onAddToList(food)}
                          disabled={isInList}
                          size="sm"
                          className={`w-full text-xs h-8 ${
                            isInList 
                              ? 'bg-green-600 hover:bg-green-700 text-white' 
                              : 'bg-blue-600 hover:bg-blue-700 text-white'
                          }`}
                        >
                          {isInList ? (
                            <>
                              <span className="mr-1">✓</span>
                              In List
                            </>
                          ) : (
                            <>
                              <span className="mr-1">+</span>
                              Add to List
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}