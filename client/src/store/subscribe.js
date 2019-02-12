export const subscribeToItemCreatedAndUpdated = (subscription) => {
  return (prev, { subscriptionData }) => {
    const nextItem = subscriptionData.data[subscription];
    if (!subscriptionData.data || !nextItem) return prev;
    const prevItem = prev.getItems.filter((item) => item.id !== nextItem.id)
      return Object.assign({}, prev, {
        getItems: [nextItem, ...prevItem],
    });
  }
}

export const subscribeToUserChanges = () => {
  return (prev, { subscriptionData }) => {
    if (!subscriptionData.data) return prev;
    const prevUser = prev.findUser
      return Object.assign({}, prev, {
        findUser: prevUser,
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