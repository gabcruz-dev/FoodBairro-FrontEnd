import {Container, Button, Form} from 'react-bootstrap'
import Depoimentos from '../components/Depoimentos'

function Contato() {

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Mensagem enviada com sucesso!')
        event.target.reset()
    }

    return (
        <div style={{ backgroundImage: "url(/img/3.png)", backgroundSize:"cover" }}>
        <Container className='conteudo-margin'>

            <br /> <br /> <br />
            <h1 style={{textAlign:"center", color:"white"}}>Contato</h1>
            <h4 style={{textAlign:"center", color:"white"}}>Entre em contato conosco</h4>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Nome">
                    <Form.Label style={{color:"white"}}>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome completo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label style={{color:"white"}}>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Mensagem">
                    <Form.Label style={{color:"white"}}>Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                      <Button variant="danger">Enviar</Button>{' '}

            </Form>

            <Depoimentos />
            </Container>
            </div>
    );
}

export default Contato;