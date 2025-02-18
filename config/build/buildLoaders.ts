import { RuleSetRule } from 'webpack'
import { IBuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'

export function buildLoaders({isDev}: IBuildOptions): RuleSetRule[] {

  const svgLoader = buildSvgLoader()

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