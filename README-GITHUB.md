# 🛒 Smart Grocery List

A comprehensive, modern grocery list application built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. Features a complete food database with 300+ items, smart search, persistent storage, and an intuitive shopping experience.

## ✨ Features

### 📋 Comprehensive Food Database
- **300+ food items** across 10 organized categories
- Categories: Produce, Dairy & Eggs, Meat & Seafood, Pantry, Frozen, Bakery, Beverages, Snacks, Household, Personal Care
- Each item includes common brands, units, and subcategories
- Smart organization for efficient grocery shopping

### 🔍 Advanced Search & Filtering
- Real-time search across food names, categories, and brands
- Visual category filtering with icons and descriptions
- Expandable category selector with item counts
- Clear active filter displays and management

### 🛒 Smart Shopping List Management
- One-click item addition to shopping list
- Quantity adjustment with number inputs
- Personal notes (brand preferences, sizes, special instructions)
- Mark items as completed while shopping
- Category-organized list for store navigation
- Visual completion tracking with statistics

### 💾 Persistent Data Storage
- Automatic localStorage persistence
- No account creation required
- Data survives browser sessions and restarts
- Cross-tab synchronization

### 📱 Responsive Modern Design
- Beautiful, grocery store-inspired interface
- Mobile-first responsive design
- Intuitive tab-based navigation
- Category color coding for quick identification
- Professional UI with shadcn/ui components

### 📋 Export & Sharing
- Copy shopping list to clipboard
- Formatted output for printing or sharing
- Includes quantities, units, and personal notes
- Professional list formatting

## 🚀 Live Demo

**Try it now:** [Smart Grocery List](https://sb-3lhnip9ppuw2.vercel.run)

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components  
- **State Management:** React Hooks + localStorage
- **Build Tool:** Next.js with optimized production builds
- **Icons:** Emoji-based design (no external icon dependencies)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/smart-grocery-list.git
cd smart-grocery-list

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Or build for production
pnpm build
pnpm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main application page
│   └── globals.css         # Global styles
├── components/
│   ├── GroceryApp.tsx      # Main application component
│   ├── FoodDatabase.tsx    # Food catalog display
│   ├── ShoppingList.tsx    # Shopping list management
│   ├── SearchBar.tsx       # Search and filtering
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── foodData.ts         # Complete food database
│   ├── types.ts            # TypeScript interfaces
│   └── utils.ts            # Utility functions
└── hooks/
    └── useLocalStorage.ts  # Persistent storage hook
```

## 🎯 How to Use

### 1. **Browse Foods**
- Start on the "Browse Foods" tab
- Explore 300+ items organized by categories
- Use search to find specific items quickly
- Filter by categories using the expandable selector

### 2. **Build Your List**
- Click "Add to List" on any food item
- Items are automatically added to your shopping list
- Visual feedback shows which items are already added

### 3. **Manage Your Shopping List**
- Switch to "Shopping List" tab
- Adjust quantities using number inputs
- Add personal notes for each item
- Items are organized by store categories

### 4. **While Shopping**
- Check off items as you shop
- Track progress with completion statistics
- Items stay organized by grocery store layout

### 5. **Export & Share**
- Use "Export List" to copy to clipboard
- Share formatted lists or print for offline use
- Includes all quantities, units, and notes

## 🗂️ Food Categories

- 🥬 **Produce** - Fresh fruits, vegetables, and herbs
- 🥛 **Dairy & Eggs** - Milk, cheese, yogurt, and eggs  
- 🥩 **Meat & Seafood** - Fresh meat, poultry, and seafood
- 🥫 **Pantry** - Canned goods, grains, and dry goods
- 🧊 **Frozen** - Frozen foods and ice cream
- 🍞 **Bakery** - Fresh bread, pastries, and baked goods
- 🥤 **Beverages** - Drinks, juices, and beverages
- 🍿 **Snacks** - Chips, crackers, and snack foods
- 🧽 **Household** - Cleaning supplies and household items
- 🧴 **Personal Care** - Health and beauty products

## 🔧 Configuration

### Environment Variables
No environment variables required! The app works out of the box with localStorage.

### Customization Options
- **Add New Food Items**: Edit `src/lib/foodData.ts` 
- **Modify Categories**: Update categories in `src/lib/foodData.ts`
- **Styling Changes**: Modify Tailwind classes throughout components
- **Storage Backend**: Replace localStorage hook with API calls if needed

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
# Deploy to Vercel
pnpm build
vercel --prod
```

### Netlify
```bash
# Build for static deployment
pnpm build
# Upload the `.next` folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

## 🧪 Testing

The application includes:
- **Type Safety**: Full TypeScript implementation
- **Error Handling**: Graceful fallbacks for storage issues
- **Responsive Design**: Tested across device sizes
- **Performance**: Optimized builds with Next.js

Run development server with:
```bash
pnpm dev
```

## 📈 Performance Features

- **Static Generation**: Pre-rendered pages for fast loading
- **Code Splitting**: Automatic chunking for optimal bundle sizes  
- **Lazy Loading**: Components load as needed
- **Local Storage**: Instant data persistence without server calls
- **Optimized Images**: Next.js image optimization
- **Minimal Dependencies**: Focused tech stack for fast builds

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

### Adding New Food Items
To add new food items, edit `src/lib/foodData.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Food Name',
  category: 'category-id',
  subcategory: 'optional-subcategory',
  unit: 'lb|each|bag|bottle',
  commonBrands: ['Brand 1', 'Brand 2']
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: Report bugs or request features via GitHub Issues
- **Documentation**: Check this README for setup and usage guide
- **Community**: Star the repo if you find it useful!

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful, accessible components
- **Next.js** for the excellent React framework
- **Tailwind CSS** for utility-first styling
- **TypeScript** for type safety and developer experience

---

**Built with ❤️ for better grocery shopping experiences**

⭐ **Star this repo if it helps you organize your grocery shopping!**