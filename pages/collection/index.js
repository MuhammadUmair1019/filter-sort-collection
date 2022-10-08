import React, { useState } from 'react'
import ProductCard from '../../components/product-card'
import { getVisibleProduct, priceRange } from '../../services/product-queries'
import AppliedFilter from './applied-filter'
import CategoryFilter from './category-filter'
import PriceFilter from './price-filter'
import RatingFilter from './rating-filter'
import SortComponent from './sort-component'

const initPriceFilter = {
  min: priceRange.min,
  max: priceRange.max,
  isApplied: false
};

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState([])
  const [selectedPrice, setSelectedPrice] = useState(initPriceFilter)
  const [selectedRating, setSelectedRating] = useState('')
  const [initPriceRange, setInitPriceRange] = useState(initPriceFilter)
  const [sortBy, setSortBy] = useState("")
  const [isClear, setIsClear] = useState(false)

  const onChangeCategory = (category, isChecked) => {
    isChecked
      ? setSelectedCategory((prevCategory) => [...prevCategory, category])
      : setSelectedCategory(
        selectedCategory.filter(
          (cat) => cat !== category
        )
      )
  }

  const onChangePrice = (min, max, isClear) => {
    if (isClear) {
      setSelectedPrice(initPriceFilter)
      setInitPriceRange(initPriceFilter)
      setIsClear(true)
      return
    };

    if (
      min === priceRange.min &&
      max === priceRange.max
    )
      return setSelectedPrice(initPriceFilter)

    setSelectedPrice({
      min,
      max,
      isApplied: true
    })
    setIsClear(false)
  }

  const onChangeRatingHandler = rating => {
    if (rating === "clear") return setSelectedRating("");

    setSelectedRating(rating);
  };

  const onClearAllHandler = () => {
    setSelectedCategory([])
    setSelectedPrice(initPriceFilter)
    setInitPriceRange(initPriceFilter)
    setSelectedRating('')
    setIsClear(true)
  }

  const { products, total } = getVisibleProduct(selectedCategory, selectedPrice, selectedRating, sortBy)

  return (
    <div className='grid grid-cols-12 h-full gap-3 text-[#d9d9d9] px-5'>
      <div className='col-span-2 space-y-4 px-2 mt-5'>
        <CategoryFilter
          selectedCategory={selectedCategory}
          onChangeCategory={onChangeCategory}
        />
        <PriceFilter
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          initPriceRange={initPriceRange}
          onChangePrice={onChangePrice}
          isClear={isClear}
        />
        <RatingFilter
          onChangeRating={onChangeRatingHandler}
          selectedRating={selectedRating}
        />
      </div>
      <div className='col-span-10 pt-3'>
        <div className='grid grid-cols-12 items-center'>
          <div className='col-span-10'>
            <AppliedFilter
              selectedCategory={selectedCategory}
              onChangeCategory={onChangeCategory}
              selectedPrice={selectedPrice}
              onChangePrice={onChangePrice}
              selectedRating={selectedRating}
              onChangeRating={onChangeRatingHandler}
              onClearAll={onClearAllHandler}
            />
          </div>
          <div className='col-span-2'>
            <SortComponent
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
        </div>
        <div className='border-b py-1'></div>
        <div className='grid grid-cols-12 gap-4 mt-4'>
          {products.map((product) => (
            <div
              key={product.id}
              className='col-span-3'
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection