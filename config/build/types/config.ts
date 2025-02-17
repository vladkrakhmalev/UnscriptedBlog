export type BuildModeType = 'production' | 'development'

export interface IBuildPaths {
  entry?: string
  build?: string
  html?: string
  src?: string
}

export interface IBuildEnv {
  mode: BuildModeType
  port: number
  isAnalyze: boolean
}

export interface IBuildOptions {
  mode: BuildModeType
  paths: IBuildPaths
  isDev: boolean
  port: number
  isAnalyze: boolean
}