import { Title } from "@/components";
import { Accordion, Card } from ".././modules";
import { CTA } from ".././sections";

export default function Home() {
  const items = [
    {
      id: "item 1",
      header: "Item 1",
      content: "Here is the content hiding in item 1"
    },
    {
      id: "item 2",
      header: "Item 2",
      content: "Here is the content hiding in item 2"
    },
    {
      id: "item 3",
      header: "Item 3",
      content: "Here is the content hiding in item 3"
    }
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <header className="p-4 w-full mb-12">
        <Title text="Page heading" />
        <nav className="mt-2">
          <a href="#" className="text-lg font-medium mr-4 hover:underline">
            Home
          </a>
          <a href="#" className="text-lg font-medium mr-4 hover:underline">
            About
          </a>
          <a href="#" className="text-lg font-medium hover:underline">
            Contact
          </a>
        </nav>
      </header>

      <div className="my-12">
        <Card />
      </div>
      <div className="my-12 w-full">
        <CTA />
      </div>
      <div className="my-12 w-full">
        <Accordion items={items} />
      </div>

      <footer className="p-4 text-center w-full">
        <p className="text-sm"> © 2024 copyright.</p>
        <nav className="mt-2">
          <a href="#" className="text-sm mr-4 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:underline">
            Terms of Service
          </a>
        </nav>
      </footer>
    </main>
  );
}
