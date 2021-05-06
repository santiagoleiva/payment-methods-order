/*
{
    "condition": {
        "cardType": "credit",
        "isFavorite": true
    },
    "order": 1
}
*/

const shallowEqual = (object1, object2) =>{
  const keys1 = Object.keys(object1);
  const diff = keys1.find(it => object1[it] !== object2[it]);
  return diff === undefined;
};

const conditions = [
  {
    "condition": {
      "isFavorite": true
    },
    "order": 1
  },
  {
    "condition": {
      "cardType": "sva"
    },
    "order": 2
  }
];
//const conditions = undefined;

const getOrder = (method) => {
  const condition = (conditions || []).find(it => shallowEqual(it.condition, method));
  return condition ? condition.order : 999;
};

test("Sort payment method by condition", () => {

    const paymentMethods = [
        {
            id: "1",
            cardType: "credit",
            onUs: false,
            onThem: false,
            isFavorite: false
        },
        {
            id: "2",
            cardType: "debit",
            onUs: true,
            onThem: false,
            isFavorite: false
        },
        {
            id: "3",
            cardType: "credit",
            onUs: true,
            onThem: false,
            isFavorite: true
        },
        {
            id: "4",
            cardType: "sva",
            onUs: false,
            onThem: false,
            isFavorite: false
        }
    ];

    //patmentMethods.map
    const newPayments = paymentMethods.map(it => ({ ...it, order: getOrder(it)}));
    newPayments.sort((first, second) => first.order - second.order);

    expect(newPayments[0].id).toBe("3");
    expect(newPayments[1].id).toBe("4");
    expect(newPayments[2].id).toBe("1");
    expect(newPayments[3].id).toBe("2");


});
