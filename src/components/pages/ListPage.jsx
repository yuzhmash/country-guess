import {Helmet} from "react-helmet"


import ListOfCountries from "../listOfCountries/ListOfCountries";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const ListPage = () => {
    return (
        <>
        <Helmet>
            <meta name="description" content="Page with list of countries" />
            <title>List of Countries</title>
        </Helmet>
        <ErrorBoundary>
            <ListOfCountries/>
        </ErrorBoundary>
        </>
    )
}


export default ListPage;