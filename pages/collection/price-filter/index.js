import React from 'react'
import MultiRangeSlider from '../../../components/multi-range-slider'
import { priceRange } from '../../../services/product-queries'

const PriceFilter = ({ initPriceRange, onChangePrice, isClear }) => {

  return (
    <div className='h-20 p-5 py-8 space-y-2 bg-[#1B1B1B] rounded-md'>
      <MultiRangeSlider
        min={priceRange.min}
        max={priceRange.max}
        initPirceRange={initPriceRange}
        isClear={isClear}
        onChange={({ min, max }) => onChangePrice(min, max)}
      />
    </div>
  )
}

export default PriceFilter