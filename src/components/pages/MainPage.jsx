import {Helmet} from "react-helmet"

import Guess from "../guess/Guess";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const MainPage = () => {
    return (
        <>
        <Helmet>
            <meta name="description" content="Guessing countries" />
            <title>Guessing countries</title>
        </Helmet>
        <ErrorBoundary>
            <Guess/>
        </ErrorBoundary>
        </>
    )
}

export default MainPage;