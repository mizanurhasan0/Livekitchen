import React from "react";
import { faqContact } from "../Shares/StaticData";
import { IoIosArrowDown } from "react-icons/io";

export default function Contact() {
  return (
    <div className=" my-20">
      <div className="bg-primary bg-opacity-10 p-10 shadow-lg text-primary">
        <div className="container">
          <h1 className="text-4xl my-5">WHAT THE FAQS </h1>
          <p className="leading-8 tracking-widest">
            Parents sometimes have more questions than a toddler who just
            learned the word "Why". At Frida, we may not have every answer - be
            we certainly have a lot of them. Browse our FAQs to find answers to
            the questions we get the most.
          </p>
        </div>
      </div>
      <div className="container flex  flex-col mb-20">
        <div className="space-y-3 text-primary my-10">
          <h1 className="text-4xl   ">What's a fuss?</h1>
          <p className="text-xl">
            Choose a care category and then a specific product.
          </p>
        </div>
        <div>
          {faqContact.map((faq, i) => (
            <div className="my-2" key={i}>
              <input
                type="radio"
                name="example_accordion"
                id={"faq" + i}
                className="peer hidden"
              />
              <label
                htmlFor={"faq" + i}
                className="p-2 flex justify-between items-center text-primary
           cursor-pointer border-b border-primary text-xl capitalize"
              >
                {faq.title}
                <IoIosArrowDown />
              </label>
              <div className="py-3 peer-checked:block hidden">
                <div className="w-8 h-8 bg-primary bg-opacity-10 rotate-45 ml-5 "></div>
              </div>
              <div className="relative bg-white  border border-primary p-2 rounded-md leading-8 tracking-widest hidden peer-checked:block 
              mt-[-1.8rem] ">
                <p>{faq.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
