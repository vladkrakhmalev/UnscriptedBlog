import '../../../app/styles/index.scss'
import { Decorator } from '@storybook/react/*'
import { clss } from '../clss'
import { Theme } from '../theme/themeContext'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
  <div className={clss('app', theme)} style={{padding: 20, borderRadius: 10}}>
    <Story/>
  </div>
)