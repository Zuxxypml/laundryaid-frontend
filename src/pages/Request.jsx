import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaystackButton } from "react-paystack";

// Schemas per step
const schemas = [
  z.object({
    name: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(11, "Phone number is too short"),
  }),
  z.object({
    serviceType: z.enum(["wash&fold", "deluxe", "premium"]),
    pickupOption: z.enum(["pickup", "delivery"]),
  }),
  z.object({
    address: z.string().min(5, "Address is too short"),
  }),
  z.object({}), // Confirmation step
  z.object({}), // Payment step
];

// Pricing data
const packagePricing = {
  "wash&fold": 6000,
  deluxe: 10000,
  premium: 25000,
};

export default function Request() {
  const [step, setStep] = useState(1);

  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemas[step - 1]),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "wash&fold",
      pickupOption: "pickup",
      address: "",
    },
  });

  const next = async () => {
    const valid = await trigger();
    if (valid) setStep((s) => s + 1);
  };

  const back = () => setStep((s) => s - 1);

  const pickupDate = new Date(Date.now() + 86400000)
    .toISOString()
    .split("T")[0];
  const deliveryDate = new Date(Date.now() + 3 * 86400000)
    .toISOString()
    .split("T")[0];

  const onPaymentSuccess = async (ref) => {
    const values = getValues();
    const finalData = {
      ...values,
      pickupDate,
      deliveryDate,
      paymentRef: ref.reference,
      paidAmount: packagePricing[values.serviceType],
    };

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });
      const result = await res.json();
      if (result.success) {
        alert("✅ Booking & payment successful!");
        setStep(1);
      } else {
        alert("❌ Booking failed: " + result.message);
      }
    } catch (err) {
      alert("Error submitting booking: " + err.message);
    }
  };

  const paystackProps = {
    email: getValues("email"),
    amount: packagePricing[getValues("serviceType")] * 100,
    publicKey: "pk_test_adad6377c193642ad173ef1f3653cc0ab7abc89f",
    text: "Pay Now",
    onSuccess: onPaymentSuccess,
    onClose: () => alert("Payment was not completed"),
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pt-24 font-poppins">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#127733]">
        Laundry Booking
      </h2>

      {/* Stepper */}
      <ol className="flex justify-between items-center mb-8 text-xs sm:text-sm">
        {[
          "Personal Info",
          "Service Info",
          "Pickup Info",
          "Confirm",
          "Payment",
        ].map((label, i) => (
          <li key={i} className="flex flex-col items-center w-full">
            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 font-semibold ${
                step === i + 1
                  ? "bg-[#c85f0b] text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {i + 1}
            </span>
            <span
              className={step === i + 1 ? "text-[#c85f0b]" : "text-gray-500"}
            >
              {label}
            </span>
          </li>
        ))}
      </ol>

      {/* Form */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {step === 1 && (
          <>
            <input
              {...register("name")}
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            <input
              {...register("email")}
              placeholder="Email Address"
              type="email"
              className="w-full p-3 border rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <input
              {...register("phone")}
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <label className="block font-medium">Service Type</label>
            <select
              {...register("serviceType")}
              className="w-full p-3 border rounded-lg"
            >
              <option value="wash&fold">Wash & Fold - ₦6,000</option>
              <option value="deluxe">Deluxe - ₦10,000</option>
              <option value="premium">Premium - ₦25,000</option>
            </select>

            <label className="block font-medium mt-4">Pickup Option</label>
            <select
              {...register("pickupOption")}
              className="w-full p-3 border rounded-lg"
            >
              <option value="pickup">Pickup at store</option>
              <option value="delivery">Home Delivery</option>
            </select>
          </>
        )}

        {step === 3 && (
          <>
            <label className="block font-medium">Pickup Date</label>
            <input
              type="text"
              disabled
              value={new Date(pickupDate).toLocaleDateString()}
              className="w-full p-3 border rounded-lg bg-gray-100"
            />

            <label className="block font-medium mt-4">Address</label>
            <textarea
              {...register("address")}
              placeholder="Enter your address"
              className="w-full p-3 border rounded-lg"
            />
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </>
        )}

        {step === 4 && (
          <div className="bg-gray-100 p-4 rounded-lg space-y-2 text-sm">
            {Object.entries(getValues()).map(([k, v]) => (
              <div key={k}>
                <strong className="capitalize">{k}:</strong> {v}
              </div>
            ))}
            <div>
              <strong>Pickup Date:</strong>{" "}
              {new Date(pickupDate).toLocaleDateString()}
            </div>
            <div>
              <strong>Delivery Date:</strong>{" "}
              {new Date(deliveryDate).toLocaleDateString()}
            </div>
            <div>
              <strong>Amount:</strong> ₦
              {packagePricing[getValues("serviceType")].toLocaleString()}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="text-center">
            <PaystackButton
              {...paystackProps}
              className="px-5 py-3 bg-[#c85f0b] text-white font-semibold rounded-lg w-full"
            />
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && step <= 5 && (
            <button
              type="button"
              onClick={back}
              className="px-4 py-2 rounded-full bg-gray-200"
            >
              Back
            </button>
          )}
          {step < 5 && (
            <button
              type="button"
              onClick={next}
              className="px-5 py-2 rounded-full bg-[#c85f0b] text-white"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
