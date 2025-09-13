# Contributing to Smart Grocery List

Thank you for your interest in contributing to Smart Grocery List! We welcome contributions from everyone.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/smart-grocery-list.git
   cd smart-grocery-list
   ```
3. **Install dependencies**:
   ```bash
   pnpm install
   ```
4. **Start the development server**:
   ```bash
   pnpm dev
   ```

## 🛠️ Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow existing code formatting and structure
- Use meaningful variable and function names
- Add comments for complex logic

### Component Structure
- Place new components in `src/components/`
- Use functional components with hooks
- Implement proper TypeScript interfaces
- Follow the existing component patterns

### Adding Food Items
To add new food items to the database:

1. Edit `src/lib/foodData.ts`
2. Add items to the appropriate category
3. Follow the existing data structure:

```typescript
{
  id: 'unique-identifier',
  name: 'Item Name',
  category: 'category-id',
  subcategory: 'optional-subcategory',
  unit: 'lb|each|bag|bottle|container',
  commonBrands: ['Brand 1', 'Brand 2']
}
```

### Adding New Categories
To add a new food category:

1. Add to `foodCategories` array in `src/lib/foodData.ts`
2. Include: id, name, icon (emoji), color classes, description
3. Add corresponding food items with the new category ID

## 🧪 Testing

Before submitting your contribution:

1. **Test your changes**:
   ```bash
   pnpm build
   pnpm start
   ```

2. **Check for TypeScript errors**:
   ```bash
   pnpm build
   ```

3. **Test on different screen sizes** to ensure responsiveness

4. **Verify localStorage functionality** works correctly

## 📝 Submitting Changes

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the guidelines above

3. **Commit with clear messages**:
   ```bash
   git commit -m "Add: Brief description of changes"
   ```

4. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** on GitHub with:
   - Clear description of changes
   - Screenshots if UI changes are involved
   - Test instructions for reviewers

## 🐛 Reporting Issues

When reporting bugs, please include:

- **Clear description** of the issue
- **Steps to reproduce** the problem
- **Expected behavior** vs actual behavior
- **Browser and device information**
- **Screenshots** if applicable

Use our issue templates when available.

## 💡 Feature Requests

For new feature suggestions:

- **Describe the feature** and its benefits
- **Explain the use case** - why would users want this?
- **Consider the scope** - is this a core feature or enhancement?
- **Provide mockups** or examples if helpful

## 📋 Pull Request Guidelines

### Before Submitting
- [ ] Code follows existing style and patterns
- [ ] All TypeScript errors are resolved
- [ ] Application builds successfully
- [ ] Feature works on mobile and desktop
- [ ] localStorage functionality is preserved
- [ ] No console errors in browser

### PR Description Should Include
- **What** changes were made
- **Why** the changes were needed  
- **How** to test the changes
- **Screenshots** for UI changes
- **Breaking changes** if any

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── GroceryApp.tsx     # Main app component
│   ├── FoodDatabase.tsx   # Food catalog
│   ├── ShoppingList.tsx   # List management
│   ├── SearchBar.tsx      # Search & filtering
│   └── ui/                # shadcn/ui components
├── lib/                   # Utility libraries
│   ├── foodData.ts        # Food database
│   ├── types.ts           # TypeScript types
│   └── utils.ts           # Helper functions
└── hooks/                 # Custom React hooks
    └── useLocalStorage.ts # Storage persistence
```

## 🎯 Priority Areas for Contribution

We especially welcome contributions in these areas:

1. **Food Database Expansion**
   - Adding more food items
   - Expanding brand information
   - International/regional foods

2. **User Experience Improvements**
   - Accessibility enhancements
   - Performance optimizations
   - Mobile experience refinements

3. **New Features**
   - Import/export functionality
   - Multiple shopping lists
   - Recipe integration
   - Meal planning features

4. **Technical Improvements**
   - Code optimization
   - Error handling enhancements
   - Test coverage
   - Documentation updates

## 🤝 Community Guidelines

- **Be respectful** and inclusive
- **Help others** learn and grow
- **Share knowledge** and best practices
- **Give constructive feedback**
- **Celebrate contributions** of all sizes

## 📞 Getting Help

- **GitHub Discussions**: For questions and community discussions
- **Issues**: For bug reports and feature requests
- **Pull Requests**: For code contributions and reviews

Thank you for contributing to Smart Grocery List! 🛒✨