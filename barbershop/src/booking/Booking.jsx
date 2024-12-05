import react from "react";


export function Booking(){
    const Services = [{
        "id" : 1,
        "service_name" : "Short Haircut",
        "price" : 20
    },
    {
        "id" : 2,
        "service_name" : "Long Haircut",
        "price" : 30
    },
    {
        "id" : 3,
        "service_name" : "Buzz Cut",
        "price" : 15
    },
    {
        "id" : 4,
        "service_name" : "Partial Head Shave",
        "price" : 15
    }
]
function shoppingCart(){
    return(
        <div className="container">

        </div>
    )
}
    return(
        <div className="container">
           <div className="row">
            <h1>Book your appointment here</h1>
        </div>
        <div className="row">
            <h2>Our services:</h2>
            <select name="" id="">
                {
                    Services.map((service)=>(
                        <option value={service.service_name}>{service.service_name}</option>
                    ))
                }
            </select>
        </div>
    </div>

    )

}