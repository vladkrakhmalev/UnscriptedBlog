export type BuildModeType = 'production' | 'development'

export interface IBuildPaths {
  entry: string
  build: string
  html: string
}

export interface IBuildEnv {
  mode: BuildModeType
  port: number
}

export interface IBuildOptions {
  mode: BuildModeType
  paths: IBuildPaths
  isDev: boolean
  port: number
}