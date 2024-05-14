import Aos from "aos";
import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { useTranslation } from "react-i18next";
import { FaExclamationCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import i18n from "../../i18n";

const initialState = {
  nome: "",
  cognome: "",
  guest: "",
  number: "",
  date: "",
  time: "",
  email: "",
};

const Reservation = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  //  console.log(
  //    'Loading translation file:',
  //    i18n.services.backendConnector.backend.options.loadPath
  //  )

  const { t } = useTranslation("translation");

  const [formData, setFormData] = useState(initialState);
  const form = useRef();
  const navigate = useNavigate();

  const { nome, cognome, guest, number, date, email, time } = formData;

  const isWednesday = (dateString) => {
    const selectedDate = new Date(dateString);
    // getDay() returns the day of the week as a number (0-6)
    if (selectedDate.getDay() === 3) {
      toast.error(t("messaggio_chiusura"));
      return true;
    }
    return false;
  };

  const isBetween28MarchAnd13October = (dateString) => {
    const selectedDate = new Date(dateString);
    const startDate = new Date("2024-03-28");
    const endDate = new Date("2024-10-13");
    if (selectedDate < startDate) {
      toast.error(t("messaggio_chiusura_ferie"));
      return false;
    } else if (selectedDate > endDate) {
      toast.error(t("messaggio_chiusura_ferie2"));
      return false;
    } else {
      return true;
    }
  };

  const onMutate = (e) => {
    if (e.target.name === "date") {
      if (isWednesday(e.target.value)) {
        setFormData((prevState) => ({
          ...prevState,
          date: "",
        }));
        return;
      }
      if (!isBetween28MarchAnd13October(e.target.value)) {
        setFormData((prevState) => ({
          ...prevState,
          date: "",
        }));
        return;
      }
    }

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //EMAIL JS
  const sendEmail = async () => {
    try {
      const result = await emailjs.sendForm(
        "service_o45pi2z",
        "template_ni0c12c",
        form.current,
        "XL_UG4CDVCcmZ6qWq"
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sendEmail();
    toast.success(t("prenotazione_inviata"));
    navigate("/");
  };

  return (
    <section
      data-aos="flip-right"
      id="reservation"
      className="min-h-[480px] container flex flex-col items-center justify-center w-full h-full mx-auto my-5 py-[80px]"
    >
      <h1 className="h2 text-dark"> {t("prenota_un_tavolo")}</h1>
      <form ref={form} className="text-center" onSubmit={(e) => onSubmit(e)}>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="nome"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                {t("nome")}
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                value={formData.nome}
                onChange={onMutate}
                placeholder={t("nome")}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="cognome"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                {t("cognome")}
              </label>
              <input
                type="text"
                name="cognome"
                id="cognome"
                placeholder={t("cognome")}
                onChange={onMutate}
                value={cognome}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            {t("email")}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            onChange={onMutate}
            value={email}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="number"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            {t("telefono")}
          </label>
          <input
            type="text"
            name="number"
            id="number"
            placeholder={t("telefono")}
            onChange={onMutate}
            value={number}
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="guest"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            {t("persone")}
          </label>
          <input
            type="number"
            name="guest"
            id="guest"
            placeholder="5"
            value={guest}
            onChange={onMutate}
            min="1"
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            required
          />
        </div>

        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="date"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                {t("data")}
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={onMutate}
                onBlur={(e) => isWednesday(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="time"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                {t("orario")}{" "}
              </label>
              <select
                name="time"
                id="time"
                onChange={onMutate}
                value={time}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              >
                <option value="" disabled selected>
                  {t("seleziona_orario")}
                </option>
                <option value="12:00">12:00</option>
                <option value="12:15">12:15</option>
                <option value="12:30">12:30</option>
                <option value="12:45">12:45</option>
                <option value="13:00">13:00</option>
                <option value="13:15">13:15</option>
                <option value="13:30">13:30</option>
                <option value="13:45">13:45</option>
                <option value="18:30">18:30</option>
                <option value="18:45">18:45</option>
                <option value="19:00">19:00</option>
                <option value="19:15">19:15</option>
                <option value="19:30">19:30</option>
                <option value="19:45">19:45</option>
                <option value="20:00">20:00</option>
                <option value="20:15">20:15</option>
                <option value="20:30">20:30</option>
                <option value="20:45">20:45</option>
                <option value="21:00">21:00</option>
                <option value="21:15">21:15</option>
                <option value="21:30">21:30</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between mb-4">
          <FaExclamationCircle size={30} /> {t("informativa")}
        </div>
        <button
          type="submit"
          className="px-8 py-3 text-base font-semibold text-center text-white rounded-md outline-none hover:shadow-form bg-blu-logo"
        >
          {t("prenota")}{" "}
        </button>
      </form>
    </section>
  );
};

export default Reservation;
