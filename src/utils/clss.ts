type Tclasses = (Record<string, boolean | string> | string)[]

export const clss = (...classes: Tclasses): string => {
  return classes
    .filter(cls => typeof cls === 'object' ? Object.values(cls)[0] : cls)
    .map(cls => typeof cls === 'object' ? Object.keys(cls)[0] : cls)
    .join(' ')
}