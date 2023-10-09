import Marquee from "react-fast-marquee";

const PopularEvent = () => {
    return (
        <div>
            <h2 className="text-2xl lg:text-5xl font-medium text-center">OUR POPULAR EVENT ITEMS</h2>
            <div className="my-4">
                <Marquee pauseOnHover>
                    <div className="bg-white mx-10">
                        <img src="https://i.ibb.co/HrSkYLH/palko.png" alt="" />
                        <h3 className="text-center text-black text-xl font-semibold">PALKI</h3>
                    </div>
                    <div className="bg-white mx-10">
                        <img src="https://i.ibb.co/2dX8KSD/palki.png" alt="" />
                        <h3 className="text-center text-black text-xl font-semibold">LED SCREEN</h3>
                    </div>
                    <div className="bg-white mx-8">
                        <img className="mx-auto" src="https://i.ibb.co/PNVSrnR/light.png" alt="" />
                        <h3 className="text-center text-black text-xl font-semibold  mx-auto">LIGHTING SYSTEM</h3>
                    </div>
                    <div className="bg-white mx-8">
                        <img className="mx-auto" src="https://i.ibb.co/tmW1gMk/birth.png" alt="" />
                        <h3 className="text-center text-black text-xl font-semibold  mx-auto">BIRTHDAY PARTY</h3>
                    </div>
                    <div className="bg-white mx-8">
                        <img className="mx-auto" src="https://i.ibb.co/6vhfhyj/band.png" alt="" />
                        <h3 className="text-center text-black text-xl font-semibold  mx-auto">BAND PARTY</h3>
                    </div>
                    <div className="bg-white mx-8">
                        <img className="mx-auto" src="https://i.ibb.co/ZTWvgs2/projector.png" alt="" />
                        <h3 className="text-center text-black text-xl font-semibold  mx-auto uppercase ">Projector Rent</h3>
                    </div>
                </Marquee>
            </div>

        </div >
    );
};


export default PopularEvent;