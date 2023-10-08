import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                setServiceData(data)
            })
    }, []);
    console.log(serviceData);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {serviceData.map(services => <ServicesCard services={services} key={services.id} ></ServicesCard>)}
        </div>
    );
};

export default Services;