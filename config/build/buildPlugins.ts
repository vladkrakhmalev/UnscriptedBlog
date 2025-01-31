import path from 'path'
import webpack, { WebpackPluginInstance } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { IBuildOptions } from './types/config'

export function buildPlugins({paths}: IBuildOptions): WebpackPluginInstance[] {
  
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ]
}