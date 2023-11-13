import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from './contact.module.css';
import ContactForm from '../components/ContactForm';

function Page() {
  return (
    <>
      <div className={styles.container}>
        <h1> Contact Us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>We&apos;d love to hear <span>from you</span></h2>
          <ContactForm />
        </section>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4877.9750577483155!2d80.99165477722191!3d27.48854169434318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshankarganj%20Biswan%2C%20sitapur!5e0!3m2!1sen!2sin!4v1699676484699!5m2!1sen!2sin"
        width={'100%'}
        height={400}
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

    </>
  )
}

export default Page