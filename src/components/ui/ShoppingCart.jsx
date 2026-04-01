import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Icon } from './index';

const CART_STORAGE_KEY = 'littleYorkCart';

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        }
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cartItems]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, change) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          if (newQuantity >= 1 && newQuantity <= 10) {
            return { ...item, quantity: newQuantity };
          }
        }
        return item;
      })
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.0825; // 8.25% tax
  const total = subtotal + tax;

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Cart Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="fixed bottom-40 right-6 z-50 w-14 h-14 bg-accent text-white rounded-full shadow-lg shadow-accent/30 flex items-center justify-center hover:bg-accent-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base"
        aria-label={isOpen ? 'Close shopping cart' : 'Open shopping cart'}
        aria-expanded={isOpen}
      >
        <Icon name="tag" className="w-6 h-6" ariaLabel="Cart" />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </motion.button>

      {/* Cart Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-surface-base border-l border-border shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="shopping-cart-title"
          >
            {/* Header */}
            <div className="bg-accent p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <Icon name="tag" className="text-white w-5 h-5" ariaLabel="Cart" />
                </div>
                <div>
                  <h2 id="shopping-cart-title" className="text-white font-semibold">
                    Shopping Cart
                  </h2>
                  <p className="text-white/80 text-sm">
                    {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent rounded"
                aria-label="Close shopping cart"
              >
                <Icon name="close" className="w-5 h-5" ariaLabel="Close" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4" aria-live="polite" aria-atomic="false">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-4 bg-surface-card rounded-full flex items-center justify-center">
                    <Icon name="tag" className="text-text-dim w-10 h-10" ariaLabel="Empty cart" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">Your cart is empty</h3>
                  <p className="text-text-muted mb-6">
                    Looks like you haven't added any items to your cart yet.
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => setIsOpen(false)}
                    ariaLabel="Continue shopping"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 bg-surface-card rounded-lg"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-surface-card2 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain p-2"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-text font-semibold mb-1 truncate">{item.name}</h3>
                        <p className="text-accent font-bold mb-2">${item.price.toFixed(2)}</p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            disabled={item.quantity <= 1}
                            className="w-8 h-8 bg-surface-card2 border border-border rounded flex items-center justify-center text-text hover:bg-surface-card transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <span className="text-sm">−</span>
                          </button>
                          <span className="text-text font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            disabled={item.quantity >= 10}
                            className="w-8 h-8 bg-surface-card2 border border-border rounded flex items-center justify-center text-text hover:bg-surface-card transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <span className="text-sm">+</span>
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-2 text-text-dim hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-surface-base rounded"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Icon name="close" className="w-4 h-4" ariaLabel="Remove" />
                      </button>
                    </div>
                  ))}

                  {/* Clear Cart Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearCart}
                    className="w-full justify-center"
                    ariaLabel="Clear all items from cart"
                  >
                    Clear Cart
                  </Button>
                </div>
              )}
            </div>

            {/* Cart Summary */}
            {cartItems.length > 0 && (
              <div className="border-t border-border p-4 bg-surface-card">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-text-muted">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-text-muted">
                    <span>Tax (8.25%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-text font-bold text-lg pt-2 border-t border-border">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  ariaLabel="Proceed to checkout"
                >
                  <Icon name="tag" className="mr-2" ariaLabel="Checkout" />
                  Proceed to Checkout
                </Button>

                <p className="text-xs text-text-dim text-center mt-4">
                  Free shipping on orders over $50
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
