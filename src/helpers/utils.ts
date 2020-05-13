export const isDate = (val: any): val is Date => {
  return Object.prototype.toString.call(val) === '[object Date]'
}

// export const isObject = (val: any): val is Object => {
//   return val !== null && typeof val === 'object'
// }

export const isPlainObject = (val: any): val is Object => {
  return Object.prototype.toString.call(val) === '[object Object]'
}
