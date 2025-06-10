
export default function Company_Services({ Image, Service_Name, Service_Info }) {
    return (
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
                <div className="icon">
                    <img src={Image} className="custom-img"></img>
                </div>
                <h3>{Service_Name}</h3>
                <p>{Service_Info}</p>
            </div>
        </div>
    )
}
