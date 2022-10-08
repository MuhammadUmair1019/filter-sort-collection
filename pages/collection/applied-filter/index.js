import React from 'react'
import Chip from '../../../components/chip';

function CategoryChip(props) {
  const { item, onChangeCategory } = props;

  return <Chip label={item} onDelete={() => onChangeCategory(item, false)} />;
}

function PriceChip(props) {
  const { selectedPrice, onChangePrice } = props;

  return <Chip label={`Price: ${selectedPrice.min}-${selectedPrice.max}`} onDelete={() => onChangePrice('', '', true)} />;
}

function RatingChip(props) {
  const { selectedRating, onChangeRating } = props;

  return <Chip label={`Rating: ${selectedRating} ${selectedRating == 5 ? '' : '& Up'}`} onDelete={() => onChangeRating('clear')} />;
}


const AppliedFilter = (props) => {
  const {
    selectedCategory,
    onChangeCategory,
    selectedPrice,
    onChangePrice,
    selectedRating,
    onChangeRating,
    onClearAll
  } = props;


  let isAnyFilter = selectedCategory.length
    + (selectedPrice.isApplied ? 1 : 0)
    + (selectedRating ? 1 : 0)

  if (!isAnyFilter)
    return null

  return (
    <div class="flex flex-wrap items-center space-x-2">
      <span> Filtered By: </span>
      {/* <span
          class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
          Text
        </span> */}
      {!!selectedCategory.length && selectedCategory.map(item => (
        <CategoryChip
          key={item}
          item={item}
          onChangeCategory={onChangeCategory}
        />
      ))}
      {selectedPrice.isApplied && (
        <PriceChip
          selectedPrice={selectedPrice}
          onChangePrice={onChangePrice}
        />
      )}
      {selectedRating && (
        <RatingChip
          selectedRating={selectedRating}
          onChangeRating={onChangeRating}
        />
      )}
      {isAnyFilter && (
        <Chip
          label="clear all"
          onDelete={onClearAll}
        />
      )}
    </div>
  )
}

export default AppliedFilter