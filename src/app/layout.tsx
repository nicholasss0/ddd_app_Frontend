import "./globals.css";
import { ContactsProvider } from "@/context/ContactsContext";

export const metadata = {
  title: "Agenda App",
  description: "Uma agenda simples com Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ContactsProvider>{children}</ContactsProvider>
      </body>
    </html>
  );
}
