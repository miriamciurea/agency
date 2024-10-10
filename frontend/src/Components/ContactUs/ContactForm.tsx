// src/components/ContactForm.tsx

import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { IoIosSend } from "react-icons/io";

const ContactForm: React.FC = () => {

    const [budget, setBudget] = useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setBudget(event.target.value as string);
    };



  return (
      <div className="grid grid-flow-row grid-cols-1 m-[10%] gap-[3%]
                md:grid-flow-col md:grid-cols-2 md:m-[5%] md:mt-[5%]
      ">

        <div className="grid grid-flow-row order-last
                        md:order-first
                        ">

          <p className="h-[7vh] text-3xl
                        md:h-[10vh] md:text-5xl">
            Let’s get started
          </p>

          <form className="space-y-4">
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Your email"
              variant="outlined"
              type="email"
            />
            <TextField
              fullWidth
              label="Phone number"
              variant="outlined"
              type="tel"
            />
            <FormControl fullWidth>
              <InputLabel id="budget-select-label">What’s your budget?</InputLabel>
              <Select
                labelId="budget-select-label"
                id="budget-select"
                value={budget}
                label="What’s your budget?"
                onChange={handleChange}
                style={{
                  backgroundColor: 'var(--bg)'
                }}
              >
                <MenuItem value={1000}
                  style={{
                    backgroundColor: 'var(--bg)'
                  }}
                >less than $1,000</MenuItem>
                <MenuItem value={2000}
                  style={{
                    backgroundColor: 'var(--bg)'
                  }}
                >$1,000 - $3,000</MenuItem>
                <MenuItem value={3000}
                  style={{
                    backgroundColor: 'var(--bg)'
                  }}
                >$3,000 - $5,000</MenuItem>
                <MenuItem value={'other'}
                  style={{
                    backgroundColor: 'var(--bg)'
                  }}
                >other</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Tell us a little about your project"
              multiline
              rows={4}
              variant="outlined"
            />
            <Button variant="contained"
              endIcon={<IoIosSend />}
              style={{
                backgroundColor: 'var(--blue)',
                color: 'var(--grey)'
              }}
            >
              Send
            </Button>
          </form>
        </div>


        <div className="grid grid-flow-row">
          <h3 className="h-[10vh] font-[100] text-3xl">
            Got a concept? <br />
            Let’s develop it <span style={{ color: "var(--pink)" }}>together</span>.
          </h3>
          <div style={{
              backgroundImage: 'url(public/images/contactus.jpg)'
            }}
            className="w-full h-[150px] bg-cover bg-center
                      md:h-[465px]
            "
          >
          </div>
        </div>

      </div>


  );
};

export default ContactForm;
