import React from 'react';
import './ContactPage.css'

const ContactPage = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "7f19bb8f-a0ff-4075-9a18-bc403aa9da43");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};    

  return (
    <div className="contact-page">
      <header>
        <h1>Contact Us</h1>
      </header>

      <main>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: theoryofnumbers123@gmail.com</p>
          <p>Phone: +91 96177 20842</p>
          <p>Address: Shop 1, street 4, Smriti-Nagar, Bhilai, Chhattisgarh, 490020</p>
        </div>

        <div className="feedback-form">
          <h2>Feedback Form</h2>
          <form onSubmit={onSubmit}>
                  
                      <label>Name:</label>
                      <input type="text" name="name" required/>
                  
                  
                      <label>Email:</label>
                      <input type="email" name="email" required/>
                  
                  
                      <label>Feedback:</label>
                      <textarea name="message" required></textarea>
                  
                  <button type="submit">Submit</button>
              </form>
              <span>{result}</span>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
