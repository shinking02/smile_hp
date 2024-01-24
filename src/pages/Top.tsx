import { Link } from "react-router-dom";

const Top: React.FC = () => {
  return (
    <div className="App">
      <p>This is Top Page</p>
      <Link to="/">
        <p>To Top Page</p>
      </Link>
    </div>
  );
};

export default Top;
