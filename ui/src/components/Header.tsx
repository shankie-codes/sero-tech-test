import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Shankie's Curry Club 🍛😋</h1>
      </Link>
    </div>
  );
};

export default Header;
