import React from 'react';

// Shared Framer Motion animation helpers.
// Used by pages like About.jsx and Contact.jsx.

export const fadeInUp = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  variants: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
};

export const slideInLeft = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  variants: {
    hidden: { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
};

export const slideInRight = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  variants: {
    hidden: { opacity: 0, x: 24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.15,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

