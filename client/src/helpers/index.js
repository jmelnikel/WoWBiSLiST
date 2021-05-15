const reformatBaseData = (resultsArray) => {

  let reformattedResultsArray = []
  for (let array of resultsArray) {
    let reformattedArray = []
    for (let itemObject of array) {
      let reformattedDataObject = {};
      const { data } = itemObject;
      const { id } = data;
      const name = data.name.en_US;
      const item_class = data.item_class.name.en_US;
      const item_subclass = data.item_subclass.name.en_US;
      const inventory_type = data.inventory_type.name ? data.inventory_type.name.en_US : data.inventory_type.type;

      reformattedDataObject = { id, name, item_class, item_subclass, inventory_type };
      reformattedArray.push(reformattedDataObject);
    }
    reformattedResultsArray.push(reformattedArray);
  }
  return reformattedResultsArray.flat();
};

export default reformatBaseData;