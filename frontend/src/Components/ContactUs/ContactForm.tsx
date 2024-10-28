// import React, { useState } from 'react';
// import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// import { IoIosSend } from "react-icons/io";

// const ContactForm: React.FC = () => {

//     const [budget, setBudget] = useState('');

//     const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//       setBudget(event.target.value as string);
//     };



//   return (
//       <div className="grid grid-flow-row grid-cols-1 m-[10%] gap-[3%]
//                 md:grid-flow-col md:grid-cols-2 md:m-[5%] md:mt-[5%]
//       ">

//         <div className="grid grid-flow-row order-last
//                         md:order-first
//                         ">

//           <p className="h-[7vh] text-3xl
//                         md:h-[13vh] md:text-5xl">
//             Let’s get started
//           </p>

//           <form className="space-y-4">
//             <TextField
//               fullWidth
//               label="Name"
//               variant="outlined"
//             />
//             <TextField
//               fullWidth
//               label="Your email"
//               variant="outlined"
//               type="email"
//             />
//             <TextField
//               fullWidth
//               label="Phone number"
//               variant="outlined"
//               type="tel"
//             />
//             <FormControl fullWidth>
//               <InputLabel id="budget-select-label">What’s your budget?</InputLabel>
//               <Select
//                 labelId="budget-select-label"
//                 id="budget-select"
//                 value={budget}
//                 label="What’s your budget?"
//                 onChange={handleChange}
//                 style={{
//                   backgroundColor: 'var(--bg)'
//                 }}
//               >
//                 <MenuItem value={1000}
//                   style={{
//                     backgroundColor: 'var(--bg)'
//                   }}
//                 >less than $1,000</MenuItem>
//                 <MenuItem value={2000}
//                   style={{
//                     backgroundColor: 'var(--bg)'
//                   }}
//                 >$1,000 - $3,000</MenuItem>
//                 <MenuItem value={3000}
//                   style={{
//                     backgroundColor: 'var(--bg)'
//                   }}
//                 >$3,000 - $5,000</MenuItem>
//                 <MenuItem value={'other'}
//                   style={{
//                     backgroundColor: 'var(--bg)'
//                   }}
//                 >other</MenuItem>
//               </Select>
//             </FormControl>

//             <TextField
//               fullWidth
//               label="Tell us a little about your project"
//               multiline
//               rows={4}
//               variant="outlined"
//             />
//             <Button variant="contained"
//               endIcon={<IoIosSend />}
//               style={{
//                 backgroundColor: 'var(--blue)',
//                 color: 'var(--grey)'
//               }}
//             >
//               Send
//             </Button>
//           </form>
//         </div>


//         <div className="grid grid-flow-row">
//           <h3 className="h-[13vh] font-[100] text-3xl">
//             Got a concept? <br />
//             Let’s develop it <span style={{ color: "var(--pink)" }}>together</span>.
//           </h3>
//           <div style={{
//               backgroundImage: 'url(public/images/contactus.jpg)'
//             }}
//             className="w-full h-[150px] bg-cover bg-center
//                       md:h-[465px]
//             "
//           >
//           </div>
//         </div>

//       </div>


//   );
// };

// export default ContactForm;

import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Snackbar, Alert } from '@mui/material';
import { IoIosSend } from "react-icons/io";

interface FormData {
  name: string;
  email: string;
  phone: string;
  budget: string;
  moreInfo: string;
}

interface FormDataErrors {
  name: string;
  email: string;
  phone: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    budget: "",
    moreInfo: "",
  });

  const [errors, setErrors] = useState<FormDataErrors>({
    name: "",
    email: "",
    phone: "",
  });

  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: unknown; } }) => {
    const { name, value } = 'target' in event ? event.target : event;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = {
      name: "",
      email: "",
      phone: "",
    };

    // Validate form fields
    if (!formData.name) {
      formErrors.name = "Name is required";
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
    }

    if (!formData.phone) {
      formErrors.phone = "Phone is required";
    }

    setErrors(formErrors);

    if (!formErrors.name && !formErrors.email && !formErrors.phone) {
      try {
        const response = await fetch(`http://localhost:3000/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form submitted successfully");

          // Clear the form fields
          setFormData({
            name: "",
            email: "",
            phone: "",
            budget: "", // Reset budget value
            moreInfo: "",
          });

          // Show success notification
          setNotificationOpen(true);
        } else {
          console.error("Form submission failed");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  return (
    <div className="grid grid-flow-row grid-cols-1 m-[10%] gap-[3%] md:grid-flow-col md:grid-cols-2 md:m-[5%] md:mt-[5%]">
      {/* Left Side: Form Section */}
      <div className="grid grid-flow-row order-last md:order-first">
        <p className="h-[7vh] text-3xl md:h-[13vh] md:text-5xl">Let’s get started</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            variant="outlined"
            error={Boolean(errors.name)}
            helperText={errors.name}
          />

          {/* Email Field */}
          <TextField
            fullWidth
            label="Your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            variant="outlined"
            type="email"
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          {/* Phone Field */}
          <TextField
            fullWidth
            label="Phone number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            variant="outlined"
            type="tel"
            error={Boolean(errors.phone)}
            helperText={errors.phone}
          />

          {/* Budget Field */}
          <FormControl fullWidth>
            <InputLabel id="budget-select-label">What’s your budget?</InputLabel>
            <Select
              labelId="budget-select-label"
              id="budget-select"
              value={formData.budget}
              name="budget"
              label="What’s your budget?"
              onChange={handleInputChange}
              style={{ backgroundColor: 'var(--bg)' }}
            >
              <MenuItem value="">Select a Budget</MenuItem>
              <MenuItem value={1000}>less than $1,000</MenuItem>
              <MenuItem value={2000}>$1,000 - $3,000</MenuItem>
              <MenuItem value={3000}>$3,000 - $5,000</MenuItem>
              <MenuItem value="other">other</MenuItem>
            </Select>
          </FormControl>

          {/* More Information Field */}
          <TextField
            fullWidth
            label="Tell us a little about your project"
            name="moreInfo"
            value={formData.moreInfo}
            onChange={handleInputChange}
            multiline
            rows={4}
            variant="outlined"
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            endIcon={<IoIosSend />}
            style={{ backgroundColor: 'var(--blue)', color: 'var(--grey)' }}
          >
            Send
          </Button>
        </form>
      </div>

      {/* Right Side: Information and Image */}
      <div className="grid grid-flow-row">
        <h3 className="h-[13vh] font-[100] text-3xl">
          Got a concept? <br />
          Let’s develop it <span style={{ color: "var(--pink)" }}>together</span>.
        </h3>
        <div
          style={{ backgroundImage: 'url(/images/contactus.jpg)' }}
          className="w-full h-[150px] bg-cover bg-center md:h-[465px]"
        ></div>
      </div>

      {/* Notification Snackbar */}
      <Snackbar open={notificationOpen} autoHideDuration={6000} onClose={handleNotificationClose}>
        <Alert onClose={handleNotificationClose} severity="success">
          Email submitted successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactForm;
