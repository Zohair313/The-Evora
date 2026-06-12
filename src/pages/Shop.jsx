import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState(500);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Women', 'Men', 'Accessories'];

  // Filter products
  const filteredProducts = products
    .filter((p) => selectedCategory === 'All' || p.category === selectedCategory)
    .filter((p) => p.price <= priceRange)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'newest') return b.id - a.id;
      return 0;
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <motion.section
        className="bg-light border-b border-gray section-padding-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-max">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="label-sm text-accent block mb-4">SHOP</span>
            <h1 className="heading-lg mb-4">All Products</h1>
            <p className="body-lg text-gray-dark">
              Discover our complete collection of luxury fashion items.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="container-max py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Sidebar - Filters */}
          <motion.div
            className={`${
              showFilters ? 'block' : 'hidden'
            } lg:block col-span-1`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Filter Header */}
            <div className="flex justify-between items-center mb-6 lg:mb-0">
              <h3 className="heading-sm text-primary">Filters</h3>
              <button
                className="lg:hidden text-gray-dark hover:text-primary"
                onClick={() => setShowFilters(false)}
              >
                ✕
              </button>
            </div>

            <div className="space-y-8">
              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="label-sm text-primary mb-4">Category</h4>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block text-left body-sm font-medium transition-all duration-300 ${
                        selectedCategory === cat
                          ? 'text-accent'
                          : 'text-gray-dark hover:text-primary'
                      }`}
                    >
                      {cat}
                      <span className="ml-2 text-xs text-gray-dark">
                        ({products.filter((p) => cat === 'All' || p.category === cat).length})
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>

              <div className="divider"></div>

              {/* Price Range */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <h4 className="label-sm text-primary mb-4">Price Range</h4>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="700"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-accent"
                  />
                  <p className="body-sm text-gray-dark">
                    Up to ${priceRange}
                  </p>
                </div>
              </motion.div>

              <div className="divider"></div>

              {/* Size Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="label-sm text-primary mb-4">Size</h4>
                <div className="grid grid-cols-3 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      className="aspect-square border border-gray hover:border-primary transition-colors flex items-center justify-center text-sm font-medium hover:bg-light"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </motion.div>

              <div className="divider"></div>

              {/* Color Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <h4 className="label-sm text-primary mb-4">Color</h4>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { name: 'Black', color: '#1A1A1A' },
                    { name: 'White', color: '#F9F8F5' },
                    { name: 'Navy', color: '#1a3a52' },
                    { name: 'Camel', color: '#C9B5A0' },
                  ].map((item) => (
                    <button
                      key={item.name}
                      className="aspect-square rounded-full border-2 border-gray hover:border-primary transition-all"
                      style={{ backgroundColor: item.color }}
                      title={item.name}
                    ></button>
                  ))}
                </div>
              </motion.div>

              {/* Reset Button */}
              <motion.button
                className="w-full btn-secondary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedCategory('All');
                  setSortBy('featured');
                  setPriceRange(500);
                }}
              >
                Reset Filters
              </motion.button>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="col-span-1 lg:col-span-3">
            {/* Top Bar */}
            <motion.div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-gray"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <p className="body-sm text-gray-dark">
                  Showing {filteredProducts.length} results
                </p>
                <button
                  className="lg:hidden btn-secondary text-sm px-4 py-2"
                  onClick={() => setShowFilters(true)}
                >
                  Filters
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent bg-white"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </motion.div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <motion.div
                className="grid-products"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredProducts.map((product) => (
                  <motion.div key={product.id} variants={itemVariants}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="body-lg text-gray-dark mb-4">
                  No products found with current filters.
                </p>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSortBy('featured');
                    setPriceRange(500);
                  }}
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <motion.section
          className="border-t border-gray py-8 md:py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="container-max flex justify-center items-center gap-2">
            <button className="btn-secondary px-4 py-2 text-sm">← Previous</button>
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`w-10 h-10 flex items-center justify-center font-medium transition-all ${
                  num === 1
                    ? 'bg-primary text-white'
                    : 'border border-gray hover:border-primary'
                }`}
              >
                {num}
              </button>
            ))}
            <button className="btn-secondary px-4 py-2 text-sm">Next →</button>
          </div>
        </motion.section>
      )}
    </div>
  );
};

export default Shop;