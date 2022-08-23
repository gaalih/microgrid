import { Data } from './variables'

export function classNames(classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function displayVariable(value: number, unit?: string) {
  const separator = unit === '%' ? '' : ' '
  if (unit) {
    return [value, separator, unit].join('')
  }
  return [value, separator].join('')
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export async function fetchData() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL!)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = (await response.json()) as Data
  return data
}
