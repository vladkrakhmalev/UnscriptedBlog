import path from 'path'
import { Configuration, RuleSetRule } from 'webpack'
import { buildCssLoader } from 'config/build/loaders/buildCssLoader'
import { buildSvgLoader } from 'config/build/loaders/buildSvgLoader'

interface IProps {
  config: Configuration
}

export default ({ config }: IProps) => {
  config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'))
  config.resolve.extensions.push('.ts', '.tsx')

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string))
      return {...rule, exclude: /\.svg$/}

    return rule
  })

  config.module.rules.push(
    buildCssLoader(true),
    buildSvgLoader(),
  )

  return config
}