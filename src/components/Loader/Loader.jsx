import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

const Loading = () => {
  return (
    <div className={s.container}>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loading;
