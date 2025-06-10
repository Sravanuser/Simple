import StatsComponent from "../Components/PureCounter"
import Company_Services from "../Components/Company_Services"
import Forms from '../Components/Forms'

export default function Home() {
    return (
        <main className="main">
            <section id="hero" className="hero section">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
                            <h1>Elegant and creative solutions</h1>
                            <p>We are team of talented professionals providing IT solutions</p>
                            <div className="d-flex">
                                <a href="#about" className="btn-get-started">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="100">
                            <img src="/hero-img.png" className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about section">
                <div className="container section-title" data-aos="fade-up">
                    <span>About Us<br /></span>
                    <h2>About</h2>
                    <p>we believe in innovation, collaboration, and delivering excellence. Our team is dedicated to crafting
                        solutions that make a difference—whether it's building seamless digital experiences.</p>
                </div>
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="100">
                            <img src="/about.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
                            <h3>With Expertise across Various Domains.</h3>
                            <p className="fst-italic">
                                Our team combines technical expertise with industry insight to deliver results that drive success and
                                innovation.
                            </p>
                            <ul>
                                <li><i className="bi bi-check2-all"></i> <span>Custom software solutions tailored to meet unique business
                                    needs.</span>
                                </li>
                                <li><i className="bi bi-check2-all"></i> <span>Robust security protocols ensuring data protection at every
                                    level.</span></li>
                                <li><i className="bi bi-check2-all"></i> <span>Scalable architectures that grow with your organization.</span>
                                </li>
                            </ul>
                            <p>
                                End-to-end development support from ideation to deployment and maintenance
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="stats" className="stats section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        <StatsComponent start={"0"} end={"232"} duration={"1"} name={"Client"} />
                        <StatsComponent start={"0"} end={"521"} duration={"1"} name={"Projects"} />
                        <StatsComponent start={"0"} end={"1453"} duration={"1"} name={"Hours of Support"} />
                        <StatsComponent start={"0"} end={"32"} duration={"1"} name={"Workers"} />
                    </div>
                </div>
            </section>
            <section id="services" className="services section light-background">
                <div className="container section-title" data-aos="fade-up">
                    <span>Services</span>
                    <h2>Services</h2>
                    <p>We offer a comprehensive range of professional services designed to meet the evolving needs of our clients
                        across various industries.</p>
                </div>
                <div className="container">
                    <div className="row gy-4">
                        <Company_Services Image={"https://img.icons8.com/color/96/000000/source-code.png"} Service_Name={"Frontend Development"} Service_Info={"We design and develop sleek, responsive user interfaces using the latest web technologies. Our focus is on user experience, performance, and modern design trends."} />
                        <Company_Services Image={"https://img.icons8.com/color/96/000000/server.png"} Service_Name={"Backend Development"} Service_Info={"We build robust and scalable server-side solutions tailored to your business needs. From APIs to databases, we ensure secure and seamless data management."} />
                        <Company_Services Image={"https://img.icons8.com/color/96/000000/combo-chart.png"} Service_Name={"Data Analyst"} Service_Info={"We help you uncover patterns and insights from your data to guide decision-making. Visual dashboards and in-depth reports make your data work for you."} />
                        <Company_Services Image={"https://img.icons8.com/color/96/000000/data-configuration.png"} Service_Name={"Data Engineer"} Service_Info={"We design scalable data architectures and pipelines for real-time and batch processing. Enable advanced analytics and AI with clean, well-organized data systems."} />
                        <Company_Services Image={"./devops.svg"} Service_Name={"DevOps"} Service_Info={"We streamline your development lifecycle with automation, CI/CD, and cloud integration. Faster deployments, better monitoring, and reliable infrastructure — all in one."} />
                        <Company_Services Image={"https://img.icons8.com/color/96/000000/sap.png"} Service_Name={"SAP"} Service_Info={"We provide end-to-end SAP consulting, implementation, and support services. Optimize operations and drive efficiency with customized SAP solutions."} />
                    </div>
                </div>
            </section>
            <Forms />
        </main>
    )
}
