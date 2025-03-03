import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
const AppLayout = () => {

    return ( 
        <div className="container  m-auto grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Header />
             <Main />
            <Footer />   
        </div>
    )
}

export default AppLayout