import { useState } from "react"

export function Form() {
    const [formData, setFormData] = useState("");


    if(formData.length > 2) {
      return
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="enter your name" onChange={(e) => setFormData(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    );
}