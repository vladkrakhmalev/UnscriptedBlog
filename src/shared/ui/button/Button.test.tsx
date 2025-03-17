import { render, screen } from "@testing-library/react"
import { Button } from "./Button"
import SunIcon from '../../../shared/assets/icons/sun.svg' 

describe('Button', () => {
  test('test render', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('test with icon', () => {
    render(<Button icon={<SunIcon/>}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('_icon')
  })

  test('test secondary', () => {
    render(<Button variant="secondary">TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('_secondary')
  })
})