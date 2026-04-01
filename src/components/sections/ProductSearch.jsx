import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, Card, Icon, Button } from '../ui';
import { categories } from '../../data/storeData';

// Sample product data for realistic product cards with cannabis images
const sampleProducts = [
  {
    id: 1,
    name: "Blue Dream",
    category: "Flower",
    price: "$29.99",
    tag: "Popular",
    description: "Sativa-dominant hybrid",
    image: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Girl Scout Cookies",
    category: "Flower",
    price: "$34.99",
    tag: "Best Value",
    description: "Premium indica strain",
    image: "https://images.unsplash.com/photo-1589141986943-5578615fdef2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Sour Diesel",
    category: "Flower",
    price: "$27.99",
    tag: "New",
    description: "Energizing sativa",
    image: "https://images.unsplash.com/photo-1559558260-dfa522cfd57c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "OG Kush",
    category: "Flower",
    price: "$32.99",
    tag: "Popular",
    description: "Classic hybrid",
    image: "https://images.unsplash.com/photo-1589140915628-3d4a848d6007?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Gelato",
    category: "Flower",
    price: "$36.99",
    tag: "Premium",
    description: "Sweet hybrid strain",
    image: "https://images.unsplash.com/photo-1652054647785-7e33ab510110?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    name: "Wedding Cake",
    category: "Flower",
    price: "$38.99",
    tag: "Best Value",
    description: "Relaxing indica",
    image: "https://images.unsplash.com/photo-1629851047755-818331c3cc08?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    name: "Pineapple Express",
    category: "Flower",
    price: "$31.99",
    tag: "Popular",
    description: "Tropical sativa",
    image: "https://images.unsplash.com/photo-1619717115345-6e9d6eaa0144?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 8,
    name: "Northern Lights",
    category: "Flower",
    price: "$28.99",
    tag: "Classic",
    description: "Pure indica",
    image: "https://images.unsplash.com/photo-1591513210582-031917997112?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 9,
    name: "Glass Beaker Bong",
    category: "Glass Accessories",
    price: "$49.99",
    tag: "Popular",
    description: "12\" scientific glass",
    image: "https://backendbase.com/i/p/1066_1.jpg"
  },
  {
    id: 10,
    name: "Mini Dab Rig",
    category: "Glass Accessories",
    price: "$64.99",
    tag: "Premium",
    description: "Compact concentrate rig",
    image: "https://backendbase.com/i/p/yellow-percolator-dab-rig-129f7-3.jpg"
  },
  {
    id: 11,
    name: "4-Piece Grinder",
    category: "Grinders & Trays",
    price: "$19.99",
    tag: "Best Value",
    description: "Aluminum with kief catcher",
    image: "https://backendbase.com/i/p/3-JC-8250-4A_1.jpg"
  },
  {
    id: 12,
    name: "Rolling Tray Set",
    category: "Grinders & Trays",
    price: "$14.99",
    tag: "Popular",
    description: "Magnetic lid tray",
    image: "https://backendbase.com/i/p/raw-girl-tray-9ba85-3.jpg"
  },

];

export default function ProductSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);

  const filteredProducts = useMemo(() => {
    return sampleProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Generate suggestions based on search query
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase();
      const matchedProducts = sampleProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
      setSuggestions(matchedProducts.slice(0, 5));
      setShowSuggestions(matchedProducts.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (product) => {
    setSearchQuery(product.name);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShowSuggestions(false);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  // Get unique categories from sample products
  const uniqueCategories = [...new Set(sampleProducts.map(p => p.category))];

  return (
    <Section id="products-search" background="dark">
      <div className="text-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Browse Our <span className="text-gradient">Products</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-subtitle mx-auto"
        >
          Find exactly what you're looking for with our product search and filters.
        </motion.p>
      </div>

      {/* Search and Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <Card className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative" ref={searchRef}>
              <label htmlFor="product-search" className="sr-only">
                Search products
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Icon name="search" className="text-text-dim w-5 h-5" ariaLabel="Search" />
                </div>
                <input
                  type="text"
                  id="product-search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                  placeholder="Search products..."
                  aria-label="Search products"
                  aria-autocomplete="list"
                  aria-controls="search-suggestions"
                  aria-expanded={showSuggestions}
                  className="w-full pl-12 pr-4 py-3 bg-surface-card border border-border rounded-lg text-text placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent focus:shadow-[0_0_20px_rgba(40,217,93,0.15)] transition-all duration-300"
                />
              </div>

              {/* Suggestions Dropdown */}
              <AnimatePresence>
                {showSuggestions && suggestions.length > 0 && (
                  <motion.div
                    ref={suggestionsRef}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    id="search-suggestions"
                    className="absolute z-10 w-full mt-1 bg-surface-card border border-border rounded-lg shadow-lg overflow-hidden"
                    role="listbox"
                  >
                    {suggestions.map((product, index) => (
                      <button
                        key={product.id}
                        onClick={() => handleSuggestionClick(product)}
                        className="w-full px-4 py-3 text-left hover:bg-surface-card2 transition-colors duration-200 flex items-center gap-3 focus:outline-none focus:bg-surface-card2"
                        role="option"
                        aria-selected={false}
                      >
                        <div className="w-8 h-8 bg-accent-soft rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon
                            name="tag"
                            className="text-accent w-4 h-4"
                            ariaLabel={product.name}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-text font-medium truncate">{product.name}</p>
                          <p className="text-sm text-text-dim truncate">{product.description}</p>
                        </div>
                        <span className="text-accent font-semibold text-sm">{product.price}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <label htmlFor="category-filter" className="sr-only">
                Filter by category
              </label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Filter by category"
                className="w-full px-4 py-3 bg-surface-card border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent focus:shadow-[0_0_20px_rgba(40,217,93,0.15)] transition-all duration-300"
              >
                <option value="all">All Categories</option>
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters Button */}
            {(searchQuery || selectedCategory !== 'all') && (
              <Button
                variant="ghost"
                onClick={handleClearFilters}
                className="whitespace-nowrap"
                ariaLabel="Clear all filters"
              >
                Clear Filters
              </Button>
            )}
          </div>

          {/* Results Count */}
          <div className="mt-4 text-text-muted text-sm" aria-live="polite" aria-atomic="true">
            Showing {filteredProducts.length} of {sampleProducts.length} products
          </div>
        </Card>
      </motion.div>

      {/* Product Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        role="list"
        aria-label="Products"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              role="listitem"
            >
              <Card
                className="h-full relative group cursor-pointer overflow-hidden"
                whileHover={{
                  y: -10,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(40, 217, 93, 0.25), 0 0 40px rgba(40, 217, 93, 0.15)'
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                {/* Tag with consistent styling */}
                <div className="absolute top-3 right-3 z-10">
                  <motion.span
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(40, 217, 93, 0)',
                        '0 0 0 3px rgba(40, 217, 93, 0.1)',
                        '0 0 0 0 rgba(40, 217, 93, 0)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${product.tag === 'Popular'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30 shadow-[0_0_8px_rgba(34,197,94,0.2)]'
                        : product.tag === 'Best Value'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30 shadow-[0_0_8px_rgba(34,197,94,0.2)]'
                          : product.tag === 'New'
                            ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30 shadow-[0_0_8px_rgba(168,85,247,0.2)]'
                            : product.tag === 'Premium'
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-[0_0_8px_rgba(245,158,11,0.2)]'
                              : 'bg-surface-card2 text-text-muted border border-border'
                      }`}>
                    {product.tag}
                  </motion.span>
                </div>

                {/* Product Image with consistent zoom */}
                <div className="w-full h-48 bg-gradient-to-br from-surface-card2 to-surface-card rounded-lg mb-4 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-base/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product Info with emphasized price */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-text group-hover:text-accent transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-text-dim">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xl font-extrabold text-accent brightness-110">{product.price}</span>
                    <span className="text-xs text-text-dim">{product.category}</span>
                  </div>
                </div>

                {/* View Button (appears on hover with smooth fade) */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-base/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <Button
                    variant="primary"
                    size="sm"
                    className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    ariaLabel={`View ${product.name}`}
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
          role="status"
          aria-live="polite"
        >
          <div className="w-20 h-20 mx-auto mb-4 bg-surface-card rounded-full flex items-center justify-center">
            <Icon name="tag" className="text-text-dim w-10 h-10" ariaLabel="No results" />
          </div>
          <h3 className="text-xl font-semibold text-text mb-2">No products found</h3>
          <p className="text-text-muted mb-6">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <Button variant="primary" onClick={handleClearFilters} ariaLabel="Clear all filters">
            Clear All Filters
          </Button>
        </motion.div>
      )}
    </Section>
  );
}
