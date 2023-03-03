import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src=".\src\img\mobile (1).jpg" />
                    <Card.Body>
                        <Card.Title>Fácil de usar</Card.Title>
                        <Card.Text>
                            O FoodBairro é muito fácil de usar, bastar inserir seu bairro e pronto! 
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Acessar FoodBairro</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src=".\src\img\money.jpg" />
                    <Card.Body>
                        <Card.Title>Economize</Card.Title>
                        <Card.Text>
                            Pague mais barato em sua comida, sem adição de taxas de serviço!
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">Conheça mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src=".\src\img\suport.jpg" />
                    <Card.Body>
                        <Card.Title>Suporte ao Estabelecimento</Card.Title>
                        <Card.Text>
                            Inserção de novos restaurantes e suporte aos já inseridos, fale conosco.
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;