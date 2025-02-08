import { FC } from 'react';
import './PageLoader.scss'
import { Loader } from '../../../shared/ui/loader';

export const PageLoader: FC = () => {

  return (
    <div className='page-loader'>
      <Loader size={5}/>
    </div>
  );
};
