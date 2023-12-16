import "../styles/contactForm.css";

export default function ContactForm({isDarkVariant}) {


    const api = {
        sendEmail(data) {
            const fetchURL = "/api/email";
            const fetchOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
            console.log(fetchOptions.body);
            return fetch(fetchURL, fetchOptions)
                .then(res => res.json());
        }
    }

    const controller = {
        handleSubmit: async function(e) {
            e.preventDefault();
            // const captchaToken = captchaRef.current.getValue();
            // captchaRef.current.reset();
            const { name, email, phone, message } = e.target.elements;
            
            const formData = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                message: message.value
            }
            
            controller.sendEmail(formData);
        },

        sendEmail(formData) {
            // controller.setDialogTextForMessageResult("Sending message...");
            // display.showDialog();
            api.sendEmail({ ...formData })
                .then((response) => {
                    // display.resetFormAfterSubmit();
                    // display.makeButtonInactive();
                    // controller.updateDialogTextWithMessageResult(response.success);
                    console.log("success");
                }).catch(error => console.log(error));
        },
        setDialogTextForMessageResult() {

        }
    }

    const display = {
        showDialog() {

        },
    }

    let formClassName;
    if (isDarkVariant)
        formClassName = "contactForm dark";
    else
        formClassName = "contactForm";

    return (
        <form className={formClassName} onSubmit = {controller.handleSubmit} action="">
            <div className="fieldsContainer">
                <div className="labelAndInputContainer">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="labelAndInputContainer">
                    <label htmlFor="name">Email:</label>
                    <input type="email" id="email" name="email"/>
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