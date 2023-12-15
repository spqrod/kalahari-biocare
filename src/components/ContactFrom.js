import "../styles/contactForm.css";

export default function ContactForm({isDarkVariant}) {

    let formClassName;
    if (isDarkVariant)
        formClassName = "contactForm dark";
    else
        formClassName = "contactForm";

    return (
        <form className={formClassName} action="">
            <div className="fieldsContainer">
                <div className="labelAndInputContainer">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" />
                </div>
                <div className="labelAndInputContainer">
                    <label htmlFor="name">Email:</label>
                    <input type="email" id="email" />
                </div>
                <div className="labelAndInputContainer">
                    <label htmlFor="name">Phone:</label>
                    <input type="tel" id="phone" />
                </div>
                <div className="labelAndInputContainer">
                    <label htmlFor="name">Message:</label>
                    <input type="text" id="message" />
                </div>
            </div>
            <button className="button">Contact Us</button>
        </form>
    );
}