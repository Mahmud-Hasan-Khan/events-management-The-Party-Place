import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const [foundDetails, setFoundDetails] = useState({});
    const { id } = useParams();

    // load data from Json file
    const serviceDetails = useLoaderData();
    // console.log(serviceDetails);

    // get specific data id wise
    useEffect(() => {
        const findDetails = serviceDetails?.find(getDetails => getDetails.id == id);
        setFoundDetails(findDetails)
    }, [id, serviceDetails]);

    console.log(foundDetails);

    if (!foundDetails || !foundDetails.details) {
        // Handle the case where foundDetails or details is undefined
        return <div>Loading...</div>;
    }

    const { name, description, price, image, } = foundDetails;

    // Destructure details object
    const { duration, capacity, included_services } = foundDetails.details;

    return (
        <div className="card lg:card-side bg-base-100 border border-orange-100 items-center gap-6 rounded-none">
            <figure><img className="object-cover w-[650px] h-[500px] " src={image} alt="Album" /></figure>
            <div className="space-y-4 my-auto">
                <h2 className="text-xl lg:text-4xl font-medium">{name} </h2>
                <p className="text-xl ">{description} </p>
                <p className="text-xl font-semibold">Price : <small className="text-base">{price}</small></p>

                <p className="text-xl font-semibold">Duration : <small className="text-base">{duration}</small></p>

                <p className="text-xl font-semibold">Capacity : <small className="text-base">{capacity}</small></p>
                <p className="text-xl font-semibold">Included Services:</p>
                <ul className="pl-8">
                    {included_services.map((service, index) => (
                        <li className="list-disc" key={index}>{service}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServiceDetails;