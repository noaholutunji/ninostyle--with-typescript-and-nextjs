import AddProductPage from '../src/containers/AddProduct/AddProduct';
import { authInitialProps } from '../src/lib/auth';

const AddProduct = () => {
  return (
    <>
      <AddProductPage />
    </>
  );
};

AddProduct.getInitialProps = authInitialProps(true, '/login');

export default AddProduct;
