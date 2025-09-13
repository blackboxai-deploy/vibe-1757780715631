"use client";

import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { foodCategories } from '../lib/foodData';
import { FoodCategory } from '../lib/types';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  resultsCount?: number;
}

export default function SearchBar({ 
  searchTerm, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange,
  resultsCount 
}: SearchBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCategorySelect = (category: FoodCategory | null) => {
    onCategoryChange(category?.id || null);
  };

  const clearFilters = () => {
    onSearchChange('');
    onCategoryChange(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for foods, brands, or categories..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-base border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400 text-xl">🔍</span>
          </div>
        </div>

        {/* Results Count */}
        {(searchTerm || selectedCategory) && (
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              {resultsCount !== undefined ? `${resultsCount} items found` : 'Searching...'}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="text-xs"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Category Filter Toggle */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-700">Filter by Category</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-blue-600 hover:text-blue-800"
          >
            {isExpanded ? 'Hide Categories' : 'Show Categories'}
          </Button>
        </div>

        {/* Category Filters */}
        {isExpanded && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategorySelect(null)}
              className="justify-start text-xs h-auto py-2 px-3"
            >
              <span className="mr-1">🛒</span>
              All Items
            </Button>
            {foodCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategorySelect(category)}
                className="justify-start text-xs h-auto py-2 px-3"
              >
                <span className="mr-1">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        )}

        {/* Selected Category Badge */}
        {selectedCategory && (
          <div className="flex flex-wrap gap-2">
            {(() => {
              const category = foodCategories.find(cat => cat.id === selectedCategory);
              return category ? (
                <Badge 
                  variant="secondary" 
                  className="flex items-center gap-1 text-xs py-1 px-3"
                >
                  <span>{category.icon}</span>
                  {category.name}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCategorySelect(null)}
                    className="ml-1 h-4 w-4 p-0 hover:bg-gray-200 rounded-full"
                  >
                    ×
                  </Button>
                </Badge>
              ) : null;
            })()}
          </div>
        )}
      </div>
    </div>
  );
}