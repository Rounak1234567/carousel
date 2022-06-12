import Carousel from "nuka-carousel"
import ecom2 from "../../images/ecom2.webp"
import ecom3 from "../../images/ecom3.webp"
import ecom4 from "../../images/ecom4.jpg"
import ecom5 from "../../images/ecom5.jpg"
import "./slider.css"
const Slider = () => {
    return (
        <div className = "cclass">
            <Carousel autoplay={true} autoplayInterval={3000} animation={"zoom"} zoomScale={0.5} dragging={true} wrapAround={true} >
                <img src={ecom2} />
                <img src={ecom4} />
                <img src={ecom3} />
                <img src={ecom5} />
            </Carousel>
        </div>
    )
}


export { Slider }