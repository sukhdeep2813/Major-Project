import {  Text, Checkbox, FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik';
import { object, string } from 'yup';

import React from 'react'
import Footer from '../components/Footer';


const contactusValidationSchema = object({

})

const ContactUs = () => {
  return (
    <div className="h-screen ">
      
        <div className=' min-h-full flex flex-1 space-x-44 '>
          <div className='ml-96 h-96  flex-col mt-40 speed p-5 rounded-lg'>
            <h1 className='text-5xl font-bold font-lato mb-2 text-zinc-950' >Contact Us</h1>
            <p className='font-calibri'>
      <span className='text-zinc-950'>
        Mail : 
        <a href="mailto:info@rhyno.in" className='text-blue-500 hover:text-blue-700 transition-colors duration-300 mx-2'>
          info@rhyno.in
        </a>
      </span>
      <br />
      <span className='text-zinc-950'>
        Mobile no. : 
        <a href="tel:+919023987528" className='text-blue-500 hover:text-blue-700 transition-colors duration-300 mx-2'>
          +91-9023987528
        </a>
      </span>
      <br />
      <span className='text-zinc-950'>
        Location: Rhyno Wheels Private limited,
        <br />
        Near UG hostel gate #2, Behind PDEU,
        <br />
        Raisan, Gandhinagar, Gujarat, India.
      </span>
    </p>
          </div>

          <div className='bg-white-100 w-3/12 p-6  h-4/6 mt-16  rounded-xl speed'>
          <Formik
              initialValues={{
                name: "",
                phone_number: "",
                email: "",
                city: ""
              }}
              onSubmit={(values) => {
                setEmail(values.email);
              }}
              validationSchema={contactusValidationSchema}
            >
              {() => (
                <Form>
                  <Stack mt="10" spacing={6}>
                    <p className='font-bold text-xl text-center '>Book Now</p>
                    <Field name="name">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Input {...field} name="name" placeholder="Enter your name...." />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="phone_number">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="phone_number">Phone Number</FormLabel>
                          <Input {...field} name="phone_number" placeholder="Enter your phone Number...." />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="email">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input {...field} name="email" type="email" placeholder="Enter your email...." />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="city">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="city">City</FormLabel>
                          <Input {...field} name="city" placeholder="Enter your city...." />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Checkbox>
                      <Text textStyle="p3">
                        I agree With{" "}
                        <Text as="span" className='text-zinc-950 font-medium'>
                          Terms and Conditions
                        </Text>
                      </Text>
                    </Checkbox>
                    <button  className='bg-zinc-950 text-slate-50 h-10 hover:bg-slate-700 cursor-pointer font-medium rounded-lg'>
                      Book Now
                    </button>
                  </Stack>
                </Form>

              )}
            </Formik>
          </div>
        </div>x 
        
  </div>
  )
}

export default ContactUs