import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer>
      <p>&copy; {currentYear} Created by Martina Shebova</p>
    </footer>
  );
}

export default Footer;
