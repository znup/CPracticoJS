const calculatePriceDiscount = (price, discount) => {
  const percentageDiscountPrice = 100 - discount;
  const discountPrice = (price * percentageDiscountPrice) / 100;
  return discountPrice;
};
// console.log('first discount: ' + calculatePriceDiscount(425, 15));

// const buttonDiscount = () => {
function buttonDiscount() {
  const inputCant = document.getElementById('InputCant');
  const cantValue = inputCant.value;
  const inputPercentage = document.getElementById('InputPercentage');
  const percentageValue = inputPercentage.value;

  const discountPrice = calculatePriceDiscount(cantValue, percentageValue);

  const showResult = document.getElementById('ShowResult');
  showResult.innerHTML = 'El resultado es: ' + discountPrice;
}
