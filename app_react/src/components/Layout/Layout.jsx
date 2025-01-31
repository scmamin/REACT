import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";
import PropTypes, { string } from "prop-types";

export default function Layout({ children, className }) {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  className: string,
};
