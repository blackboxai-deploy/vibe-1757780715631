import { FoodItem, FoodCategory } from './types';

export const foodCategories: FoodCategory[] = [
  {
    id: 'produce',
    name: 'Produce',
    icon: '🥬',
    color: 'bg-green-100 text-green-800',
    description: 'Fresh fruits and vegetables'
  },
  {
    id: 'dairy',
    name: 'Dairy & Eggs',
    icon: '🥛',
    color: 'bg-blue-100 text-blue-800',
    description: 'Milk, cheese, yogurt, and eggs'
  },
  {
    id: 'meat',
    name: 'Meat & Seafood',
    icon: '🥩',
    color: 'bg-red-100 text-red-800',
    description: 'Fresh meat, poultry, and seafood'
  },
  {
    id: 'pantry',
    name: 'Pantry',
    icon: '🥫',
    color: 'bg-yellow-100 text-yellow-800',
    description: 'Canned goods, grains, and dry goods'
  },
  {
    id: 'frozen',
    name: 'Frozen',
    icon: '🧊',
    color: 'bg-cyan-100 text-cyan-800',
    description: 'Frozen foods and ice cream'
  },
  {
    id: 'bakery',
    name: 'Bakery',
    icon: '🍞',
    color: 'bg-orange-100 text-orange-800',
    description: 'Fresh bread, pastries, and baked goods'
  },
  {
    id: 'beverages',
    name: 'Beverages',
    icon: '🥤',
    color: 'bg-purple-100 text-purple-800',
    description: 'Drinks, juices, and beverages'
  },
  {
    id: 'snacks',
    name: 'Snacks',
    icon: '🍿',
    color: 'bg-pink-100 text-pink-800',
    description: 'Chips, crackers, and snack foods'
  },
  {
    id: 'household',
    name: 'Household',
    icon: '🧽',
    color: 'bg-gray-100 text-gray-800',
    description: 'Cleaning supplies and household items'
  },
  {
    id: 'personal',
    name: 'Personal Care',
    icon: '🧴',
    color: 'bg-indigo-100 text-indigo-800',
    description: 'Health and beauty products'
  }
];

export const foodItems: FoodItem[] = [
  // Produce - Fruits
  { id: 'apple', name: 'Apple', category: 'produce', subcategory: 'fruits', unit: 'lb', commonBrands: ['Organic', 'Gala', 'Granny Smith', 'Honeycrisp'] },
  { id: 'banana', name: 'Banana', category: 'produce', subcategory: 'fruits', unit: 'bunch', commonBrands: ['Organic', 'Chiquita', 'Dole'] },
  { id: 'orange', name: 'Orange', category: 'produce', subcategory: 'fruits', unit: 'lb', commonBrands: ['Navel', 'Valencia', 'Blood Orange'] },
  { id: 'grapes', name: 'Grapes', category: 'produce', subcategory: 'fruits', unit: 'lb', commonBrands: ['Red', 'Green', 'Purple'] },
  { id: 'strawberries', name: 'Strawberries', category: 'produce', subcategory: 'fruits', unit: 'container', commonBrands: ['Organic', 'Driscoll\'s'] },
  { id: 'blueberries', name: 'Blueberries', category: 'produce', subcategory: 'fruits', unit: 'container', commonBrands: ['Organic', 'Driscoll\'s'] },
  { id: 'raspberries', name: 'Raspberries', category: 'produce', subcategory: 'fruits', unit: 'container', commonBrands: ['Organic', 'Driscoll\'s'] },
  { id: 'blackberries', name: 'Blackberries', category: 'produce', subcategory: 'fruits', unit: 'container', commonBrands: ['Organic', 'Driscoll\'s'] },
  { id: 'pineapple', name: 'Pineapple', category: 'produce', subcategory: 'fruits', unit: 'each', commonBrands: ['Gold', 'Sweet'] },
  { id: 'mango', name: 'Mango', category: 'produce', subcategory: 'fruits', unit: 'each', commonBrands: ['Tommy Atkins', 'Honey'] },
  { id: 'avocado', name: 'Avocado', category: 'produce', subcategory: 'fruits', unit: 'each', commonBrands: ['Hass', 'Organic'] },
  { id: 'lemon', name: 'Lemon', category: 'produce', subcategory: 'fruits', unit: 'lb', commonBrands: ['Meyer', 'Eureka'] },
  { id: 'lime', name: 'Lime', category: 'produce', subcategory: 'fruits', unit: 'lb', commonBrands: ['Key', 'Persian'] },
  { id: 'grapefruit', name: 'Grapefruit', category: 'produce', subcategory: 'fruits', unit: 'each', commonBrands: ['Ruby Red', 'White'] },
  { id: 'kiwi', name: 'Kiwi', category: 'produce', subcategory: 'fruits', unit: 'lb', commonBrands: ['Zespri', 'Organic'] },
  { id: 'peach', name: 'Peach', category: 'produce', subcategory: 'fruits', unit: 'lb', commonBrands: ['White', 'Yellow'] },
  { id: 'plum', name: 'Plum', category: 'produce', subcategory: 'fruits', unit: 'lb', commonBrands: ['Red', 'Purple'] },
  { id: 'pear', name: 'Pear', category: 'produce', subcategory: 'fruits', unit: 'lb', commonBrands: ['Bartlett', 'Anjou'] },
  { id: 'cherries', name: 'Cherries', category: 'produce', subcategory: 'fruits', unit: 'lb', commonBrands: ['Bing', 'Rainier'] },
  { id: 'watermelon', name: 'Watermelon', category: 'produce', subcategory: 'fruits', unit: 'each', commonBrands: ['Seedless', 'Mini'] },
  { id: 'cantaloupe', name: 'Cantaloupe', category: 'produce', subcategory: 'fruits', unit: 'each', commonBrands: ['Organic'] },
  { id: 'honeydew', name: 'Honeydew', category: 'produce', subcategory: 'fruits', unit: 'each', commonBrands: ['Organic'] },

  // Produce - Vegetables
  { id: 'lettuce', name: 'Lettuce', category: 'produce', subcategory: 'vegetables', unit: 'head', commonBrands: ['Iceberg', 'Romaine', 'Butter'] },
  { id: 'spinach', name: 'Spinach', category: 'produce', subcategory: 'vegetables', unit: 'bag', commonBrands: ['Baby', 'Organic'] },
  { id: 'carrots', name: 'Carrots', category: 'produce', subcategory: 'vegetables', unit: 'bag', commonBrands: ['Baby', 'Organic'] },
  { id: 'broccoli', name: 'Broccoli', category: 'produce', subcategory: 'vegetables', unit: 'head', commonBrands: ['Organic'] },
  { id: 'cauliflower', name: 'Cauliflower', category: 'produce', subcategory: 'vegetables', unit: 'head', commonBrands: ['White', 'Purple'] },
  { id: 'tomatoes', name: 'Tomatoes', category: 'produce', subcategory: 'vegetables', unit: 'lb', commonBrands: ['Roma', 'Cherry', 'Beefsteak'] },
  { id: 'cucumber', name: 'Cucumber', category: 'produce', subcategory: 'vegetables', unit: 'each', commonBrands: ['English', 'Persian'] },
  { id: 'bell-peppers', name: 'Bell Peppers', category: 'produce', subcategory: 'vegetables', unit: 'lb', commonBrands: ['Red', 'Yellow', 'Green'] },
  { id: 'onions', name: 'Onions', category: 'produce', subcategory: 'vegetables', unit: 'bag', commonBrands: ['Yellow', 'White', 'Red'] },
  { id: 'garlic', name: 'Garlic', category: 'produce', subcategory: 'vegetables', unit: 'head', commonBrands: ['Fresh', 'Organic'] },
  { id: 'potatoes', name: 'Potatoes', category: 'produce', subcategory: 'vegetables', unit: 'bag', commonBrands: ['Russet', 'Red', 'Yukon'] },
  { id: 'sweet-potatoes', name: 'Sweet Potatoes', category: 'produce', subcategory: 'vegetables', unit: 'lb', commonBrands: ['Orange', 'Purple'] },
  { id: 'celery', name: 'Celery', category: 'produce', subcategory: 'vegetables', unit: 'bunch', commonBrands: ['Organic'] },
  { id: 'mushrooms', name: 'Mushrooms', category: 'produce', subcategory: 'vegetables', unit: 'container', commonBrands: ['White', 'Baby Bella', 'Shiitake'] },
  { id: 'zucchini', name: 'Zucchini', category: 'produce', subcategory: 'vegetables', unit: 'lb', commonBrands: ['Organic'] },
  { id: 'asparagus', name: 'Asparagus', category: 'produce', subcategory: 'vegetables', unit: 'bundle', commonBrands: ['Organic'] },
  { id: 'green-beans', name: 'Green Beans', category: 'produce', subcategory: 'vegetables', unit: 'lb', commonBrands: ['Organic'] },
  { id: 'corn', name: 'Corn', category: 'produce', subcategory: 'vegetables', unit: 'each', commonBrands: ['Sweet', 'Organic'] },
  { id: 'brussels-sprouts', name: 'Brussels Sprouts', category: 'produce', subcategory: 'vegetables', unit: 'bag', commonBrands: ['Organic'] },
  { id: 'cabbage', name: 'Cabbage', category: 'produce', subcategory: 'vegetables', unit: 'head', commonBrands: ['Green', 'Red'] },
  { id: 'kale', name: 'Kale', category: 'produce', subcategory: 'vegetables', unit: 'bunch', commonBrands: ['Curly', 'Baby'] },
  { id: 'arugula', name: 'Arugula', category: 'produce', subcategory: 'vegetables', unit: 'bag', commonBrands: ['Baby', 'Organic'] },

  // Produce - Herbs
  { id: 'basil', name: 'Basil', category: 'produce', subcategory: 'herbs', unit: 'package', commonBrands: ['Fresh'] },
  { id: 'parsley', name: 'Parsley', category: 'produce', subcategory: 'herbs', unit: 'bunch', commonBrands: ['Flat Leaf', 'Curly'] },
  { id: 'cilantro', name: 'Cilantro', category: 'produce', subcategory: 'herbs', unit: 'bunch', commonBrands: ['Fresh'] },
  { id: 'mint', name: 'Mint', category: 'produce', subcategory: 'herbs', unit: 'package', commonBrands: ['Fresh'] },
  { id: 'rosemary', name: 'Rosemary', category: 'produce', subcategory: 'herbs', unit: 'package', commonBrands: ['Fresh'] },
  { id: 'thyme', name: 'Thyme', category: 'produce', subcategory: 'herbs', unit: 'package', commonBrands: ['Fresh'] },
  { id: 'oregano', name: 'Oregano', category: 'produce', subcategory: 'herbs', unit: 'package', commonBrands: ['Fresh'] },
  { id: 'dill', name: 'Dill', category: 'produce', subcategory: 'herbs', unit: 'package', commonBrands: ['Fresh'] },

  // Dairy & Eggs
  { id: 'milk-whole', name: 'Whole Milk', category: 'dairy', unit: 'gallon', commonBrands: ['Organic Valley', 'Horizon', 'Local Dairy'] },
  { id: 'milk-2percent', name: '2% Milk', category: 'dairy', unit: 'gallon', commonBrands: ['Organic Valley', 'Horizon', 'Local Dairy'] },
  { id: 'milk-1percent', name: '1% Milk', category: 'dairy', unit: 'gallon', commonBrands: ['Organic Valley', 'Horizon', 'Local Dairy'] },
  { id: 'milk-skim', name: 'Skim Milk', category: 'dairy', unit: 'gallon', commonBrands: ['Organic Valley', 'Horizon', 'Local Dairy'] },
  { id: 'almond-milk', name: 'Almond Milk', category: 'dairy', unit: 'carton', commonBrands: ['Almond Breeze', 'Silk', 'Califia'] },
  { id: 'oat-milk', name: 'Oat Milk', category: 'dairy', unit: 'carton', commonBrands: ['Oatly', 'Planet Oat', 'Chobani'] },
  { id: 'soy-milk', name: 'Soy Milk', category: 'dairy', unit: 'carton', commonBrands: ['Silk', 'Westsoy'] },
  { id: 'heavy-cream', name: 'Heavy Cream', category: 'dairy', unit: 'pint', commonBrands: ['Organic Valley', 'Land O Lakes'] },
  { id: 'half-and-half', name: 'Half and Half', category: 'dairy', unit: 'pint', commonBrands: ['Organic Valley', 'Land O Lakes'] },
  { id: 'butter', name: 'Butter', category: 'dairy', unit: 'lb', commonBrands: ['Kerrygold', 'Land O Lakes', 'Organic Valley'] },
  { id: 'margarine', name: 'Margarine', category: 'dairy', unit: 'container', commonBrands: ['I Can\'t Believe It\'s Not Butter', 'Country Crock'] },
  { id: 'eggs', name: 'Eggs', category: 'dairy', unit: 'dozen', commonBrands: ['Free Range', 'Organic', 'Cage Free'] },
  { id: 'greek-yogurt', name: 'Greek Yogurt', category: 'dairy', unit: 'container', commonBrands: ['Fage', 'Chobani', 'Two Good'] },
  { id: 'regular-yogurt', name: 'Regular Yogurt', category: 'dairy', unit: 'container', commonBrands: ['Yoplait', 'Dannon', 'Activia'] },
  { id: 'cottage-cheese', name: 'Cottage Cheese', category: 'dairy', unit: 'container', commonBrands: ['Breakstone\'s', 'Daisy'] },
  { id: 'cream-cheese', name: 'Cream Cheese', category: 'dairy', unit: 'package', commonBrands: ['Philadelphia', 'Organic Valley'] },
  { id: 'sour-cream', name: 'Sour Cream', category: 'dairy', unit: 'container', commonBrands: ['Daisy', 'Breakstone\'s'] },
  { id: 'cheddar-cheese', name: 'Cheddar Cheese', category: 'dairy', unit: 'block', commonBrands: ['Tillamook', 'Cabot', 'Cracker Barrel'] },
  { id: 'mozzarella-cheese', name: 'Mozzarella Cheese', category: 'dairy', unit: 'package', commonBrands: ['Kraft', 'Sargento', 'Polly-O'] },
  { id: 'swiss-cheese', name: 'Swiss Cheese', category: 'dairy', unit: 'package', commonBrands: ['Boar\'s Head', 'Sargento'] },
  { id: 'american-cheese', name: 'American Cheese', category: 'dairy', unit: 'package', commonBrands: ['Kraft', 'Land O Lakes'] },
  { id: 'parmesan-cheese', name: 'Parmesan Cheese', category: 'dairy', unit: 'container', commonBrands: ['Kraft', 'BelGioioso'] },
  { id: 'string-cheese', name: 'String Cheese', category: 'dairy', unit: 'package', commonBrands: ['Sargento', 'Frigo'] },

  // Meat & Seafood
  { id: 'ground-beef', name: 'Ground Beef', category: 'meat', unit: 'lb', commonBrands: ['80/20', '85/15', '93/7'] },
  { id: 'chicken-breast', name: 'Chicken Breast', category: 'meat', unit: 'lb', commonBrands: ['Boneless', 'Organic', 'Free Range'] },
  { id: 'chicken-thighs', name: 'Chicken Thighs', category: 'meat', unit: 'lb', commonBrands: ['Bone-in', 'Boneless'] },
  { id: 'whole-chicken', name: 'Whole Chicken', category: 'meat', unit: 'each', commonBrands: ['Organic', 'Free Range'] },
  { id: 'chicken-wings', name: 'Chicken Wings', category: 'meat', unit: 'lb', commonBrands: ['Fresh', 'Party Pack'] },
  { id: 'ground-turkey', name: 'Ground Turkey', category: 'meat', unit: 'lb', commonBrands: ['Lean', '93/7'] },
  { id: 'turkey-breast', name: 'Turkey Breast', category: 'meat', unit: 'lb', commonBrands: ['Deli', 'Whole'] },
  { id: 'pork-chops', name: 'Pork Chops', category: 'meat', unit: 'lb', commonBrands: ['Bone-in', 'Boneless'] },
  { id: 'pork-tenderloin', name: 'Pork Tenderloin', category: 'meat', unit: 'lb', commonBrands: ['Marinated', 'Plain'] },
  { id: 'bacon', name: 'Bacon', category: 'meat', unit: 'package', commonBrands: ['Wright', 'Oscar Mayer', 'Applegate'] },
  { id: 'sausage', name: 'Sausage', category: 'meat', unit: 'package', commonBrands: ['Italian', 'Breakfast', 'Johnsonville'] },
  { id: 'ham', name: 'Ham', category: 'meat', unit: 'lb', commonBrands: ['Honey Baked', 'Spiral Cut'] },
  { id: 'beef-steak', name: 'Beef Steak', category: 'meat', unit: 'lb', commonBrands: ['Ribeye', 'Sirloin', 'Filet'] },
  { id: 'ground-pork', name: 'Ground Pork', category: 'meat', unit: 'lb', commonBrands: ['Fresh', 'Italian Seasoned'] },
  { id: 'salmon', name: 'Salmon', category: 'meat', subcategory: 'seafood', unit: 'lb', commonBrands: ['Atlantic', 'Wild Caught'] },
  { id: 'tilapia', name: 'Tilapia', category: 'meat', subcategory: 'seafood', unit: 'lb', commonBrands: ['Fresh', 'Frozen'] },
  { id: 'shrimp', name: 'Shrimp', category: 'meat', subcategory: 'seafood', unit: 'lb', commonBrands: ['Large', 'Jumbo', 'Cooked'] },
  { id: 'cod', name: 'Cod', category: 'meat', subcategory: 'seafood', unit: 'lb', commonBrands: ['Fresh', 'Frozen'] },
  { id: 'tuna', name: 'Tuna', category: 'meat', subcategory: 'seafood', unit: 'lb', commonBrands: ['Ahi', 'Yellowfin'] },
  { id: 'crab', name: 'Crab', category: 'meat', subcategory: 'seafood', unit: 'lb', commonBrands: ['Dungeness', 'Snow'] },
  { id: 'lobster', name: 'Lobster', category: 'meat', subcategory: 'seafood', unit: 'each', commonBrands: ['Live', 'Tails'] },

  // Pantry Items
  { id: 'rice-white', name: 'White Rice', category: 'pantry', unit: 'bag', commonBrands: ['Jasmine', 'Basmati', 'Long Grain'] },
  { id: 'rice-brown', name: 'Brown Rice', category: 'pantry', unit: 'bag', commonBrands: ['Long Grain', 'Short Grain'] },
  { id: 'pasta-spaghetti', name: 'Spaghetti', category: 'pantry', unit: 'box', commonBrands: ['Barilla', 'De Cecco', 'Ronzoni'] },
  { id: 'pasta-penne', name: 'Penne', category: 'pantry', unit: 'box', commonBrands: ['Barilla', 'De Cecco', 'Ronzoni'] },
  { id: 'pasta-macaroni', name: 'Macaroni', category: 'pantry', unit: 'box', commonBrands: ['Barilla', 'De Cecco', 'Ronzoni'] },
  { id: 'quinoa', name: 'Quinoa', category: 'pantry', unit: 'bag', commonBrands: ['Organic', 'Ancient Harvest'] },
  { id: 'oats', name: 'Oats', category: 'pantry', unit: 'container', commonBrands: ['Quaker', 'Old Fashioned'] },
  { id: 'flour-all-purpose', name: 'All Purpose Flour', category: 'pantry', unit: 'bag', commonBrands: ['King Arthur', 'Gold Medal'] },
  { id: 'flour-wheat', name: 'Wheat Flour', category: 'pantry', unit: 'bag', commonBrands: ['King Arthur', 'Bob\'s Red Mill'] },
  { id: 'sugar-white', name: 'White Sugar', category: 'pantry', unit: 'bag', commonBrands: ['Domino', 'C&H'] },
  { id: 'sugar-brown', name: 'Brown Sugar', category: 'pantry', unit: 'bag', commonBrands: ['Domino', 'C&H'] },
  { id: 'salt', name: 'Salt', category: 'pantry', unit: 'container', commonBrands: ['Morton', 'Sea Salt'] },
  { id: 'black-pepper', name: 'Black Pepper', category: 'pantry', unit: 'container', commonBrands: ['McCormick', 'Freshly Ground'] },
  { id: 'olive-oil', name: 'Olive Oil', category: 'pantry', unit: 'bottle', commonBrands: ['Extra Virgin', 'Bertolli', 'California Olive Ranch'] },
  { id: 'vegetable-oil', name: 'Vegetable Oil', category: 'pantry', unit: 'bottle', commonBrands: ['Wesson', 'Crisco'] },
  { id: 'coconut-oil', name: 'Coconut Oil', category: 'pantry', unit: 'jar', commonBrands: ['Spectrum', 'Nutiva'] },
  { id: 'vinegar-white', name: 'White Vinegar', category: 'pantry', unit: 'bottle', commonBrands: ['Heinz', 'Great Value'] },
  { id: 'vinegar-apple-cider', name: 'Apple Cider Vinegar', category: 'pantry', unit: 'bottle', commonBrands: ['Bragg', 'Heinz'] },
  { id: 'balsamic-vinegar', name: 'Balsamic Vinegar', category: 'pantry', unit: 'bottle', commonBrands: ['Colavita', 'Pompeian'] },
  { id: 'soy-sauce', name: 'Soy Sauce', category: 'pantry', unit: 'bottle', commonBrands: ['Kikkoman', 'Lee Kum Kee'] },
  { id: 'hot-sauce', name: 'Hot Sauce', category: 'pantry', unit: 'bottle', commonBrands: ['Tabasco', 'Sriracha', 'Frank\'s'] },
  { id: 'ketchup', name: 'Ketchup', category: 'pantry', unit: 'bottle', commonBrands: ['Heinz', 'Hunt\'s'] },
  { id: 'mustard', name: 'Mustard', category: 'pantry', unit: 'bottle', commonBrands: ['French\'s', 'Grey Poupon'] },
  { id: 'mayonnaise', name: 'Mayonnaise', category: 'pantry', unit: 'jar', commonBrands: ['Hellmann\'s', 'Miracle Whip'] },
  { id: 'peanut-butter', name: 'Peanut Butter', category: 'pantry', unit: 'jar', commonBrands: ['Jif', 'Skippy', 'Natural'] },
  { id: 'jelly', name: 'Jelly/Jam', category: 'pantry', unit: 'jar', commonBrands: ['Smucker\'s', 'Welch\'s'] },
  { id: 'honey', name: 'Honey', category: 'pantry', unit: 'bottle', commonBrands: ['Local', 'Clover', 'Wildflower'] },
  { id: 'maple-syrup', name: 'Maple Syrup', category: 'pantry', unit: 'bottle', commonBrands: ['Pure', 'Aunt Jemima', 'Log Cabin'] },
  { id: 'canned-tomatoes', name: 'Canned Tomatoes', category: 'pantry', unit: 'can', commonBrands: ['Hunt\'s', 'Muir Glen', 'San Marzano'] },
  { id: 'tomato-sauce', name: 'Tomato Sauce', category: 'pantry', unit: 'can', commonBrands: ['Hunt\'s', 'Contadina'] },
  { id: 'tomato-paste', name: 'Tomato Paste', category: 'pantry', unit: 'can', commonBrands: ['Hunt\'s', 'Contadina'] },
  { id: 'chicken-broth', name: 'Chicken Broth', category: 'pantry', unit: 'carton', commonBrands: ['Swanson', 'Pacific', 'Kitchen Basics'] },
  { id: 'vegetable-broth', name: 'Vegetable Broth', category: 'pantry', unit: 'carton', commonBrands: ['Swanson', 'Pacific', 'Kitchen Basics'] },
  { id: 'beef-broth', name: 'Beef Broth', category: 'pantry', unit: 'carton', commonBrands: ['Swanson', 'Pacific', 'Kitchen Basics'] },
  { id: 'canned-beans-black', name: 'Black Beans', category: 'pantry', unit: 'can', commonBrands: ['Bush\'s', 'Goya'] },
  { id: 'canned-beans-kidney', name: 'Kidney Beans', category: 'pantry', unit: 'can', commonBrands: ['Bush\'s', 'Goya'] },
  { id: 'canned-beans-pinto', name: 'Pinto Beans', category: 'pantry', unit: 'can', commonBrands: ['Bush\'s', 'Goya'] },
  { id: 'canned-chickpeas', name: 'Chickpeas', category: 'pantry', unit: 'can', commonBrands: ['Bush\'s', 'Goya'] },
  { id: 'canned-corn', name: 'Canned Corn', category: 'pantry', unit: 'can', commonBrands: ['Green Giant', 'Del Monte'] },
  { id: 'canned-tuna', name: 'Canned Tuna', category: 'pantry', unit: 'can', commonBrands: ['StarKist', 'Bumble Bee'] },

  // Frozen Foods
  { id: 'frozen-vegetables', name: 'Frozen Vegetables', category: 'frozen', unit: 'bag', commonBrands: ['Green Giant', 'Birds Eye'] },
  { id: 'frozen-fruit', name: 'Frozen Fruit', category: 'frozen', unit: 'bag', commonBrands: ['Dole', 'Wyman\'s'] },
  { id: 'frozen-pizza', name: 'Frozen Pizza', category: 'frozen', unit: 'each', commonBrands: ['DiGiorno', 'Red Baron', 'Tombstone'] },
  { id: 'ice-cream', name: 'Ice Cream', category: 'frozen', unit: 'container', commonBrands: ['Ben & Jerry\'s', 'Häagen-Dazs', 'Breyers'] },
  { id: 'frozen-chicken-nuggets', name: 'Chicken Nuggets', category: 'frozen', unit: 'bag', commonBrands: ['Tyson', 'Perdue'] },
  { id: 'frozen-fish-sticks', name: 'Fish Sticks', category: 'frozen', unit: 'box', commonBrands: ['Gorton\'s', 'Van de Kamp\'s'] },
  { id: 'frozen-waffles', name: 'Frozen Waffles', category: 'frozen', unit: 'box', commonBrands: ['Eggo', 'Kashi'] },
  { id: 'frozen-berries', name: 'Frozen Berries', category: 'frozen', unit: 'bag', commonBrands: ['Mixed', 'Strawberries', 'Blueberries'] },
  { id: 'frozen-broccoli', name: 'Frozen Broccoli', category: 'frozen', unit: 'bag', commonBrands: ['Green Giant', 'Birds Eye'] },
  { id: 'frozen-peas', name: 'Frozen Peas', category: 'frozen', unit: 'bag', commonBrands: ['Green Giant', 'Birds Eye'] },

  // Bakery
  { id: 'bread-white', name: 'White Bread', category: 'bakery', unit: 'loaf', commonBrands: ['Wonder', 'Pepperidge Farm'] },
  { id: 'bread-wheat', name: 'Wheat Bread', category: 'bakery', unit: 'loaf', commonBrands: ['Dave\'s Killer', 'Pepperidge Farm'] },
  { id: 'bread-sourdough', name: 'Sourdough Bread', category: 'bakery', unit: 'loaf', commonBrands: ['Boudin', 'Fresh Baked'] },
  { id: 'bagels', name: 'Bagels', category: 'bakery', unit: 'package', commonBrands: ['Thomas\'', 'Everything', 'Plain'] },
  { id: 'english-muffins', name: 'English Muffins', category: 'bakery', unit: 'package', commonBrands: ['Thomas\'', 'Bays'] },
  { id: 'tortillas-flour', name: 'Flour Tortillas', category: 'bakery', unit: 'package', commonBrands: ['Mission', 'La Banderita'] },
  { id: 'tortillas-corn', name: 'Corn Tortillas', category: 'bakery', unit: 'package', commonBrands: ['Mission', 'La Banderita'] },
  { id: 'croissants', name: 'Croissants', category: 'bakery', unit: 'package', commonBrands: ['Pillsbury', 'Fresh Baked'] },
  { id: 'muffins', name: 'Muffins', category: 'bakery', unit: 'package', commonBrands: ['Blueberry', 'Chocolate Chip'] },
  { id: 'donuts', name: 'Donuts', category: 'bakery', unit: 'package', commonBrands: ['Glazed', 'Chocolate'] },

  // Beverages
  { id: 'water-bottled', name: 'Bottled Water', category: 'beverages', unit: 'case', commonBrands: ['Dasani', 'Aquafina', 'Fiji'] },
  { id: 'sparkling-water', name: 'Sparkling Water', category: 'beverages', unit: 'case', commonBrands: ['La Croix', 'Perrier', 'Bubly'] },
  { id: 'soda-cola', name: 'Cola', category: 'beverages', unit: 'case', commonBrands: ['Coca-Cola', 'Pepsi'] },
  { id: 'soda-sprite', name: 'Lemon-Lime Soda', category: 'beverages', unit: 'case', commonBrands: ['Sprite', 'Sierra Mist'] },
  { id: 'orange-juice', name: 'Orange Juice', category: 'beverages', unit: 'bottle', commonBrands: ['Tropicana', 'Minute Maid', 'Simply'] },
  { id: 'apple-juice', name: 'Apple Juice', category: 'beverages', unit: 'bottle', commonBrands: ['Mott\'s', 'Tree Top'] },
  { id: 'coffee-ground', name: 'Ground Coffee', category: 'beverages', unit: 'bag', commonBrands: ['Folgers', 'Maxwell House', 'Dunkin\''] },
  { id: 'coffee-beans', name: 'Coffee Beans', category: 'beverages', unit: 'bag', commonBrands: ['Starbucks', 'Local Roaster'] },
  { id: 'tea-bags', name: 'Tea Bags', category: 'beverages', unit: 'box', commonBrands: ['Lipton', 'Celestial Seasonings'] },
  { id: 'energy-drinks', name: 'Energy Drinks', category: 'beverages', unit: 'case', commonBrands: ['Red Bull', 'Monster'] },
  { id: 'sports-drinks', name: 'Sports Drinks', category: 'beverages', unit: 'case', commonBrands: ['Gatorade', 'Powerade'] },

  // Snacks
  { id: 'chips-potato', name: 'Potato Chips', category: 'snacks', unit: 'bag', commonBrands: ['Lay\'s', 'Pringles', 'Kettle'] },
  { id: 'chips-tortilla', name: 'Tortilla Chips', category: 'snacks', unit: 'bag', commonBrands: ['Tostitos', 'Doritos'] },
  { id: 'crackers', name: 'Crackers', category: 'snacks', unit: 'box', commonBrands: ['Ritz', 'Cheez-Its', 'Goldfish'] },
  { id: 'pretzels', name: 'Pretzels', category: 'snacks', unit: 'bag', commonBrands: ['Rold Gold', 'Snyder\'s'] },
  { id: 'popcorn', name: 'Popcorn', category: 'snacks', unit: 'box', commonBrands: ['Orville Redenbacher', 'Pop Secret'] },
  { id: 'nuts-mixed', name: 'Mixed Nuts', category: 'snacks', unit: 'can', commonBrands: ['Planters', 'Blue Diamond'] },
  { id: 'nuts-almonds', name: 'Almonds', category: 'snacks', unit: 'bag', commonBrands: ['Blue Diamond', 'Wonderful'] },
  { id: 'nuts-peanuts', name: 'Peanuts', category: 'snacks', unit: 'jar', commonBrands: ['Planters', 'Lance'] },
  { id: 'granola-bars', name: 'Granola Bars', category: 'snacks', unit: 'box', commonBrands: ['Nature Valley', 'Quaker'] },
  { id: 'cookies', name: 'Cookies', category: 'snacks', unit: 'package', commonBrands: ['Oreo', 'Chips Ahoy', 'Pepperidge Farm'] },
  { id: 'candy', name: 'Candy', category: 'snacks', unit: 'bag', commonBrands: ['M&M\'s', 'Snickers', 'Skittles'] },

  // Household Items
  { id: 'toilet-paper', name: 'Toilet Paper', category: 'household', unit: 'package', commonBrands: ['Charmin', 'Cottonelle', 'Angel Soft'] },
  { id: 'paper-towels', name: 'Paper Towels', category: 'household', unit: 'package', commonBrands: ['Bounty', 'Brawny'] },
  { id: 'tissues', name: 'Tissues', category: 'household', unit: 'box', commonBrands: ['Kleenex', 'Puffs'] },
  { id: 'dish-soap', name: 'Dish Soap', category: 'household', unit: 'bottle', commonBrands: ['Dawn', 'Joy', 'Palmolive'] },
  { id: 'laundry-detergent', name: 'Laundry Detergent', category: 'household', unit: 'bottle', commonBrands: ['Tide', 'Gain', 'Arm & Hammer'] },
  { id: 'fabric-softener', name: 'Fabric Softener', category: 'household', unit: 'bottle', commonBrands: ['Downy', 'Bounce'] },
  { id: 'all-purpose-cleaner', name: 'All Purpose Cleaner', category: 'household', unit: 'bottle', commonBrands: ['Formula 409', 'Fantastik'] },
  { id: 'glass-cleaner', name: 'Glass Cleaner', category: 'household', unit: 'bottle', commonBrands: ['Windex', 'Sparkle'] },
  { id: 'disinfectant-wipes', name: 'Disinfectant Wipes', category: 'household', unit: 'container', commonBrands: ['Clorox', 'Lysol'] },
  { id: 'trash-bags', name: 'Trash Bags', category: 'household', unit: 'box', commonBrands: ['Glad', 'Hefty'] },
  { id: 'aluminum-foil', name: 'Aluminum Foil', category: 'household', unit: 'roll', commonBrands: ['Reynolds', 'Great Value'] },
  { id: 'plastic-wrap', name: 'Plastic Wrap', category: 'household', unit: 'roll', commonBrands: ['Saran Wrap', 'Glad'] },
  { id: 'storage-bags', name: 'Storage Bags', category: 'household', unit: 'box', commonBrands: ['Ziploc', 'Glad'] },

  // Personal Care
  { id: 'shampoo', name: 'Shampoo', category: 'personal', unit: 'bottle', commonBrands: ['Pantene', 'Head & Shoulders', 'Herbal Essences'] },
  { id: 'conditioner', name: 'Conditioner', category: 'personal', unit: 'bottle', commonBrands: ['Pantene', 'TRESemmé', 'Herbal Essences'] },
  { id: 'body-wash', name: 'Body Wash', category: 'personal', unit: 'bottle', commonBrands: ['Dove', 'Olay', 'Irish Spring'] },
  { id: 'bar-soap', name: 'Bar Soap', category: 'personal', unit: 'package', commonBrands: ['Dove', 'Irish Spring', 'Ivory'] },
  { id: 'toothpaste', name: 'Toothpaste', category: 'personal', unit: 'tube', commonBrands: ['Crest', 'Colgate', 'Sensodyne'] },
  { id: 'toothbrush', name: 'Toothbrush', category: 'personal', unit: 'each', commonBrands: ['Oral-B', 'Colgate'] },
  { id: 'mouthwash', name: 'Mouthwash', category: 'personal', unit: 'bottle', commonBrands: ['Listerine', 'ACT', 'TheraBreath'] },
  { id: 'deodorant', name: 'Deodorant', category: 'personal', unit: 'stick', commonBrands: ['Secret', 'Degree', 'Old Spice'] },
  { id: 'razor', name: 'Razor', category: 'personal', unit: 'package', commonBrands: ['Gillette', 'Schick', 'Bic'] },
  { id: 'shaving-cream', name: 'Shaving Cream', category: 'personal', unit: 'can', commonBrands: ['Barbasol', 'Gillette', 'Edge'] },
  { id: 'lotion', name: 'Lotion', category: 'personal', unit: 'bottle', commonBrands: ['Jergens', 'Aveeno', 'Cetaphil'] },
  { id: 'sunscreen', name: 'Sunscreen', category: 'personal', unit: 'bottle', commonBrands: ['Neutrogena', 'Coppertone', 'Banana Boat'] }
];

export const getCategoryById = (categoryId: string): FoodCategory | undefined => {
  return foodCategories.find(cat => cat.id === categoryId);
};

export const getFoodItemsByCategory = (categoryId: string): FoodItem[] => {
  return foodItems.filter(item => item.category === categoryId);
};

export const searchFoodItems = (searchTerm: string): FoodItem[] => {
  if (!searchTerm.trim()) return foodItems;
  
  const term = searchTerm.toLowerCase();
  return foodItems.filter(item => 
    item.name.toLowerCase().includes(term) ||
    item.category.toLowerCase().includes(term) ||
    item.subcategory?.toLowerCase().includes(term) ||
    item.commonBrands?.some(brand => brand.toLowerCase().includes(term))
  );
};

export const getAllCategories = (): FoodCategory[] => {
  return foodCategories;
};

export const getAllFoodItems = (): FoodItem[] => {
  return foodItems;
};