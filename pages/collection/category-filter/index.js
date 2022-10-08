import React from 'react'
import Checkbox from '../../../components/checkbox'
import { categoryTitle } from '../../../data/category'

const CategoryFilter = ({ selectedCategory, onChangeCategory }) => {
  return (
    <div className='h-42 p-5 space-y-2 bg-[#1B1B1B] rounded-md'>
      {categoryTitle.map((category) => (
        <Checkbox
          key={category}
          text={category}
          checked={selectedCategory.includes(category)}
          onChange={(e) => onChangeCategory(category, e.target.checked)}
        />
      ))}
    </div>
  )
}

export default CategoryFilter