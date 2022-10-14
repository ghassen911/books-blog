import BlogList from "./BlogList";
import useFetch from "./useFetch";
import BlogDetails from "./BlogDeatils";

const Home = () => {    
    const {data: blogs , isPending, error} = useFetch ('http://localhost:8000/blogs');

    return (
        <div className="Home">
            {error && <div>{error} </div>}
            {isPending && <div>loading... </div> }

           {blogs && <  BlogList blogs={blogs} title='all blogs' />}

        </div>
    );
}

export default Home;