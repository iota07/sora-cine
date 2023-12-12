import { useState, useEffect } from "react";
import { ButtonSubscribe } from "./Buttons";
import validator from "validator";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (email) {
      setError("");
    }
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validator.isEmail(email)) {
        setError("Invalid email format");
        return;
      }
      const sanitizedEmail = validator.escape(email);

      const res = await fetch("http://localhost:3200/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: sanitizedEmail }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setSuccess(true);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }
  };

  return (
    <section className="newsletter">
      <h3 className="pb-2 pt-2 text-2xl xl:text-4xl">Newsletter</h3>
      {success && <p className="text-green-500">Subscribed successfully!</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form
        className="flex gap-x-3 gap-y-3 flex-col w-72 items-end"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="bg-zinc-200 text-teal-800 rounded-lg px-4 py-2 placeholder-slate-200 w-72"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <ButtonSubscribe>Subscribe</ButtonSubscribe>
      </form>
    </section>
  );
}

export { Newsletter };
