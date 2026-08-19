"use client";

import { FormEvent, useState } from "react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "خطا در ارسال درخواست");
      }

      setStatus("success");
      setFeedback(
        "درخواست شما با موفقیت ثبت شد. به‌زودی با شما تماس می‌گیریم.",
      );
      setForm(initialForm);
    } catch (error) {
      setStatus("error");

      setFeedback(
        error instanceof Error
          ? error.message
          : "خطایی رخ داد. لطفاً دوباره تلاش کنید.",
      );
    }
  };

  return (
    <section className="bg-[#f7f7f5] py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <span className="mb-3 block text-sm font-bold text-brand-gold">
            فرم تماس
          </span>

          <h2 className="text-3xl font-black leading-tight text-brand-black md:text-4xl">
            درخواست خود را
            <br />
            برای ما ارسال کنید
          </h2>

          <p className="mt-6 max-w-md leading-8 text-gray-600">
            اطلاعات پروژه یا درخواست خود را ثبت کنید تا کارشناسان ما پس از
            بررسی، در اسرع وقت با شما تماس بگیرند.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-bold text-brand-black"
              >
                نام و نام خانوادگی
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
                }
                placeholder="نام شما"
                required
                disabled={status === "loading"}
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-brand-gold disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-bold text-brand-black"
              >
                شماره تماس
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={(event) =>
                  setForm({ ...form, phone: event.target.value })
                }
                placeholder="09xxxxxxxxx"
                dir="ltr"
                required
                disabled={status === "loading"}
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-left text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-brand-gold disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-brand-black"
            >
              ایمیل
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              placeholder="example@email.com"
              dir="ltr"
              disabled={status === "loading"}
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-left text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-brand-gold disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-bold text-brand-black"
            >
              موضوع درخواست
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={(event) =>
                setForm({ ...form, subject: event.target.value })
              }
              placeholder="مثلاً استعلام قیمت تجهیزات"
              required
              disabled={status === "loading"}
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-brand-gold disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-bold text-brand-black"
            >
              توضیحات
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={(event) =>
                setForm({ ...form, message: event.target.value })
              }
              placeholder="توضیحات درخواست یا پروژه خود را بنویسید..."
              required
              disabled={status === "loading"}
              className="w-full resize-none rounded-md border border-gray-200 px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-brand-gold disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          {feedback && (
            <p
              className={`mt-5 rounded-md px-4 py-3 text-sm font-medium ${
                status === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {feedback}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-brand-gold px-6 py-3.5 text-sm font-bold text-brand-black transition-colors hover:bg-brand-gold-light disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "در حال ارسال..." : "ارسال درخواست"}
          </button>
        </form>
      </div>
    </section>
  );
}
