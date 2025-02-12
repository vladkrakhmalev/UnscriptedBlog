import { RuleSetRule } from 'webpack'
import { IBuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'

export function buildLoaders({isDev}: IBuildOptions): RuleSetRule[] {

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const cssLoader = buildCssLoader(isDev)

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    tsLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ]
}