import '../../App.css'
import HeroSection from '../HeroSection'
import Services from '../Services'
import Cards from '../Cards'
import Footer from '../Footer'
import History from '../History'

function Home () {
    return (
        <>
            <HeroSection/>
            <Services />
            <History/>
            <Cards />
            <Footer />
        </>
    )
}

export default Home;    