import { useState } from "react"
import useMessage from "../Hooks/useMessage"

export default function Forms() {
    const { loading, SendMessage } = useMessage();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    function Message(event) {
        event.preventDefault();
        SendMessage(userData);
        setUserData({ name: "", email: "", subject: "", message: "" })
    }
    return (
        <section id="contact" className="contact section">
            <div className="container section-title" data-aos="fade-up">
                <span>Contact</span>
                <h2>Contact</h2>
                <p>For any inquiries or further information, please do not hesitate to contact us. Our team will respond to your request as promptly as possible.</p>
            </div>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <form method="post" className="node-email-form" data-aos="fade-up"
                            data-aos-delay="200" onSubmit={Message}>
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <label htmlFor="name-field" className="pb-2">Your Name</label>
                                    <input type="text" name="name" id="name-field" className="form-control" value={userData.name} onChange={e => setUserData({ ...userData, name: e.target.value })} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email-field" className="pb-2">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email-field" value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} required />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="subject-field" className="pb-2">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject-field" value={userData.subject} onChange={e => setUserData({ ...userData, subject: e.target.value })} required />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="message-field" className="pb-2">Message</label>
                                    <textarea className="form-control" name="message" rows="10" id="message-field" value={userData.message} onChange={e => setUserData({ ...userData, message: e.target.value })} required></textarea>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type="submit">{loading ? "loading..." : "Send Message"}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
