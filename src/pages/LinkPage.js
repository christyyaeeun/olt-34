

    import { Link } from "react-router-dom"

    const LinkPage = () => {
        return (
            <section>
                <br />

                <Link to="/journal">Journal</Link>
                <br />
                <Link to="/">Home</Link>
                <br />
                <Link to="/Tasks">Tasks Page</Link>
                <br />
                <Link to="/profile">Profile Page</Link>
                <br />

                <Link to="/Themes">Activity Page</Link>
            </section>
        )
    }
    
    export default LinkPage

