export default function formatCurrency(number) {
  let lira = Intl.NumberFormat("tr-tr", {
    style: "currency",
    currency: "try",
    maximumSignificantDigits: 3,
  }).format(number);
  return lira;
}
