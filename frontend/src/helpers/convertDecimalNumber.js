export const convertDecimalNumber = (number) => {
  const numeroDecimal = new Intl.NumberFormat('es-ar')
  return numeroDecimal.format(number)
}