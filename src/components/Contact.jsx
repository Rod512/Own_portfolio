import React, { Fragment,useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_lzj0mhh', 'template_t7ftm8j', form.current, 'nTI3i7zejIUJvTek6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <Fragment>
            <div className='lg:mx-12 mx-4 py-32' id='contact'>
                    <div className='text-headigcolor text-center mb-20'>
                        <p className='text-xl font-semibold mb-5'>Get in touch</p>
                        <h2 className='md:text-5xl text-4xl font-bold'>Contact me</h2>
                        <p className='mt-5'>contact me with your mail</p>
                    </div>

                    <div className='md:2/3 mx-auto mb-20'>
                    <form ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
                      <div className="sm:w-1/2 w-full">
                        <label
                          htmlFor="firstname"
                          className="text-base text-headingcolor w-full"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          className="block border border-primary rounded-lg py-2 mt-2 w-full"
                        />
                      </div>
                      <div className="sm:w-1/2 w-full">
                        <label
                          htmlFor="lastname"
                          className="text-base text-headingcolor w-full"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          id="lastname"
                          name="lastname"
                          className="block border border-primary rounded-lg py-2 mt-2 w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
                      <div className="sm:w-1/2 w-full">
                        <label
                          htmlFor="firstname"
                          className="text-base text-headingcolor w-full"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          className="block border border-primary rounded-lg py-2 mt-2 w-full"
                        />
                      </div>
                      <div className="sm:w-1/2 w-full">
                        <label
                          htmlFor="lastname"
                          className="text-base text-headingcolor w-full"
                        >
                          Phone number
                        </label>
                        <input
                          type="text"
                          id="lastname"
                          name="lastname"
                          className="block border border-primary rounded-lg py-2 mt-2 w-full"
                        />
                      </div>
                    </div>
                    <div className="w-full mb-8">
                      <label
                        htmlFor="message"
                        className="text-base text-headingcolor w-full"
                      >
                        Message
                      </label>
                      <textarea name="message" id="message" cols="30" rows="5" className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full">Type your message...</textarea>
                    </div>
                    <div className="w-full mb-8">
                      <input type="checkbox" name="agree" id="agree"/>
                      <label
                        htmlFor="message"
                        className="text-base text-headingcolor w-full ml-3"
                      >
                       I accept the terms
                      </label>
                    </div>
                    <div className="w-36 mx-auto border rounded-lg">
                    <input type="submit" value="Submit" className="btn-primary py-3 bg-primary px-8 text-white font-medium rounded-b-md cursor-pointer inline-block w-full "/>
                    </div>
                  </form>
                    </div>
            </div>



        </Fragment>
    );
};

export default Contact;