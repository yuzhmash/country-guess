import Navbar from "../navbar/Navbar";
import Guess from "../guess/Guess";
import ListOfCountries from "../listOfCountries/ListOfCountries";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";


const App = () => {

    return (
        <>
            <Navbar/>
            {/* <ErrorBoundary>
                <Guess/>
            </ErrorBoundary> */}
            <ErrorBoundary>
                <ListOfCountries/>
            </ErrorBoundary>
        </>
    )
}


export default App;