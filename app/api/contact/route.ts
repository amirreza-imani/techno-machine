import { NextResponse } from "next/server";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, email, subject, message } = body;

    if (!name || !phone || !subject || !message) {
      return NextResponse.json(
        {
          error: "لطفاً تمام فیلدهای ضروری را تکمیل کنید.",
        },
        {
          status: 400,
        },
      );
    }

    const response = await fetch(`${STRAPI_URL}/api/contact-messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name,
          phone,
          email: email || null,
          subject,
          message,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();

      console.error("Strapi contact error:", error);

      return NextResponse.json(
        {
          error: "خطا در ثبت درخواست. لطفاً دوباره تلاش کنید.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json(
      {
        message: "درخواست شما با موفقیت ثبت شد.",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "خطایی رخ داد. لطفاً دوباره تلاش کنید.",
      },
      {
        status: 500,
      },
    );
  }
}
