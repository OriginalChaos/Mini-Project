import React from 'react';
import './EnquiryForm.css';

export default function EnquiryForm() {
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
        <div className="enquiry-form">
            <h2>Enquiry Form</h2>
            <form onSubmit={onSubmit}>
                
                    <label>Name:</label>
                    <input type="text" name="name" required/>
                
                
                    <label>Email:</label>
                    <input type="email" name="email" required/>
                
                
                    <label>Product Codes:</label>
                    <textarea name="message" required></textarea>
                
                <button type="submit">Submit</button>
            </form>
            <span>{result}</span>
        </div>
    );
};

