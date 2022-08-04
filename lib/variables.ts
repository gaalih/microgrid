export type BatteryData = {
  current: number
  current_output: number
  est_soc: number
  frequency: number
  max_temp: number
  meas_soc: number
  pactive: number
  preactive: number
  soc_data: {
    estimated: number
    measured: number
    timestamp: string
  }[]
  total_voltage: number
  volt_output: number
}

export type GridData = {
  current: number
  frequency: number
  pactive: number
  preactive: number
  voltage: number
}

export type LoadData = {
  current: number
  electricity_load: {
    estimated: number
    measured: number
    timestamp: string
  }[]
  frequency: number
  pf: number
  voltage: number
}

export type PVData = {
  frequency: number
  iac: number
  idc: number
  pac: number
  pv_production: {
    estimated: number
    measured: number
    timestamp: string
  }[]
  vac: number
  vdc: number
}

export type WeatherStationData = {
  irradiance: number
  temperature: number
  wind_speed: number
  humidity: number
}

export type Data = {
  battery: BatteryData
  grid: GridData
  load: LoadData
  pv: PVData
  weather_station: WeatherStationData
}

export type Label = { name: string; unit?: string }

export const batteryLabel = {
  current: { name: 'Current', unit: 'A' },
  current_output: { name: 'Curr. Output', unit: 'A' },
  est_soc: { name: 'Est. SoC', unit: '%' },
  frequency: { name: 'Frequency', unit: 'Hz' },
  max_temp: { name: 'Max. Temp', unit: '&deg;C' },
  meas_soc: { name: 'Meas. SoC', unit: '%' },
  pactive: { name: 'P. Active', unit: 'kW' },
  preactive: { name: 'P. Reactive', unit: 'kVar' },
  total_voltage: { name: 'Tot. Voltage', unit: 'V' },
  volt_output: { name: 'Volt. Output', unit: 'V' },
}

export const gridLabel = {
  current: { name: 'Current', unit: 'A' },
  frequency: { name: 'Frequency', unit: 'Hz' },
  pactive: { name: 'P. Active', unit: 'kW' },
  preactive: { name: 'P. Reactive', unit: 'kVar' },
  voltage: { name: 'Voltage', unit: 'V' },
}

export const loadLabel = {
  current: { name: 'Current', unit: 'A' },
  frequency: { name: 'Frequency', unit: 'Hz' },
  pf: { name: 'PF' },
  voltage: { name: 'Voltage', unit: 'V' },
}

export const pvLabel = {
  frequency: { name: 'Frequency', unit: 'Hz' },
  iac: { name: 'I<sub>ac</sup>', unit: 'A' },
  idc: { name: 'I<sub>dc</sup>', unit: 'A' },
  pac: { name: 'P<sub>ac</sup>', unit: 'kW' },
  vac: { name: 'V<sub>ac</sup>', unit: 'V' },
  vdc: { name: 'V<sub>dc</sup>', unit: 'V' },
}

export const weatherStationLabel = {
  irradiance: { name: 'Irradiance', unit: 'W/m<sup>2</sup>' },
  temperature: { name: 'Temperature', unit: '&deg;C' },
  wind_speed: { name: 'Wind Speed', unit: 'mph' },
  humidity: { name: 'Humidity', unit: '%' },
}
