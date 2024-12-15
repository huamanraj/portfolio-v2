"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [warning, setWarning] = useState("");
  const [lastSentTime, setLastSentTime] = useState<number | null>(null);

  const MINUTE_IN_MS = 60 * 1000; // 1 minute in milliseconds

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const now = Date.now();
    if (lastSentTime && now - lastSentTime < MINUTE_IN_MS) {
      setWarning(
        "You can only send one message per minute. Please wait before sending another."
      );
      return;
    }

    setWarning("");
    setStatus("sending");

    if (form.current) {
      emailjs
        .sendForm(
          "service_x9q1bjl",
          "template_x2n50rd",
          form.current,
          "rg0jboprn9B50aHdM"
        )
        .then(
          () => {
            setStatus("success");
            form.current?.reset();
            setLastSentTime(Date.now());
          },
          () => {
            setStatus("error");
          }
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-xl pb-2">Write a email to me</h1>
      <div className="bg-md-bg border border-md-text/20 rounded-lg p-6">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          {/* Name Input */}
          <div>
            
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              id="user_name"
              required
              className="w-full px-3 py-2 bg-md-bg border border-md-text/40 rounded-md text-md-text focus:outline-none focus:border-md-purple"
            />
          </div>

          {/* Email Input */}
          <div>
            
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              id="user_email"
              required
              className="w-full px-3 py-2 bg-md-bg border border-md-text/40 rounded-md text-md-text focus:outline-none focus:border-md-purple"
            />
          </div>

          {/* Message Input */}
          <div>
            
            <textarea
              name="message"
              placeholder="Write your message here..."
              id="message"
              rows={5}
              required
              className="w-full px-3 py-2 bg-md-bg border border-md-text/40 rounded-md text-md-text focus:outline-none focus:border-md-purple"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="border text-md-bg px-6 py-2 rounded hover:bg-md-blue transition-colors duration-300"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Success Message */}
        {status === "success" && (
          <p className="mt-4 text-green">
            Your message was sent successfully!
          </p>
        )}

        {/* Error Message */}
        {status === "error" && (
          <p className="mt-4 text-red">
            There was an error sending your message. Please try again.
          </p>
        )}

        {/* Warning Message */}
        {warning && <p className="mt-4 text-red">{warning}</p>}
      </div>
    </div>
  );
};

export default Contact;
