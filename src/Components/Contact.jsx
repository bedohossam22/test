import image from "../Assets/knife2.png";

import { useState } from "react";

export default function Contact() {
  const [submit, setSubmit] = useState(false);
  const [empty , setempty] = useState(false);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const inputs = document.querySelectorAll('input');
    let isAllInputsFilled = true;
  
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        isAllInputsFilled = false;
        return;
      }
    });
  
    if (isAllInputsFilled) {
      setSubmit(true);
      setempty(false);
  
      fetch('./form-handler.php', {
        method: 'POST',
        body: new FormData(event.target)
      });
    } else {
      setSubmit(false);
      setempty(true);
    }
  };

  return (
    <>
      <h2 className="free">Please feel Free to share your <span>Critics</span></h2>
      <div className="contact" id="contact">
        <div className="elfinaly">
          <h1>Contact me</h1>
          <p>The form is only for display For now atleast.</p>
          <form  method="post">
            <input placeholder="YourName" name="name"  />
            <input placeholder="Subject" name="subject"  />
            <textarea  placeholder="message" className="last" name="message"></textarea>
            <div className="flex">
              <button type="submit" onClick={handleFormSubmit}>Submit</button>
              {submit && <p className="form-endo">Received!</p> }
              {empty && <p className="form-endo aa">Fill all please</p> }
            </div>
          </form>
        </div>
        <img src={image} alt="penguing" />
      </div>
    </>
  );
}