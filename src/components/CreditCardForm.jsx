import {
  cardName,
  cardNumber,
  cardMonth,
  cardYear,
  cardCvc,
} from "../constants/docVars";
export default function CreditCardForm() {
  const MAX_CREDIT_NUMBER = "19";

  const handleNumbersMargin = (evt) => {
    let value = evt.target.value.replace(/\D/g, ""); // remove all non-digit characters
    value = value.match(/.{1,4}/g)?.join(" ") || value; // add space every 4 digits

    evt.target.value = value;
  };

  const handleDateInput = (evt) => {
    // remove any non-digit characters
    let value = evt.target.value.replace(/\D/g, "");

    // limit the input to a maximum of 2 digits
    if (value.length > 2) {
      value = value.slice(0, 2);
    }

    // set the sanitized value back to the input field
    evt.target.value = value;
  };

  const handleCvcInput = (evt) => {
    let value = evt.target.value.replace(/\D/g, "");

    if (value.length > 3) {
      value = value.slice(0, 3);
    }
    evt.target.value = value;
  };

  const handleSubmitValidation = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="w-[65%] h-[100%] flex flex-col justify-center items-center">
      <form
        method="post"
        action="#"
        className="flex flex-col w-[55%]"
        onSubmit={handleSubmitValidation}
      >
        <div id="card-name" className="flex flex-col mb-5">
          <label htmlFor="cardName" className=" uppercase mb-2 text-[#2f0e44]">
            cardholder name
          </label>
          <input
            type="text"
            name="cardName"
            className="border border-grey-500 p-2 rounded-md"
            placeholder="e.g. AHMED ALOUFI"
            id="card-name"
          />
        </div>
        <div id="card-number" className="flex flex-col mb-4">
          <label
            htmlFor="cardNumber"
            className=" uppercase mb-2 text-[#2f0e44]"
          >
            card number
          </label>
          <input
            type="text"
            name="cardNumber"
            maxLength={MAX_CREDIT_NUMBER}
            className="border border-grey-500 p-2 rounded-md"
            placeholder="e.g. 1234 5678 9123 0000"
            onInput={handleNumbersMargin}
            id="card-number"
          />
        </div>
        <div id="card-creds" className="flex mt-2">
          <div id="card-date" className=" mr-4 flex-col">
            <label htmlFor="" className="uppercase text-[#2f0e44]">
              exp. date (mm/yy)
            </label>
            <div className="mt-4">
              <input
                type="text"
                name="card-month"
                placeholder="MM"
                className=" w-16 p-2 mr-3 border rounded-md"
                onInput={handleDateInput}
                id="card-month"
              />
              <input
                type="text"
                name="card-year"
                placeholder="YY"
                className="w-16 p-2 border rounded-md"
                onInput={handleDateInput}
                id="card-year"
              />
            </div>
          </div>
          <div id="card-cvc" className="flex flex-col">
            <label htmlFor="cardCvc" className="uppercase mb-4 text-[#2f0e44]">
              cvc
            </label>
            <input
              type="text"
              name="cardCvc"
              className="border rounded-md p-2"
              placeholder="e.g. 123"
              onInput={handleCvcInput}
              id="card-cvc"
            />
          </div>
        </div>
        <button className=" text-white bg-[#21092f] p-3 w-full mt-9 rounded-md hover:opacity-[80%]">
          Confirm
        </button>
      </form>
    </div>
  );
}
