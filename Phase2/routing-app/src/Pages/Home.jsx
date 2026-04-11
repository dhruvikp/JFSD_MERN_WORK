import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div>
        <h1>Hi This is Home page...</h1>    
        <Link to="/products">Products</Link>
    </div>
  );
}

export default HomePage;