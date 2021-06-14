import CheckOutPage from '../src/containers/CheckOut/CheckOut';
import { authInitialProps } from '../src/lib/auth';

const CheckOut = () => {
  return (
    <>
      <CheckOutPage />
    </>
  );
};

CheckOut.getInitialProps = authInitialProps(true, '/login');

export default CheckOut;
