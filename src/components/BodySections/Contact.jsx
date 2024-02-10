import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [modal, setModal] = useState(false);
  const [formState, handleSubmit] = useForm("xgebkgpa");

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    toggleModal();
    e.target.reset();
  };

  return (
    <div
      className="ContactBody flex flex-col justify-center items-center h-screen w-full
relative bg-cover bg-no-repeat text-white"
      id="contact"
    >
      <div className="flex w-9/12 h-5/6 justify-center items-center">
        <div className="ContactBody-title text-3xl font-extrabold absolute right-10 top-6 font-mono  text-amber-400">
          ..// contact
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-4 pt-6 pb-6 pl-10 pr-10 bg-black/70 rounded">
            <div className="flex gap-4">
              {" "}
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="text-black p-2 rounded"
                  name="firstName"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="text-black p-2 rounded"
                  name="lastName"
                />{" "}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="eMail">Enter E-mail:</label>
              <input
                type="email"
                name="_replyto"
                id="email-address"
                placeholder="example@coolmail.com"
                required=""
                className="text-black p-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                placeholder="Enter Subject"
                className="text-black p-2 rounded"
                name="subject"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="message">Write Message:</label>
              <textarea
                type="text"
                placeholder="Message..."
                className="text-black h-20 p-2 rounded"
                name="message"
                rows={3}
              />
            </div>
            <div className="flex gap-5 justify-center items-center">
              <button
                type="submit"
                className="p-3 rounded bg-green-600 font-semibold flex gap-1 items-center hover:bg-amber-400 hover:text-black"
              >
                Submit
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
              <span>or</span>
              <a
                href="mailto:soumen.sagor@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded bg-green-600 font-semibold flex gap-1 items-center hover:bg-amber-400 hover:text-black"
              >
                Mail Directly
                <FontAwesomeIcon icon={faEnvelope} />{" "}
              </a>
            </div>
          </div>
        </form>
        {modal && (
          <div className="modal w-screen h-screen top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center">
            {/* overlay */}
            <div
              onClick={toggleModal}
              className=" bg-black/60 backdrop-blur-sm w-screen h-screen top-0 left-0 right-0 bottom-0 fixed"
            ></div>
            <div className=" bg-white/80 relative flex flex-col justify-center items-center gap-4 rounded  pt-4 pb-4 pl-8 pr-8">
              <span className=" text-black font-semibold text-lg">
                Message Sent Successfully.
              </span>
              <span className=" text-black font-semibold text-lg">
                Thank You!
              </span>
              <button
                onClick={toggleModal}
                className="pt-2 pb-2 pl-4 pr-4 rounded font-semibold bg-green-600  hover:bg-amber-400 hover:text-black"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="footer w-full h-1/6 bg-black/50 flex flex-col items-center justify-center text-amber-200/70">
        <span>A Vite+TailWindCSS+React App</span>
        <span className=" font-semibold">
          Designed and Developed by SOUMEN TALUKDER with ❤
        </span>
        <span>All Rights Reserved@2023</span>
      </div>
    </div>
  );
};

export default Contact;
