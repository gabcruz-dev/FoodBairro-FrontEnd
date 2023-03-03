import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'
import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'

function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect (() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    return (
            <div style={{ backgroundImage: "url(/img/3.png)", backgroundSize:"cover" }}>

        <Container className='conteudo-margin'>
        <br /> <br /> <br />
            <h1 style={{ paddingTop: "20px", textAlign: "center", color:"white" }}>SOBRE NÓS:</h1>
            <h3 style={{textAlign:"center", color:"white"}}>
Somos uma empresa que dá sugestões de onde comer fast-food.
Ficar na dúvida de onde comer é mais comum do que se imagina, pois a gastronomia no bairro é praticamente uma atração à parte. Até mesmo quem frequenta e conhece bem o local passa por esse dilema. <br />
Para ajudar a montar seu roteiro de lanches bons e baratos no bairro, elaboramos esse aplicativo, FoodBairro, com referência de ótimos estabelecimentos para lanchar.
            </h3> <br />
            
            <img style={{ paddingLeft: "100px" }} src="img/food.jpg" alt="" /> <br /> <br />
            <h1 style={{ paddingTop: "20px", textAlign: "center", color:"white" }}>MISSÃO:</h1>
            <h3 style={{textAlign:"center", color:"white"}}>
Visamos  
facilitar o dia a dia e cotidiano das pessoas, a fim de evitar que gastem dinheiro com comidas não tão boas. Ainda mais com a vida corrida, que não nos dá muito tempo para pesquisar e ler avaliações de bons lugares em nossos bairros.
<br /> 
            </h3>
            <h1 style={{ paddingTop: "20px", textAlign: "center", color:"white" }}>VISÃO:</h1>
            <h3 style={{textAlign:"center", color:"white"}}>
Disponibilizar às pessoas locais para comer de excelente qualidade, a qualquer momento, em qualquer local e em qualquer dispositivo, a fim de que tenha uma boa alimentação, gastando pouco.
<br /> <br />
<h1>VALORES:</h1>
<h3>
Ética, qualidade, responsabilidade e determinação. </h3> <br /> </h3>
            
            
            <Depoimentos />
            </Container>
            </div>
    );
}

export default Sobre