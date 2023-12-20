import "../styles/contactForm.css";
import { useRef, useState } from "react";

export default function ContactForm() {

    const [statusText, setStatusText] = useState("");
    
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
            return fetch(fetchURL, fetchOptions)
                .then(res => res.json())
                .then(res => {
                    if (res.success) return true
                });
        }
    }

    const controller = {
        handleSubmit: async function(e) {
            e.preventDefault();
            // const captchaToken = captchaRef.current.getValue();
            // captchaRef.current.reset();
            const { name, email, phone, formMessage } = e.target.elements;
            
            const formData = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                formMessage: formMessage.value
            }
            
            display.switchFormForStatusText();
            setStatusText("Sending message...");
            controller.sendEmail(formData)
                .then(success => {
                    if (success) 
                        setStatusText("Thank you for your message! We'll get back soon.");
                    else 
                        setStatusText("Error sending your message. Please contact us through other means. We are sorry for the inconvenience.");
                })
        },

        sendEmail(formData) {
            return api.sendEmail({ ...formData })
                .catch(error => console.log(error));
        },
    }

    const display = {
        switchFormForStatusText() {
            const fieldsContainer = document.querySelector(".contactForm .fieldsContainer");
            fieldsContainer.classList.toggle("hidden");
            const button = document.querySelector(".contactForm .button");
            button.classList.toggle("hidden");
            const statusText = document.querySelector(".contactForm .statusText");
            statusText.classList.toggle("hidden");
        },
    }

    return (
        <form className={"contactForm"} onSubmit = {controller.handleSubmit} action="">
            <div className="fieldsContainer">
                <div className="labelAndInputContainer">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" />
                </div>
                <div className="labelAndInputContainer">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" />
                </div>
                <div className="labelAndInputContainer">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" />
                </div>
                <div className="labelAndInputContainer">
                    <label htmlFor="formMessage">Message:</label>
                    <input type="text" id="formMessage" />
                </div>
            </div>
            <button className="button">Contact Us</button>
            <p className="statusText hidden">{statusText}</p>
        </form>
    );
}