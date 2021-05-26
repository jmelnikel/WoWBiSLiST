const reformatBaseData = (resultsArray) => {

  let reformattedResultsArray = []
  for (let array of resultsArray) {
    let reformattedArray = []
    for (let itemObject of array) {
      let reformattedDataObject = {};
      const { data, key } = itemObject;
      const { id } = data;
      const name = data.name.en_US;
      const quality = data.quality.type
      const level = data.level;
      const required_level = data.required_level;
      const item_class = data.item_class.name.en_US;
      const item_subclass = data.item_subclass.name.en_US;
      const inventory_type = data.inventory_type.type;
      const href = key.href

      reformattedDataObject = { id, name, quality, level, required_level, item_class, item_subclass, inventory_type, href };

      reformattedArray.push(reformattedDataObject);
    }
    reformattedResultsArray.push(reformattedArray);
  }
  return reformattedResultsArray.flat();
};

export default reformatBaseData;