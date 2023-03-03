import Carousel from 'react-bootstrap/Carousel'


function Banners() {
    return (
        <Carousel variant="dark" className='conteudo-margin'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=".\src\img\porquin.png"
                    alt="Slide incrível"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=".\src\img\food.png"
                    alt="Outro slide incrível"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=".\src\img\comunidade.png"
                    alt="Último slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Banners