"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Enquiry sent successfully");
        reset();
      } else {
        toast.error("Failed to send enquiry");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      id="contactForm"
      onSubmit={handleSubmit(onSubmit)}
      className="wow fadeInUp"
      data-wow-delay="0.4s"
    >
      <div className="row">
        {/* First Name */}
        <div className="form-group col-md-6 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            {...register("fname", { required: true })}
          />
          <div className="help-block with-errors">
            {errors.fname && "First name is required"}
          </div>
        </div>

        {/* Last Name */}
        <div className="form-group col-md-6 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            {...register("lname", { required: true })}
          />
          <div className="help-block with-errors">
            {errors.lname && "Last name is required"}
          </div>
        </div>

        {/* Phone */}
        <div className="form-group col-md-6 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            {...register("phone", {
              required: true,
              minLength: 10,
            })}
          />
          <div className="help-block with-errors">
            {errors.phone && "Valid phone is required"}
          </div>
        </div>

        {/* Email */}
        <div className="form-group col-md-6 mb-4">
          <input
            type="email"
            className="form-control"
            placeholder="E-mail Address"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          <div className="help-block with-errors">
            {errors.email && "Valid email is required"}
          </div>
        </div>

        {/* Message */}
        <div className="form-group col-md-12 mb-5">
          <textarea
            className="form-control"
            rows={5}
            placeholder="Write your message...."
            {...register("message", { required: true })}
          />
          <div className="help-block with-errors">
            {errors.message && "Message is required"}
          </div>
        </div>

        {/* Submit */}
        <div className="col-md-12">
          <button type="submit" className="btn-default" disabled={loading}>
            {loading ? "Sending..." : "Book Service Now"}
          </button>
        </div>
      </div>
    </form>
  );
}