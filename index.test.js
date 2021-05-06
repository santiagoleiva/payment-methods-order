/*
{
    "condition": {
        "cardType": "credit",
        "isFavorite": true
    },
    "order": 1
}
*/

test("Sort payment method by condition", () => {
    const conditions = [
        {
            "condition": {
                "cardType": "credit",
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

    paymentMethods.sort()
});
