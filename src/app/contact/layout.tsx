import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Letlotlo International",
  description: "Get in touch with Letlotlo International. We'd love to discuss your next project and how we can help bring your vision to life.",
  keywords: ["contact", "get in touch", "project inquiry", "consultation", "letlotlo international"],
  openGraph: {
    title: "Contact - Letlotlo International",
    description: "Get in touch with Letlotlo International. We'd love to discuss your next project and how we can help bring your vision to life.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}