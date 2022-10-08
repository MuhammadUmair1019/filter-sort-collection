
import React from 'react'

const sortOptions = [
  { value: "RatingHighToLow", title: "Rating High to Low" },
  { value: "RatingLowToHigh", title: "Rating Low to High" },
  { value: "PriceHighToLow", title: "Price High to Low" },
  { value: "PriceLowToHigh", title: "Price Low to High" },
];

const SortComponent = ({ sortBy, setSortBy }) => {
  return (
    <select
      className='bg-transparent border outline-none mx-6'
      value={sortBy || "PriceHighToLow"}
      onChange={(e) => setSortBy(e.target.value)}
    >
      {sortOptions.map((item) => (
        <option className='bg-[#161616]' value={item.value}>
          {item.title}
        </option>
      ))}
    </select>
  )
}

export default SortComponent