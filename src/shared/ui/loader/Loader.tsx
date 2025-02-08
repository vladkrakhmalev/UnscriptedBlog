import { FC } from 'react';
import './Loader.scss'

interface IProps {
  size?: number
}

export const Loader: FC<IProps> = ({ size = 1.5 }) => {

  const styleObj = {
    width: size * 10,
    height: size * 10,
    borderWidth: size * 1.5,
  }

  return (
    <div
      className='loader'
      style={styleObj}
    ></div>
  )
};
