import Attribution from "./components/Attribution";
import CreditCardForm from "./components/CreditCardForm";

export default function App() {
  return (
    <div id="app" className="h-[100vh] flex overflow-y-hidden">
      <img
        src="../src/assets/images/bg-main-desktop.png"
        alt="bg-image"
        className="w-[35%] h-[100%]"
      />
      <CreditCardForm />
    </div>
  );
}
