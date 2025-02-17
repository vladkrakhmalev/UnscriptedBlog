import path from 'path'
import { Configuration } from 'webpack'
import { buildCssLoader } from 'config/build/loaders/buildCssLoader'

interface IProps {
  config: Configuration
}

export default ({ config }: IProps) => {
  config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'))
  config.resolve.extensions.push('.ts', '.tsx')
  config.module.rules.push(
    buildCssLoader(true)
  )

  return config
}