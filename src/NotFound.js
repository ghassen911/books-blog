import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
        <h2>sorry</h2>
        <p>the page is not found</p>
        <Link to="/">homepage ...</Link>
        </div>
     );
}
 
export default NotFound;