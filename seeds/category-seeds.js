const { Category } = require('../models');

const categoryData = [
  {
    category_names: 'Shirts',
  },
  {
    category_names: 'Shorts',
  },
  {
    category_names: 'Music',
  },
  {
    category_names: 'Hats',
  },
  {
    category_names: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
