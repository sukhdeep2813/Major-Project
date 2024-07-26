import { Button, Text, Checkbox, FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import Footer from './Footer';
import Carousel from './Carousel';

const signupValidationSchema = object({
  name: string().required("Name is required"),
  phone_number: string().required("Phone Number is required"),
  email: string().email("Email is invalid").required("Email is required"),
  city: string().required("City is required")
});

const Material = () => {
  const images = [
    '/rhyno final.95.png',
    '/black.png'
    
  ];
  const images2 = [
     "/final design try 2 cross view.178.png",
     "/golden.png"
  ];
  const images3 =[
    "/bike.png",
    "/black.png",
    "/golden.png",
    "/blue.png"
  ];
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center'>
        <div className='flex items-center justify-center w-full'>
          <h1 className='text-3xl mt-4 font-bold m-4 mb-12 text-center font-lato'>
            Transforming India's New Face<span className='text-purple-900'>
             <br/>with Rhyno EV
            </span>
           
          </h1>
        </div>
        <div className='h-full w-4/5 mb-10 cursor-pointer'>
          <img src='/grp.png' className='gp rounded-3xl' alt="Group" />
        </div>
        <div className='flex flex-1 p-2 m-8 space-x-6 max-w-7xl'>
          
          <div className='tyre bg-slate-950 rounded-md'><Carousel images={images} interval={3000}/></div>
          <div className='speed rounded-md bg-slate-950'><Carousel images={images2} interval={4000}/></div>
        </div>
        <div className='flex flex-1 smallportion p-24 w-full mb-8 bg-gray-300 space-x-20 justify-center'>
          <div className='flex-col p-3'>
            <img className='ml-16 h-8 w-8' src='/energy.png' alt="Energy" />
            <h1 className='mt-2 font-bold text-center'>Made In India</h1>
            <p className='mt-2 text-gray-600'>For Indians By Indians</p>
          </div>
          <div className='flex-col p-3'>
            <img className='ml-28 h-10 w-10' src='/electric-scooter.png' alt="Electric Scooter" />
            <h1 className='mt-2 font-bold text-center'>Long Riding Range</h1>
            <p className='mt-2 text-gray-600'>Range that's true to your riding style</p>
          </div>
          <div className='flex-col p-3'>
            <img className='ml-32 h-10 w-10' src='/reuse.png' alt="Reuse" />
            <h1 className='mt-2 font-bold text-center'>Removable Battery</h1>
            <p className='mt-2 text-gray-600'>Charge At Your Convenience, Wherever!</p>
          </div>
          <div className='flex-col p-3'>
            <img className='ml-28 h-10 w-10' src='/phone-charger.png' alt="Phone Charger" />
            <h1 className='mt-2 font-bold text-center'>Lightest Charger</h1>
            <p className='mt-2 text-gray-600'>No more Carrying Bulky Chargers</p>
          </div>
        </div>
        <div className='flex flex-1 space-x-9 h-full rounded-xl bg-slate-500 mb-5'>
          <div className='place-items-center speed rou  items-center justify-center bg-zinc-900'>
           <div className=''>
              <Carousel images={images3} interval={2000}/>      
           </div>
          </div>
          <div className='p-8 '>
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
              validationSchema={signupValidationSchema}
            >
              {() => (
                <Form>
                  <Stack mt="10" spacing={6}>
                    <p className='font-bold text-xl text-center mt- 5'>Book Now</p>
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
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Material;
