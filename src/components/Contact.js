import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import spaceBg from "../assets/banner-bg.png";
import spaceman2 from "../assets/spaceman2.png";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(false);

  const [formData, setFormData] = useState({
    sender_name: "",
    sender_email: "",
    message: "",
  });

  const form = useRef();

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_z431znp",
        "template_2be8clu",
        form.current,
        "p1IzzRoka9cbc8ySr"
      )
      .then(
        (result) => {
          setIsSending(false);
          setIsSent(true);
          setError();
          setTimeout(() => {
            setIsSent(false);
            setFormData({
              sender_name: "",
              sender_email: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          setError(error.message);
        }
      );
  };
  return (
    <React.Fragment>
      <div
        id="contact"
        className="bg-cover bg-center grid grid-cols-1 md:grid-cols-2 py-20 px-10 bg-gradient-to-r from-black via-[#540770] to bg-black"
        style={{ backgroundImage: `url(${spaceBg})` }}
      >
        <div>
          <h1 className="text-white text-4xl font-bold text-center mb-4">
            Get In Touch
          </h1>
          {error ? (
            <div>
              <p className="text-white text-2xl">{error}</p>
            </div>
          ) : (
            ""
          )}
          <form ref={form} onSubmit={sendEmail}>
            <div class="relative mb-6">
              <input
                type="text"
                id="floating_filled"
                class="block rounded-lg px-4 py-5 w-full text-xl text-white bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-800  focus:bg-gray-200 focus:text-gray-800 peer"
                placeholder=" "
                name="sender_name"
                value={formData.sender_name}
                onChange={handleFormChange}
                required
              />
              <label
                for="floating_filled"
                class="absolute text-xl text-gray-500 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-4 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
              >
                Name
              </label>
            </div>
            <div class="relative mb-6">
              <input
                type="text"
                id="floating_filled"
                class="block rounded-lg px-4 py-5 w-full text-xl text-white bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-800  focus:bg-gray-200 focus:text-gray-800 peer"
                placeholder=" "
                name="sender_email"
                value={formData.sender_email}
                onChange={handleFormChange}
                required
              />
              <label
                for="floating_filled"
                class="absolute text-xl text-gray-500 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-4 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
              >
                Email
              </label>
            </div>
            <div class="relative mb-6">
              <textarea
                type="text"
                rows={8}
                id="floating_filled"
                class="block rounded-lg px-4 py-5 w-full text-xl text-white bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-800  focus:bg-gray-200 focus:text-gray-800 peer"
                placeholder=" "
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
              />
              <label
                for="floating_filled"
                class="absolute text-xl text-gray-500 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-4 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
              >
                Message
              </label>
            </div>
            <div>
              {isSent ? (
                <div>
                  <button
                    disabled
                    className="w-full border border-gray-300 bg-green-600 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300 ease-in-out"
                  >
                    Email Sent!
                  </button>
                </div>
              ) : isSending ? (
                <div>
                  <button
                    disabled
                    type="button"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 w-full inline-flex items-center justify-center"
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      class="inline w-4 h-4 mr-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Sending...
                  </button>
                </div>
              ) : (
                <div>
                  <input
                    type="submit"
                    value="Send"
                    className="w-full border border-gray-300 bg-transparent text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out hover:cursor-pointer"
                  ></input>
                </div>
              )}
            </div>
          </form>
        </div>
        <div className="mx-auto mt-10" style={{ height: "500px" }}>
          <img
            className="w-full h-full object-contain animate-updown"
            src={spaceman2}
            alt=""
          />
        </div>
      </div>
    </React.Fragment>
  );
}
