import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-lg mb-4">Product not found</h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <motion.div
        className="container-max py-6 md:py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-gray-dark hover:text-primary">Home</Link>
          <span className="text-gray-dark">/</span>
          <Link to="/shop" className="text-gray-dark hover:text-primary">Shop</Link>
          <span className="text-gray-dark">/</span>
          <span className="text-primary font-medium">{product.category}</span>
        </div>
      </motion.div>

      <section className="container-max pb-16 md:pb-20 lg:pb-24">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Product Image */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4"
          >
            <motion.div
              className="relative overflow-hidden aspect-square bg-light"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.dataset.fallbackApplied) return;
                  img.dataset.fallbackApplied = 'true';
                  img.src = 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&q=80';
                }}
              />
              {discount > 0 && (
                <motion.div
                  className="absolute top-6 right-6 bg-accent text-white px-4 py-2 label-sm"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  -{discount}%
                </motion.div>
              )}
            </motion.div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((idx) => (
                <motion.button
                  key={idx}
                  className="aspect-square border-2 border-gray hover:border-primary overflow-hidden"
                  whileHover={{ borderColor: '#D4A373' }}
                  onClick={() => {}}
                >
                  <img
                    src={product.image}
                    alt={`View ${idx + 1}`}
                    className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (img.dataset.fallbackApplied) return;
                      img.dataset.fallbackApplied = 'true';
                      img.src = 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&q=80';
                    }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col"
          >
            {/* Category & Rating */}
            <motion.div
              className="mb-4 md:mb-6"
              variants={itemVariants}
            >
              <span className="label-xs text-gray-dark block mb-2">
                {product.category}
              </span>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-accent fill-accent'
                          : 'text-gray'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-dark">
                  ({product.reviews} reviews)
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="heading-lg md:heading-display mb-4 md:mb-6 text-primary"
            >
              {product.name}
            </motion.h1>

            {/* Price */}
            <motion.div
              variants={itemVariants}
              className="flex items-baseline gap-3 mb-6 md:mb-8"
            >
              <span className="heading-md text-primary font-bold">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-dark line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="divider mb-6 md:mb-8"
            ></motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="body-lg text-gray-dark mb-6 md:mb-8"
            >
              {product.description}
            </motion.p>

            {/* Color Selection */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <label className="label-sm text-primary block mb-4">
                Color: <span className="text-accent">{selectedColor}</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => {
                  const colorMap = {
                    'White': '#F9F8F5',
                    'Black': '#1A1A1A',
                    'Cream': '#F5F1ED',
                    'Navy': '#1a3a52',
                    'Charcoal': '#2D2D2D',
                    'Sage': '#9CAF88',
                    'Camel': '#C9B5A0',
                    'Grey': '#8B8680',
                    'Brown': '#6B4423',
                    'Tan': '#C9B8A6',
                    'Light Blue': '#ADD8E6',
                    'Pink': '#FFB6C1',
                    'Burgundy': '#800020',
                    'Khaki': '#C3B091',
                    'Blush': '#FFB3BA',
                    'Gold': '#D4A373',
                    'Raw Indigo': '#4A5568',
                    'Dark Indigo': '#2C3E50',
                  };

                  return (
                    <motion.button
                      key={color}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color
                          ? 'border-accent ring-2 ring-accent ring-offset-2'
                          : 'border-gray hover:border-primary'
                      }`}
                      style={{ backgroundColor: colorMap[color] || color }}
                      onClick={() => setSelectedColor(color)}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      title={color}
                    ></motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Size Selection */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <label className="label-sm text-primary block mb-4">
                Size: <span className="text-accent">{selectedSize}</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    className={`px-4 py-3 border-2 font-medium transition-all ${
                      selectedSize === size
                        ? 'border-accent bg-accent text-white'
                        : 'border-gray text-primary hover:border-primary'
                    }`}
                    onClick={() => setSelectedSize(size)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Quantity */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <label className="label-sm text-primary block mb-4">Quantity</label>
              <div className="flex items-center border border-gray w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-light transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-3 border-l border-r border-gray font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-light transition-colors"
                >
                  +
                </button>
              </div>
            </motion.div>

            {/* Add to Cart Button */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.button
                className="flex-1 btn-primary px-8 py-4 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
              </motion.button>
              <motion.button
                className="btn-secondary px-8 py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Product Info */}
            <motion.div
              variants={itemVariants}
              className="bg-light p-6 rounded-lg space-y-4"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="label-sm text-primary">Premium Quality</p>
                  <p className="body-sm text-gray-dark">Carefully crafted with attention to detail</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="label-sm text-primary">Fast Shipping</p>
                  <p className="body-sm text-gray-dark">Delivered within 3-5 business days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">↩</span>
                <div>
                  <p className="label-sm text-primary">30-Day Returns</p>
                  <p className="body-sm text-gray-dark">Hassle-free returns policy</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <motion.section
          className="section-padding bg-light border-t border-gray"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container-max">
            {/* Section Header */}
            <motion.div
              className="max-w-2xl mx-auto text-center mb-12 md:mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                variants={itemVariants}
                className="label-sm text-accent block mb-4"
              >
                YOU MAY ALSO LIKE
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="heading-lg"
              >
                Related Products
              </motion.h2>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              className="grid-products"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {relatedProducts.map((related) => (
                <motion.div key={related.id} variants={itemVariants}>
                  <ProductCard product={related} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}
    </div>
  );
};

export default ProductDetail;