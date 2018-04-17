export function crop(str, length){
  if(str.length > length){
    return str.substr(0, length) + '...'
  }
  return str
}