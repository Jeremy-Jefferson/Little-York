import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Section, Card, Button, Icon, Skeleton } from '../components/ui';
import { categories } from '../data/storeData';
import logo from '../assets/images/LYLOGO.svg';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Find product by ID
  const product = categories.find((cat) => cat.id.toString() === id);

  // Simulate loading
  useState(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!product) {
    return (
      <Section id="product-not-found" background="dark" padding="lg">
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-4 bg-surface-card rounded-full flex items-center justify-center">
            <Icon name="tag" className="text-text-dim w-10 h-10" ariaLabel="Product not found" />
          </div>
          <h2 className="text-2xl font-display font-bold text-text mb-2">Product Not Found</h2>
          <p className="text-text-muted mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button variant="primary" onClick={() => navigate('/')} ariaLabel="Go back to home">
            Go Back Home
          </Button>
        </div>
      </Section>
    );
  }

  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  // Mock product images
  const productImages = [
    { id: 1, url: logo, alt: `${product.name} - Image 1` },
    { id: 2, url: logo, alt: `${product.name} - Image 2` },
    { id: 3, url: logo, alt: `${product.name} - Image 3` },
  ];

  // Mock product details
  const productDetails = {
    price: '$29.99',
    description: `Premium quality ${product.name.toLowerCase()} at affordable prices. We source only the best products to ensure you get the highest quality smoking essentials.`,
    features: [
      'Premium quality',
      'Affordable pricing',
      'Wide selection',
      'Expert staff recommendations',
    ],
    inStock: true,
    rating: 4.8,
    reviews: 124,
  };

  return (
    <Section id="product-detail" background="dark" padding="lg">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center space-x-2 text-sm text-text-muted">
            <li>
              <a href="/" className="hover:text-accent transition-colors">
                Home
              </a>
            </li>
            <li>
              <Icon name="arrowRight" className="w-4 h-4" ariaLabel="Separator" />
            </li>
            <li>
              <a href="/#products" className="hover:text-accent transition-colors">
                Products
              </a>
            </li>
            <li>
              <Icon name="arrowRight" className="w-4 h-4" ariaLabel="Separator" />
            </li>
            <li className="text-text" aria-current="page">
              {product.name}
            </li>
          </ol>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden">
              {isLoading ? (
                <Skeleton variant="card" height="xl" />
              ) : (
                <>
                  {/* Main Image */}
                  <div className="relative aspect-square mb-4 bg-surface-card2 rounded-lg overflow-hidden">
                    <img
                      src={productImages[selectedImage].url}
                      alt={productImages[selectedImage].alt}
                      className="w-full h-full object-contain p-8"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Thumbnail Gallery */}
                  <div className="flex gap-2" role="list" aria-label="Product images">
                    {productImages.map((image, index) => (
                      <button
                        key={image.id}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-1 aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          selectedImage === index
                            ? 'border-accent'
                            : 'border-border hover:border-accent/50'
                        }`}
                        aria-label={`View ${image.alt}`}
                        aria-pressed={selectedImage === index}
                      >
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-contain p-2"
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </Card>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton variant="text" width="3/4" />
                  <Skeleton variant="text" width="1/2" />
                  <Skeleton variant="text" width="full" />
                  <Skeleton variant="text" width="full" />
                </div>
              ) : (
                <>
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-accent-soft text-accent text-sm font-semibold rounded-full mb-4">
                    <Icon name={product.icon} className="mr-2 w-4 h-4" ariaLabel={product.name} />
                    {product.name}
                  </div>

                  {/* Product Name */}
                  <h1 className="text-3xl md:text-4xl font-display font-bold text-text mb-2">
                    {product.name}
                  </h1>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex" role="img" aria-label={`Rating: ${productDetails.rating} out of 5`}>
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="star"
                          className={`w-5 h-5 ${
                            i < Math.floor(productDetails.rating)
                              ? 'text-accent'
                              : 'text-text-dim'
                          }`}
                          ariaLabel={i < Math.floor(productDetails.rating) ? 'Filled star' : 'Empty star'}
                        />
                      ))}
                    </div>
                    <span className="text-text-muted text-sm">
                      {productDetails.rating} ({productDetails.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="text-3xl font-bold text-accent mb-6">{productDetails.price}</div>

                  {/* Description */}
                  <p className="text-text-muted mb-6 leading-relaxed">{productDetails.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-text mb-3">Features</h3>
                    <ul className="space-y-2" aria-label="Product features">
                      {productDetails.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-text-muted">
                          <Icon name="shield" className="mr-2 text-accent w-4 h-4" ariaLabel="Feature" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-3 h-3 rounded-full mr-2 ${
                        productDetails.inStock ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`text-sm font-medium ${
                        productDetails.inStock ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {productDetails.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>

                  {/* Quantity Selector */}
                  <div className="mb-6">
                    <label htmlFor="quantity" className="block text-sm font-medium text-text mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                        className="w-10 h-10 bg-surface-card border border-border rounded-lg flex items-center justify-center text-text hover:bg-surface-card2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base"
                        aria-label="Decrease quantity"
                      >
                        <span className="text-xl">−</span>
                      </button>
                      <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          if (val >= 1 && val <= 10) {
                            setQuantity(val);
                          }
                        }}
                        min="1"
                        max="10"
                        className="w-20 px-4 py-2 bg-surface-card border border-border rounded-lg text-text text-center focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        aria-label="Quantity"
                      />
                      <button
                        onClick={() => handleQuantityChange(1)}
                        disabled={quantity >= 10}
                        className="w-10 h-10 bg-surface-card border border-border rounded-lg flex items-center justify-center text-text hover:bg-surface-card2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base"
                        aria-label="Increase quantity"
                      >
                        <span className="text-xl">+</span>
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleAddToCart}
                    disabled={!productDetails.inStock}
                    className="w-full justify-center"
                    ariaLabel={productDetails.inStock ? 'Add to cart' : 'Out of stock'}
                  >
                    <Icon name="tag" className="mr-2" ariaLabel="Cart" />
                    {productDetails.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>

                  {/* Additional Info */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-text-dim">Category</p>
                        <p className="text-text font-medium">{product.name}</p>
                      </div>
                      <div>
                        <p className="text-text-dim">SKU</p>
                        <p className="text-text font-medium">LY-{product.id.toString().padStart(4, '0')}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        </div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-display font-bold text-text mb-8">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories
              .filter((cat) => cat.id !== product.id)
              .slice(0, 4)
              .map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="h-full text-center group cursor-pointer">
                    <div className="w-16 h-16 mx-auto mb-4 bg-surface-card2 rounded-xl flex items-center justify-center group-hover:bg-accent-soft transition-colors duration-300">
                      <Icon
                        name={category.icon}
                        className="text-text-muted group-hover:text-accent transition-colors duration-300 w-8 h-8"
                        ariaLabel={category.name}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-text mb-1">{category.name}</h3>
                    <p className="text-sm text-text-dim">{category.description}</p>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
