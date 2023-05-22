const checkValueInArray = (value: string, array: string[]): boolean => {
  return array.includes(value)
}

export const verifyLowercase = (checkboxs: string[]) => {
  if (checkValueInArray('LOWERCASE', checkboxs)) {
    return true
  } else {
    return false
  }
}

export const verifyUppercase = (checkboxs: string[]) => {
  if (checkValueInArray('UPPERCASE', checkboxs)) {
    return true
  } else {
    return false
  }
}

export const verifyNumbers = (checkboxs: string[]) => {
  if (checkValueInArray('NUMBERS', checkboxs)) {
    return true
  } else {
    return false
  }
}

export const verifySymbols = (checkboxs: string[]) => {
  if (checkValueInArray('SYMBOLS', checkboxs)) {
    return true
  } else {
    return false
  }
}
