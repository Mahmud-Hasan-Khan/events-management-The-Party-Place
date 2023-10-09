import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PreviousArrow = (props) => (
    <button {...props} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-transparent text-white px-4 py-2 rounded-full">
        <p>❮</p>
    </button>
);

const NextArrow = (props) => (
    <button {...props} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-transparent text-white px-4 py-2 rounded-full">
        <p>❯</p>
    </button>
);

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000, slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PreviousArrow />,
        nextArrow: <NextArrow />,
    };

    const slides = [
        {
            image: 'https://i.ibb.co/cxQrTpB/984-Weddings-Primrose-Courtyard-Night-Barbara-Kraft.png',
            text: 'WEDDING PLANING',
        },
        {
            image: 'https://i.ibb.co/J3jG6nh/Weddings-Lavender-Salon-V4-Desktop.png',
            text: 'ANNIVERSARY PARTY',
        },
        {
            image: 'https://i.ibb.co/qs2QmV8/Fairy-theme-with-carnival-carousel-horses-aicaevents1.jpg',
            text: 'BIRTHDAY PARTY',
        },
    ];

    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index} className="relative">
                    <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-[200px] lg:h-[428px]" />
                    <div className="absolute inset-0 bg-black opacity-10" />
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-2xl lg:text-4xl font-bold">{slide.text}</div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Banner;