import { products as DBproducts } from "../data/products";


const getFilterData = (
  data,
  selectedCategory,
  selectedPriceRange,
  selectedRating
) => {
  return data.filter((product) => {
    // category filter
    let categoryMatch = true
    if (selectedCategory.length && product.category)
      categoryMatch = selectedCategory.includes(product.category)

    // price filter
    let priceMatch = true
    let { min, max, isApplied } = selectedPriceRange
    if (isApplied && product.price)
      priceMatch = product.price >= min && product.price <= max;

    // rating filter
    let ratingMatch = true
    if (selectedRating && product.rating)
      ratingMatch = product.rating >= selectedRating

    return categoryMatch && priceMatch && ratingMatch;
  })
}


const getSortData = (data, sortBy) => {
  return data.sort((product1, product2) => {
    if (sortBy === "PriceHighToLow") {
      return product1.price > product2.price ? -1 : 1;
    } else if (sortBy === "PriceLowToHigh") {
      return product1.price < product2.price ? -1 : 1;
    } else if (sortBy === "RatingLowToHigh") {
      return product1.rating < product2.rating ? -1 : 1;
    } else {
      // default 'RatingHighToLow'
      return product1.rating > product2.rating ? -1 : 1;
    }
  });
};


export const getVisibleProduct = (selectedCategory, selectedPrice, selectedRating, sortBy) => {
  let products = DBproducts

  if (
    selectedCategory.length ||
    selectedPrice.isApplied ||
    selectedRating
  )
    products = getFilterData(
      products,
      selectedCategory,
      selectedPrice,
      selectedRating
    )

  products = getSortData(products, sortBy);


  const total = products.length
  return { products, total }
}


// Find Price Range (min-max)
const findRange = () => {
  let min = DBproducts[0].price;
  let max = 0;
  DBproducts.forEach((product) => {
    if (product.price < min) min = product.price;
    if (product.price > max) max = product.price;
  });
  return { min, max };
};

export const priceRange = findRange();
