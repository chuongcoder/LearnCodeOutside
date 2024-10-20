export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents: 0
}, {
    id: '2',
    deliveryDays: 3,
    priceCents: 499
}, {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}]; 

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;

    // tim id delivery ma user chon trong list id delivery trong deliveryOptions 
    deliveryOptions.forEach((option) => {
      if (option.id === deliveryOptionId) {
        deliveryOption = option;
      }
    });

    // neu ko co lay mac dinh 
    return deliveryOption || deliveryOptions[0];
}