export function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function shortenProduct(product) {
    const newString = product.replace(/(Headphones|Earphones|Speakers|Wireless|Speaker)/gmi, '');
    const secondString = newString.replace(/Mark/gmi, 'MK');
    return secondString;
}
