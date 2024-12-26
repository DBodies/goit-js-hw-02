function getShippingCost(country) {
    let China = 100
    let Chile = 250
    let Australia = 170
    let Jamaica = 120
switch (country) {
    case "China":
        return `Shipping to China will cost ${China} credits`
    case "Chile":
        return `Shipping to Chile will cost ${Chile} credits`
    case "Australia":
        return `Shipping to Australia will cost ${Australia} credits`
    case "Jamaica":
        return `Shipping to Jamaica will cost ${Jamaica} credits`
    default:
        return "Sorry, there is no delivery to your country"
}
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"