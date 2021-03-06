exports.Category = {
  // * how to use categoryId query 
  products: ({ id: categoryId }, { filter }, { db }) => {
    const categoryProducts = db.products.filter(
      (product) => product.categoryId === categoryId
    );
    let filteredCategoryProducts = categoryProducts;
    // filter products that are on Sale
    if (filter) {
      if (filter.onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => {
            return product.onSale;
          }
        );
      }
    }

    return filteredCategoryProducts;
  },
};
