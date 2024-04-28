import Footer from '../../components/Footer/footer';
import PropTypes from 'prop-types';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Navbar from '../navBar/navbar';

const Layout = ({ children, title }) => {
  useDocumentTitle(title);

  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
