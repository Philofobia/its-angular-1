export const handleSortingIngredients = (query: any[]): any[] => {
  const orderedQuery = query.sort((a, b) => {
    if (a.strIngredient1 < b.strIngredient1) {
      return -1;
    }
    if (a.strIngredient1 > b.strIngredient1) {
      return 1;
    }
    return 0;
  });
  return orderedQuery;
};

export const handleSortingSearchDrink = (query: any[]): any[] => {
    const orderedQuery = query.sort((a, b) => {
      if (a.strDrink < b.strDrink) {
        return -1;
      }
      if (a.strDrink > b.strDrink) {
        return 1;
      }
      return 0;
    });
    return orderedQuery;
  };
  