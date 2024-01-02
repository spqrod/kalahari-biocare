import "../styles/notFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="notFoundPage">
            <section className="notFoundSection">
                <h1>404 Error</h1>
                <p>
                    This Page Does Not Exist. <br></br>
                    Please return to the <Link to="/">home page</Link>.
                </p>
            </section>
        </main>

    );
}