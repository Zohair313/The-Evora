import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product, featured = false }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { y: -8 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{ duration: 0.3 }}
      className={featured ? 'col-span-1 md:col-span-2' : ''}
    >
      <Link to={`/product/${product.id}`} className="block group">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-light aspect-square md:aspect-[3/4]">
          {/* Image */}
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            onLoad={() => setIsImageLoaded(true)}
            onError={(e) => {
              const img = e.currentTarget;
              if (img.dataset.fallbackApplied) return;
              img.dataset.fallbackApplied = 'true';
              img.src = 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&q=80';
            }}
          />

          {/* Loading Skeleton */}
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-gray animate-pulse" />
          )}

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center"
            whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          >
            <motion.button
              className="btn-accent px-6 py-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View
            </motion.button>
          </motion.div>

          {/* Badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {discount > 0 && (
              <motion.div
                className="bg-accent text-white px-3 py-1 label-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                -{discount}%
              </motion.div>
            )}
            {!product.inStock && (
              <div className="bg-secondary text-white px-3 py-1 label-xs">
                Out of Stock
              </div>
            )}
          </div>

          {/* Category Label */}
          <div className="absolute top-4 left-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-white bg-black bg-opacity-40 px-3 py-1">
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-4 md:pt-6 space-y-2">
          {/* Category */}
          <p className="label-xs text-gray-dark">
            {product.category}
          </p>

          {/* Name */}
          <h3 className="heading-sm text-primary font-semibold group-hover:text-accent transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${
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
            <span className="text-xs text-gray-dark">
              {product.reviews} reviews
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 pt-2">
            <span className="heading-sm text-primary font-bold">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-dark line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Colors */}
          <div className="flex gap-2 pt-2">
            {product.colors.slice(0, 3).map((color) => {
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
                  className="w-4 h-4 rounded-full border-2 border-gray hover:border-primary transition-all"
                  style={{ backgroundColor: colorMap[color] || color }}
                  title={color}
                  whileHover={{ scale: 1.15 }}
                />
              );
            })}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-dark self-center">
                +{product.colors.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;