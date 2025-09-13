"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Separator } from './ui/separator';
import { ShoppingListItem } from '../lib/types';
import { foodCategories } from '../lib/foodData';

interface ShoppingListProps {
  items: ShoppingListItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onUpdateNotes: (id: string, notes: string) => void;
  onToggleCompleted: (id: string) => void;
  onRemoveItem: (id: string) => void;
  onClearCompleted: () => void;
  onClearAll: () => void;
  onExportList: () => void;
}

export default function ShoppingList({
  items,
  onUpdateQuantity,
  onUpdateNotes,
  onToggleCompleted,
  onRemoveItem,
  onClearCompleted,
  onClearAll,
  onExportList
}: ShoppingListProps) {
  const [expandedNotes, setExpandedNotes] = useState<Set<string>>(new Set());

  const toggleNotes = (itemId: string) => {
    const newExpanded = new Set(expandedNotes);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedNotes(newExpanded);
  };

  // Statistics
  const totalItems = items.length;
  const completedItems = items.filter(item => item.completed).length;
  const pendingItems = totalItems - completedItems;

  // Group items by category and completion status
  const groupedItems = items.reduce((groups, item) => {
    const categoryKey = item.completed ? 'completed' : item.category;
    if (!groups[categoryKey]) {
      groups[categoryKey] = [];
    }
    groups[categoryKey].push(item);
    return groups;
  }, {} as Record<string, ShoppingListItem[]>);

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

  // Sort categories (pending first, then completed)
  const sortedCategoryKeys = Object.keys(groupedItems).sort((a, b) => {
    if (a === 'completed') return 1;
    if (b === 'completed') return -1;
    return getCategoryInfo(a).name.localeCompare(getCategoryInfo(b).name);
  });

  const handleQuantityChange = (id: string, value: string) => {
    const quantity = parseInt(value) || 1;
    onUpdateQuantity(id, Math.max(1, quantity));
  };

  if (items.length === 0) {
    return (
      <Card className="text-center py-12">
        <CardContent>
          <div className="text-6xl mb-4">🛒</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Your shopping list is empty</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Browse the food database and add items to get started with your grocery shopping list.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Statistics and Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛒</span>
              Shopping List
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onExportList}
                className="text-xs"
              >
                📋 Export
              </Button>
              {completedItems > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onClearCompleted}
                  className="text-xs text-orange-600 hover:text-orange-700"
                >
                  Clear Completed
                </Button>
              )}
              {totalItems > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onClearAll}
                  className="text-xs text-red-600 hover:text-red-700"
                >
                  Clear All
                </Button>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{totalItems}</div>
              <div className="text-sm text-gray-600">Total Items</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">{pendingItems}</div>
              <div className="text-sm text-gray-600">Pending</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{completedItems}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Shopping List Items */}
      <div className="space-y-6">
        {sortedCategoryKeys.map(categoryKey => {
          const categoryItems = groupedItems[categoryKey];
          const isCompleted = categoryKey === 'completed';
          const categoryInfo = isCompleted ? 
            { name: 'Completed Items', icon: '✅', color: 'bg-green-100 text-green-800' } :
            getCategoryInfo(categoryKey);

          return (
            <Card key={categoryKey}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <span className="text-xl">{categoryInfo.icon}</span>
                  {categoryInfo.name}
                  <Badge variant="secondary">{categoryItems.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {categoryItems.map((item, index) => (
                    <div key={item.id}>
                      <div className={`flex items-start gap-4 p-3 rounded-lg border ${
                        item.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200'
                      }`}>
                        {/* Checkbox */}
                        <Checkbox
                          checked={item.completed}
                          onCheckedChange={() => onToggleCompleted(item.id)}
                          className="mt-1"
                        />

                        {/* Item Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            {/* Name and Unit */}
                            <div className={`flex-1 ${item.completed ? 'line-through text-gray-500' : ''}`}>
                              <h4 className="font-medium text-sm">{item.name}</h4>
                              <p className="text-xs text-gray-600">per {item.unit}</p>
                              {item.commonBrands && item.commonBrands.length > 0 && (
                                <div className="flex gap-1 mt-1">
                                  {item.commonBrands.slice(0, 2).map((brand, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs py-0 px-1 h-4">
                                      {brand}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Quantity */}
                            <div className="flex items-center gap-2 min-w-0">
                              <Input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                className="w-16 h-8 text-xs text-center"
                                disabled={item.completed}
                              />
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => onRemoveItem(item.id)}
                                className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                              >
                                🗑️
                              </Button>
                            </div>
                          </div>

                          {/* Notes Section */}
                          <div className="mt-2 space-y-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleNotes(item.id)}
                              className="text-xs text-gray-600 hover:text-gray-800 p-0 h-auto"
                            >
                              {expandedNotes.has(item.id) ? '📝 Hide Notes' : '📝 Add Notes'}
                            </Button>
                            
                            {expandedNotes.has(item.id) && (
                              <Textarea
                                value={item.notes || ''}
                                onChange={(e) => onUpdateNotes(item.id, e.target.value)}
                                placeholder="Add notes (brand preference, size, etc.)"
                                className="text-xs min-h-16 resize-none"
                                disabled={item.completed}
                              />
                            )}
                            
                            {item.notes && !expandedNotes.has(item.id) && (
                              <p className="text-xs text-gray-600 italic bg-gray-50 p-2 rounded">
                                {item.notes}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      {index < categoryItems.length - 1 && <Separator className="my-2" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}