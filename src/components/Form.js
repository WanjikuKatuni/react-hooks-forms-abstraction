// import React, { useState } from "react";

// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Henry");

//   function handleFirstNameChange(event) {
//     setFirstName(event.target.value);
//   }

//   function handleLastNameChange(event) {
//     setLastName(event.target.value);
//   }

//   return (
//     <form>
//       <input type="text" onChange={handleFirstNameChange} value={firstName} />
//       <input type="text" onChange={handleLastNameChange} value={lastName} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;

// import React, { useState } from "react";

// function Form(){
//   const [formData, setFormData] = useState({
//     firstName:"John",
//     lastName:"Henry",
//   })

//   function handleFirstNameChange(event){
//     setFormData({
//       ...formData, firstName: event.target.value,
//     })
//   }

//   function handleLastNameChange(event){
//     setFormData({
//       ...formData, lastName: event.target.value,
//     })
//   }

//   return (
//     <form>
//       <input 
//       type="text"
//       onChange ={handleFirstNameChange}
//       value={formData.firstName}
//       />
//       <input 
//       type="text"
//       onChange={handleLastNameChange}
//       value={formData.lastName}
//       />
//     </form>
//   )
// }

// export default Form;



// import React, { useState } from "react";

// function Form(){
//   const [formData, setFormData] = useState({
//     firstName:"John",
//     lastName:"Henry",
//   })

//   function handleChange(event){
//     const name = event.target.name;
//     const value = event.target.value;


//     setFormData({
//       ...formData, [name]: value,
//     })
//   }

//   return (
//     <form>
//       <input 
//       type="text"
//       name="firstname"
//       onChange ={handleChange}
//       value={formData.firstName}
//       />
//       <input 
//       type="text"
//       name="lastname"
//       onChange={handleChange}
//       value={formData.lastName}
//       />
//     </form>
//   )
// }

// export default Form;


// for checkboxes
import React, { useState } from "react";

function Form(){
  const [formData, setFormData] = useState({
    firstName:"John",
    lastName:"Henry",
    admin: false,
  })

  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    // check chekbox property

    if(event.target.type === "checkbox"){
      value = event.target.checked;
    }

    setFormData({
      ...formData, [name]: value,
    })
  }

  return (
    <form>
      <input 
      type="text"
      name="firstname"
      onChange ={handleChange}
      value={formData.firstName}
      />
      <input 
      type="text"
      name="lastname"
      onChange={handleChange}
      value={formData.lastName}
      />
      <input 
      type="checkbox"
      name="admin"
      onChange={handleChange}
      checked={formData.admin}
      />

    <button type="submit">Submit</button>
    </form>
  )
}

export default Form;