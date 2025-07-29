import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Maxusbond Solutions",
  description:
    "Get answers to common questions about contact validation, bulk uploads, GDPR compliance, and our email verification platform.",
}

const faqs = [
  {
    question: "How accurate is your email verification?",
    answer:
      "Our email verification platform maintains a 99.9% accuracy rate through advanced algorithms that check syntax, domain validity, mailbox existence, and deliverability. We continuously update our validation logic to handle new email patterns and domain configurations.",
  },
  {
    question: "Can I upload bulk contact lists for validation?",
    answer:
      "Yes, you can upload CSV or Excel files with up to 100,000 email addresses at once. Our bulk processing system provides detailed validation reports with results categorized as valid, invalid, risky, or unknown. Processing typically completes within minutes depending on list size.",
  },
  {
    question: "Is your platform GDPR compliant?",
    answer:
      "Absolutely. We are fully GDPR compliant and follow strict data protection protocols. We do not store email addresses after validation, process data securely, and provide detailed privacy controls. Our platform also helps you maintain compliance by identifying and removing invalid contacts.",
  },
  {
    question: "How does the API integration work?",
    answer:
      "Our RESTful API is designed for easy integration with any platform. You can validate emails in real-time with simple HTTP requests. We provide comprehensive documentation, code examples in multiple programming languages, and webhook support for asynchronous processing.",
  },
  {
    question: "What types of email addresses do you validate?",
    answer:
      "We validate all types of email addresses including personal emails (Gmail, Yahoo, Outlook), business emails, international domains, and specialized domains. Our system handles role-based emails, catch-all domains, and provides detailed categorization for each validation result.",
  },
  {
    question: "How do you handle catch-all domains?",
    answer:
      'Catch-all domains are identified and marked as "risky" since they accept all email addresses. We provide additional verification steps for catch-all domains and offer customizable handling options based on your risk tolerance and campaign requirements.',
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact our support team within 14 days of your purchase for a full refund. Free trial users can cancel anytime without charges.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, we provide 24/7 customer support through multiple channels including live chat, email, and phone. Our support team consists of technical experts who can help with integration, troubleshooting, and optimization of your validation workflows.",
  },
  {
    question: "Can I integrate with my CRM?",
    answer:
      "Yes, we offer native integrations with popular CRMs including Salesforce, HubSpot, Pipedrive, and many others. Our API also allows custom integrations with any CRM or marketing automation platform. Contact our team for specific integration requirements.",
  },
  {
    question: "How do you protect my data?",
    answer:
      "We use enterprise-grade security measures including SSL encryption, secure data centers, and strict access controls. We are SOC 2 Type II certified and ISO 27001 compliant. Email addresses are processed securely and not stored after validation unless explicitly requested.",
  },
]

export default function FAQPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Get answers to common questions about contact validation, bulk uploads, GDPR compliance, and our platform.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-purple-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-16 space-y-6">
          <h2 className="text-2xl font-bold">Still have questions?</h2>
          <p className="text-gray-600">Our support team is here to help you get the most out of our platform.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-primary">
              <a href="https://salescentri.com/contact/support-request/live-chat">Live Chat</a>
            </Button>
            <Button variant="outline" asChild className="btn-secondary bg-transparent">
              <a href="https://salescentri.com/get-started/book-demo">Book Demo</a>
            </Button>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
