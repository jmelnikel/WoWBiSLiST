const getItemId = (resultsArray) => {
  const reformattedBaseData = []
  for (let array of resultsArray) {
    array = array.map((itemObject) => {
      let reformattedArray = []
      const { data } = itemObject;

      reformattedArray["id"] = data.id
      reformattedArray["name"] = data.name.en_US
      reformattedArray["quality"] = data.quality.type
      reformattedArray["level"] = data.level
      reformattedArray["required_level"] = data.required_level
      reformattedArray["item_class"] = data.item_class.name.en_US
      reformattedArray["item_subclass"] = data.item_subclass.name.en_US
      reformattedArray["inventory_type"] = data.inventory_type.type

      return reformattedArray;
    })
    reformattedBaseData.push(array)
  }
  return reformattedBaseData;
};

export default getItemId;