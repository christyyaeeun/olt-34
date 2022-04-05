import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Auth } from "aws-amplify";
import Posts from "../components/Posts";

const Home = () => {

  useEffect(() => {
    checkUser(); // new function call

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user:", user);
    console.log("user attributes: ", user.attributes);
  }

    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />
  <Posts />
            <Link to="/lounge">Go to the Lounge</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
       
        </section>
    )
}

export default Home