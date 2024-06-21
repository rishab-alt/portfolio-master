import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Github from '../images/Github';
import Linkedin from '../images/Linkedin';
import Instagram from '../images/Instagram';
import Navbar from '../NavBar';

const Contact = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [canSubmit, setCanSubmit] = useState(true); // State to control submission

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCanSubmit(true); // Allow submissions again every 10 minutes
    }, 10 * 60 * 1000); // 10 minutes in milliseconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    if (!canSubmit) {
      alert('You are submitting too frequently. Please wait a moment.');
      return;
    }

    setCanSubmit(false); // Disable submission temporarily

    fetch('https://formspree.io/f/mvoejjlq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        resetForm();
      } else {
        alert('Failed to send message.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to send message.');
    })
    .finally(() => {
      setSubmitting(false);
    });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <Navbar darkMode={darkMode} />
      <div className="min-h-screen flex flex-col justify-center items-center container mx-auto py-8 px-4 pt-20">
        <div className="max-w-md p-8 bg-gray-800 rounded-lg shadow-lg animate-fade-in text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-lg">
            You can reach out to me via email at <a href="mailto:me@rishab.tech" className="text-yellow-500 underline">me@rishab.tech</a> or connect with me on social media:
          </p>
          <div className="flex justify-center mt-4">
            <a href="https://github.com/rishab-alt" className="text-2xl mr-4 hover:text-yellow-500">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/rishab-saddiq-9443291ab/" className="text-2xl mr-4 hover:text-yellow-500">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/rish_saddiq/" className="text-2xl mr-4 hover:text-yellow-500">
              <Instagram />
            </a>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="mt-8">
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="name">
                    Name:
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="w-full mt-1 p-2 bg-gray-700 text-white rounded"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="email">
                    Email:
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="w-full mt-1 p-2 bg-gray-700 text-white rounded"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="message">
                    Message:
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    id="message"
                    className="w-full mt-1 p-2 bg-gray-700 text-white rounded"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <button
                  type="submit"
                  className="mt-4 p-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
                  disabled={isSubmitting || !canSubmit} // Disable button when submitting or during rate limit
                >
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
