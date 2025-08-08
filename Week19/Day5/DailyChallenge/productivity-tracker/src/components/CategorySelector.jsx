import React from 'react';
import { useSelector } from 'react-redux';

const CategorySelector = ({ selectedCategory, onChange }) => {
  const categories = useSelector((state) => state.categories);

  return (
    <select value={selectedCategory} onChange={(e) => onChange(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map(cat => (
        <option key={cat.id} value={cat.id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;