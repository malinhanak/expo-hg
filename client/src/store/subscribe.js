export const subscribeToItemCreatedAndUpdated = (subscription) => {
  return (prev, { subscriptionData }) => {
    if (!subscriptionData.data) return prev;
    const nextItem = subscriptionData.data[subscription];
    const prevItem = prev.getItems.filter((item) => item.id !== nextItem.id)
      return Object.assign({}, prev, {
        getItems: [nextItem, ...prevItem]
    });
  }
}

export const subscribeToItemDeleted = (subscription) => {
  return (prev, { subscriptionData }) => {
    if (!subscriptionData.data) return prev;
    const itemList = prev.getItems.filter((item) => item.id !== subscriptionData.data[subscription].id)
    return Object.assign({}, prev, {
      getItems: [...itemList]
    });
  }
}