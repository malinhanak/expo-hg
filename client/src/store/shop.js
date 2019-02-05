export const getItemCategory = (item) => {
  let category = '';
  switch(item.category) {
    case 'RIDER_GEAR':
      category = 'Ryttarutrustning'
      break;
    case 'HORSE':
      category = 'Häst'
      break;
    case 'HORSE_GEAR':
      category = 'Hästutrustning'
      break;
    default:
      category = 'Övrigt'
  }
  return category
}