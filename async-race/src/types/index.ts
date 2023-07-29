export interface ICarInput {
  name: string,
  color: string
}

export interface ICarOutput extends ICarInput {
  id: number
}

export interface IWinnerInput {
  time: number,
  wins: number
}

export interface IWinnerOutput extends IWinnerInput {
  id: number | string
}

export interface IWinnerCar extends IWinnerOutput, ICarInput {}

export interface IEngineInfo {
  velocity: number,
  distance: number
}
