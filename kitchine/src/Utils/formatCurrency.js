const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "BDT",
    style: "currency",
  })
  
  export function formatCurrency(num) {
    return CURRENCY_FORMATTER.format(num)
  }
  