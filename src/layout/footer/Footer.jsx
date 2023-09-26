import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Created by Martina Shebova</p>
    </footer>
  );
}

export default Footer;
