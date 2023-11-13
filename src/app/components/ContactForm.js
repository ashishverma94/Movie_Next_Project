'use client'
import styles from '@/app/contacts/contact.module.css';
import { Mulish } from "next/font/google";
import { useState } from 'react';
const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})


const ContactForm = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: "",
    })

    const [status, setStatus] = useState(null);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method:'POST',
                headers:{"Content_Type":"application/json"},
                body: JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                })
            })
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }

        }catch (e) {
            console.log(e)
        }


    }

    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter Your Name:
                    <input type="text" name="username" id="username"
                        placeholder='Enter Your name'
                        value={user.username}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        className={mulish.className} />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Enter Your Email:
                    <input type="text" name="email" id="email"
                        placeholder='Enter Your Email'
                        value={user.email}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        className={mulish.className} />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Enter Your Phone :
                    <input type="number" name="phone" id="phone"
                        placeholder='Enter Your Phone '
                        value={user.phone}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        className={mulish.className} />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message:
                    <textarea type="text" name="message" id="message"
                        placeholder='Enter Your Message'
                        rows={5}
                        value={user.message}
                        onChange={handleChange}
                        autoComplete="off"
                        className={mulish.className} />
                </label>
            </div>

            <div >

                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error while submitting form.</p>}
                <button type="submit" className={mulish.className}>Send Message</button>
            </div>
        </form>
    )
}

export default ContactForm;