"use client";

import { useState, useMemo, useCallback } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import SearchBar from './SearchBar';
import FoodDatabase from './FoodDatabase';
import ShoppingList from './ShoppingList';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getAllFoodItems, searchFoodItems } from '../lib/foodData';
import { FoodItem, ShoppingListItem } from '../lib/types';

export default function GroceryApp() {
  // State management
  const [shoppingList, setShoppingList] = useLocalStorage<ShoppingListItem[]>('grocery-shopping-list', []);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('browse');

  // Get shopping list item IDs for quick lookup
  const shoppingListIds = useMemo(() => 
    new Set(shoppingList.map(item => item.id)), 
    [shoppingList]
  );

  // Filter foods based on search and category
  const filteredFoods = useMemo(() => {
    let foods = getAllFoodItems();

    // Apply search filter
    if (searchTerm.trim()) {
      foods = searchFoodItems(searchTerm.trim());
    }

    // Apply category filter
    if (selectedCategory) {
      foods = foods.filter(food => food.category === selectedCategory);
    }

    return foods;
  }, [searchTerm, selectedCategory]);

  // Add item to shopping list
  const addToShoppingList = useCallback((food: FoodItem) => {
    if (shoppingListIds.has(food.id)) return;

    const newItem: ShoppingListItem = {
      ...food,
      quantity: 1,
      notes: '',
      completed: false,
      addedAt: new Date()
    };

    setShoppingList(prev => [...prev, newItem]);
    
    // Auto-switch to list view if adding first item
    if (shoppingList.length === 0) {
      setActiveTab('list');
    }
  }, [shoppingListIds, shoppingList.length, setShoppingList]);

  // Update item quantity
  const updateQuantity = useCallback((id: string, quantity: number) => {
    setShoppingList(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  }, [setShoppingList]);

  // Update item notes
  const updateNotes = useCallback((id: string, notes: string) => {
    setShoppingList(prev => 
      prev.map(item => 
        item.id === id ? { ...item, notes } : item
      )
    );
  }, [setShoppingList]);

  // Toggle item completion
  const toggleCompleted = useCallback((id: string) => {
    setShoppingList(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }, [setShoppingList]);

  // Remove item from list
  const removeItem = useCallback((id: string) => {
    setShoppingList(prev => prev.filter(item => item.id !== id));
  }, [setShoppingList]);

  // Clear completed items
  const clearCompleted = useCallback(() => {
    setShoppingList(prev => prev.filter(item => !item.completed));
  }, [setShoppingList]);

  // Clear all items
  const clearAll = useCallback(() => {
    if (confirm('Are you sure you want to clear your entire shopping list?')) {
      setShoppingList([]);
    }
  }, [setShoppingList]);

  // Export shopping list
  const exportList = useCallback(() => {
    const listText = shoppingList
      .filter(item => !item.completed)
      .map(item => `• ${item.quantity} ${item.unit} of ${item.name}${item.notes ? ` (${item.notes})` : ''}`)
      .join('\n');
    
    const fullText = `🛒 Grocery Shopping List\n\nGenerated on ${new Date().toLocaleDateString()}\n\n${listText}\n\n---\nTotal Items: ${shoppingList.filter(item => !item.completed).length}`;
    
    // Copy to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullText).then(() => {
        alert('Shopping list copied to clipboard!');
      }).catch(() => {
        // Fallback - show in alert
        alert('Shopping List:\n\n' + fullText);
      });
    } else {
      // Fallback for older browsers
      alert('Shopping List:\n\n' + fullText);
    }
  }, [shoppingList]);

  // Statistics
  const totalItems = shoppingList.length;
  const pendingItems = shoppingList.filter(item => !item.completed).length;
  const completedItems = totalItems - pendingItems;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🛒 Smart Grocery List
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our comprehensive food database, build your shopping list, and organize your grocery shopping with ease.
          </p>
        </div>

        {/* Quick Stats */}
        {totalItems > 0 && (
          <Card className="mb-6 bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <CardContent className="py-4">
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-blue-700 bg-blue-100">
                    {totalItems} Total
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-orange-700 bg-orange-100">
                    {pendingItems} Pending
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-green-700 bg-green-100">
                    {completedItems} Completed
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Tab Navigation */}
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-white shadow-sm">
              <TabsTrigger 
                value="browse" 
                className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <span>🍎</span>
                Browse Foods
                <Badge variant="secondary" className="ml-1 text-xs">
                  {filteredFoods.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger 
                value="list"
                className="flex items-center gap-2 data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                <span>🛒</span>
                Shopping List
                <Badge variant="secondary" className="ml-1 text-xs">
                  {totalItems}
                </Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Browse Foods Tab */}
          <TabsContent value="browse" className="space-y-6">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              resultsCount={filteredFoods.length}
            />
            
            <FoodDatabase
              foods={filteredFoods}
              onAddToList={addToShoppingList}
              shoppingListIds={shoppingListIds}
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
            />
          </TabsContent>

          {/* Shopping List Tab */}
          <TabsContent value="list">
            <ShoppingList
              items={shoppingList}
              onUpdateQuantity={updateQuantity}
              onUpdateNotes={updateNotes}
              onToggleCompleted={toggleCompleted}
              onRemoveItem={removeItem}
              onClearCompleted={clearCompleted}
              onClearAll={clearAll}
              onExportList={exportList}
            />
          </TabsContent>
        </Tabs>

        {/* Floating Action Button */}
        {activeTab === 'browse' && totalItems > 0 && (
          <div className="fixed bottom-6 right-6">
            <Button
              onClick={() => setActiveTab('list')}
              size="lg"
              className="rounded-full w-16 h-16 shadow-lg bg-green-600 hover:bg-green-700 text-white"
            >
              <div className="text-center">
                <div className="text-lg">🛒</div>
                <div className="text-xs font-bold">{pendingItems}</div>
              </div>
            </Button>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-500 border-t border-gray-200 pt-8">
          <p>Smart Grocery List • Over 500 food items • Organized by category • Persistent storage</p>
        </div>
      </div>
    </div>
  );
}