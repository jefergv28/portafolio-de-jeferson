"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  { icon: FaPhoneAlt, title: "Phone", description: "(+57) 315 461 86 98" },
  { icon: FaEnvelope, title: "Email", description: "jefergv28@gmail.com" },
  { icon: FaMapMarkedAlt, title: "Address", description: "Bogotá, Colombia" },
];

const Contact = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xzzdneqp", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("¡Mensaje enviado con éxito!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("Hubo un error al enviar el mensaje.");
      }
    } catch (error) {
      setStatus("Error de conexión. Intenta nuevamente.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#232329] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                If you are looking for someone passionate about technology and
                development, you are in the right place. Write to me and let's
                work together to make your next project a reality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Select nativo en lugar de ShadCN UI */}
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="p-2 rounded-md bg-gray-800 text-white"
              >
                <option value="">Select a service</option>
                <option value="Web Development">Web Development</option>
                <option value="Frontend Development">
                  Frontend Development
                </option>
                <option value="React Development">React Development</option>
              </select>

              <Textarea
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>

              {status && <p className="text-white/60">{status}</p>}
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((Item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#232329] text-accent rounded-md flex items-center justify-center">
                    <Item.icon className="text-[28px]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{Item.title}</p>
                    <h3 className="text-xl">{Item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
