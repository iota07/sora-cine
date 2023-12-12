import { useState } from "react";
import { ButtonPrimary, ButtonSecondary } from "./Buttons";

const ModalCookie = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section
      className="fixed inset-0 w-full h-full flex items-center justify-center  backdrop-blur-sm z-50"
      style={{ display: modalOpen ? "absolute" : "none" }}
    >
      <article className="bg-zinc-100 p-7 rounded-lg max-w-xs">
        <article className="text-center">
          <h3 className="">Cookie Policy</h3>
          <p className="">
            Our website uses cookies to improve your experience. To find out
            more, please read our{" "}
            <a href="https://www.google.com">Privacy Policy</a>
          </p>
        </article>
        <article className="text-center grid">
          <ButtonPrimary onClick={toggleModal}>Accept</ButtonPrimary>
          <ButtonSecondary onClick={closeModal}>Decline</ButtonSecondary>
        </article>
      </article>
    </section>
  );
};

export { ModalCookie };
