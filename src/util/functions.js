
export const getChunks = (arr, len) => {
  let i = 0;
  const n = arr.length;
  const chunks = [];

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }

  return chunks;
};

export const addItemToCard = async (card, productId) => {
  let updatedCard = card;

  if (card.length === 0) {
    updatedCard.push({
      productId,
      qty: 1,
    })
    return updatedCard;
  } else {

    for (let i = 0; i < updatedCard.length; i++) {
      if (updatedCard[i].productId === productId) {
        const index = updatedCard.indexOf(updatedCard[i]);
        updatedCard[index] = {
          ...updatedCard[i],
          qty: updatedCard[i].qty + 1,
        }
        return updatedCard;
      }
    }

    for (let i = 0; i < updatedCard.length; i++) {
      if (updatedCard[i].productId !== productId) {
        updatedCard.push({
          productId,
          qty: 1,
        })
        return updatedCard;
      }
    }
  }

};

export const removeItemToCard = async (card, productId) => {
  let updatedCard = card;

  if (card.length === 0) {
    return updatedCard;
  } else {
    for (let i = 0; i < updatedCard.length; i++) {
      if (updatedCard[i].productId === productId) {
        if (updatedCard[i].qty > 1) {

          const index = updatedCard.indexOf(updatedCard[i]);
          updatedCard[index] = {
            ...updatedCard[i],
            qty: updatedCard[i].qty - 1,
          }
          return updatedCard;
        } else {
          return updatedCard.filter((item) => item.productId !== updatedCard[i].productId)
        }
      }
    }

    return updatedCard;
  }

};


// STEPS
// 1) Check if card length is 0 than add a item.
// 2) If productId is not present in card then add the the card.
// 3) Check if card already contain productId.
// 4) If productId is present in card than increment the qty property.