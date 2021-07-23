import { Details } from "../Components/Landing/Details"
import { Slide } from "../Components/Landing/Slide"
import { Types } from "../Components/Landing/Variety"


function Home() {
    return(
        <div>
            <Slide/>
            <Types/>
            <Details/>
            {/* <Slide/>
            <Var/>
            <Details/>
            <Footer/> */}
        </div>
    )
}

export {Home}