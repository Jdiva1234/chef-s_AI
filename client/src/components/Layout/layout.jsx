import Footer from '../../components/Footer/footer';
import PropTypes from 'prop-types';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { ComplexNavbar } from '../navBar/complexNavbar';

const Layout = ({ children, title }) => {
  useDocumentTitle(title);

  return (
    <>
      <ComplexNavbar />
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
