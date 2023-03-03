import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Depoimentos() {
    return (
        <>
            <h2 style={{ color: "white" }} className='mt-3'>Feedbacks</h2>
            <Row className='mt-3'>
                <Col sm="12" md="2" className='text-center'>
                    <img src=".\src\img\Pedro-Raul-2.jpeg" alt="Foto do depoimento" className='rounded' />
                </Col>
                <Col sm="12" md="10">
                    <strong style={{ color: "white" }}>Pedro Raul</strong>
                    <p style={{ color: "white" }}>
                        "Excelente! Acabei de meter 3 gols no Flamengo.<br />
                        Agora posso achar uma opção de sobremesa perto de casa e pagando barato, depois de jantar o Flamengo."
                    </p>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col sm="12" md="2" className='text-center'>
                    <img src=".\src\img\elon.jpg" alt="Foto do depoimento 2" className='rounded' />
                </Col>
                <Col sm="12" md="10">
                    <strong style={{ color: "white" }}>Elon Musk</strong>
                    <p style={{ color: "white" }}>
                        "Estou louco para comprar o FoodBairro.<br />
                        Finalmente uma opção que ajude o proprietário de verdade! Agora vou comprar, monetizar a ideia e direi que é meu."
                    </p>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col sm="12" md="2" className='text-center'>
                    <img src=".\src\img\andre.jpeg" alt="Foto do depoimento 2" className='rounded' />
                </Col>
                <Col sm="12" md="10">
                    <strong style={{ color: "white" }}>André Rocha</strong>
                    <p style={{ color: "white" }}>
                        "Agora posso comprar perto de casa e barato.<br />
                        Tenho diversas opções perto de casa e não sabia. Graças ao FoodBairro, agora eu sei."
                    </p>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col sm="12" md="2" className='text-center'>
                    <img src=".\src\img\jordan.jpg" alt="Foto do depoimento 2" className='rounded' />
                </Col>
                <Col sm="12" md="10">
                    <strong style={{ color: "white" }}>Michael B. Jordan - Proprietário</strong>
                    <p style={{ color: "white" }}>
                        "Agora posso cadastrar meu trailer, sem pagar as taxas dos app.<br />
                        Posso alavancar meu negócio no bairro sem ser refém de taxas abusivas dos app de comida."
                    </p>
                </Col>
            </Row>
        </>
    )
}

export default Depoimentos