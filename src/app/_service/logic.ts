export const handleSortingIngredients = (query: any[]): any[] => {
  const orderedQuery = query.sort((a, b) =>
    a.strIngredient1.localeCompare(b.strIngredient1)
  );
  return orderedQuery;
};

export const handleSortingSearchDrink = (query: any[]): any[] => {
  const orderedQuery = query.sort((a, b) =>
    a.idDrink.localeCompare(b.idDrink)
  );
  return orderedQuery;
};
