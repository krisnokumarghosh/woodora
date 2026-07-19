

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the Woodora website, placing an order, or creating an account, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of our website and services.",
  },
  {
    title: "2. Products & Pricing",
    content:
      "All product descriptions, images, and prices listed on Woodora are subject to change without prior notice. We make every effort to display colors and details accurately, but slight variations may occur due to screen settings or natural material differences, especially with handcrafted wood pieces.",
  },
  {
    title: "3. Orders & Payment",
    content:
      "Once an order is placed, you will receive a confirmation email with your order details. Payment must be completed in full at checkout via our supported payment methods. Woodora reserves the right to cancel or refuse any order due to stock unavailability, pricing errors, or suspected fraudulent activity.",
  },
  {
    title: "4. Shipping & Delivery",
    content:
      "In-stock items are shipped via standard courier or White Glove delivery depending on the product. Estimated delivery timelines range from 2–14 business days. Delivery of oversized furniture may require an appointment and signature upon arrival. Woodora is not responsible for delays caused by third-party couriers or unforeseen circumstances.",
  },
  {
    title: "5. Returns & Refunds",
    content:
      "Items may be returned within 30 days of delivery if unused and in original packaging, unless marked as final sale or exclusive. Custom and made-to-order pieces are non-returnable. Approved returns may incur a restocking fee. Refunds are processed to the original payment method within 7–10 business days of receiving the returned item.",
  },
  {
    title: "6. Account Responsibility",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Please notify us immediately of any unauthorized use of your account.",
  },
  {
    title: "7. Intellectual Property",
    content:
      "All content on this website — including images, product designs, logos, and text — is the property of Woodora and protected by applicable copyright and trademark laws. Reproduction or use without written permission is prohibited.",
  },
  {
    title: "8. Limitation of Liability",
    content:
      "Woodora shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our liability is limited to the amount paid for the product in question.",
  },
  {
    title: "9. Changes to Terms",
    content:
      "We reserve the right to update or modify these Terms & Conditions at any time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
  },
  {
    title: "10. Contact Us",
    content:
      "If you have any questions regarding these Terms & Conditions, please reach out to our support team through the contact page or email us directly.",
  },
];

const TermsPage = () => {
  return (
    <div className="w-full bg-[#F5F0E6]">

      {/* Header */}
      <section className="border-b border-[#1A1A1A]/10 px-6 md:px-10 lg:px-14 py-14 lg:py-16">
        <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#A0522D] mb-4">
          Legal
        </p>
        <h1 className="font-heading font-extrabold text-[#1A1A1A] leading-[0.95] tracking-[-0.03em] text-[11vw] sm:text-[7vw] lg:text-[3.6vw]">
          Terms & Conditions
        </h1>
        <p className="text-[14px] text-[#1A1A1A]/50 mt-4">
          Last updated: July 20, 2026
        </p>
      </section>

      {/* Intro */}
      <section className="px-6 md:px-10 lg:px-14 py-8 border-b border-[#1A1A1A]/10">
        <p className="text-[14.5px] leading-relaxed text-[#1A1A1A]/70 max-w-2xl">
          Welcome to Woodora. These Terms & Conditions outline the rules and
          guidelines for using our website and purchasing our products. Please
          read them carefully before making a purchase.
        </p>
      </section>

      {/* Sections */}
      <section>
        {SECTIONS.map((section, i) => (
          <div
            key={section.title}
            className={`px-6 md:px-10 lg:px-14 py-8 md:py-10 border-b border-[#1A1A1A]/10 ${
              i === 0 ? "" : ""
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-3 lg:gap-10 max-w-4xl">
              <h2 className="text-[16px] md:text-[17px] font-semibold font-heading text-[#1A1A1A] tracking-tight">
                {section.title}
              </h2>
              <p className="text-[13.5px] md:text-[14px] leading-relaxed text-[#1A1A1A]/65">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </section>

      

    </div>
  );
};

export default TermsPage;