import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      fixed="bottom"
      style={{ width: '100%', height: '50px', marginTop: 15 }}></Navbar>
  );
}

export default Footer;
