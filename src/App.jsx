import { Container } from "./assets/components/Container"
import { Score } from "./assets/components/Score"
import { Summary } from "./assets/components/Summary"

function App() { 
    return (
        <div className="min-h-screen lg:grid lg:place-items-center bg-(--color-paleBlue)">
            <Container>
               <Score></Score>
               <Summary></Summary> 
            </Container>
        </div>
    )
}

export default App
