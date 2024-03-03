import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Presentation } from "./components/presentation";

export default function Home() {
  return (
    <>
      <Navbar />
      <Presentation />
      <Footer />
    </>
  );
}
