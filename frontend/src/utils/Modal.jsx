import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import { useModal } from "./ModalProvider";
import { motion } from "framer-motion";
import UseIconsPack from "./UseIconsPack";
import { Icons } from "./utils";

const Modal = ({ className, children, escKeyAction }) => {
  const [modal, setModal] = useModal();
  const dialogRef = useRef();
  useEffect(() => {
    if (dialogRef.current) {
      setModal(dialogRef.current);
      if (escKeyAction) {
        /** Handle KEY DOWN ESCAPE */
        dialogRef.current.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            event.preventDefault();
          }
        });
        /** Handle CANCEL KEY PRESS */
        dialogRef.current.addEventListener("cancel", (event) => {
          event.preventDefault();
        });
      }
    }
    return () => {
      dialogRef?.current?.removeEventListener("keydown", () => {});
      dialogRef?.current?.removeEventListener("cancel", () => {});
    };
  }, [dialogRef, setModal, escKeyAction]);

  function handleClick(e) {
    if (escKeyAction) return;
    const el = e.target;
    if (el.tagName === "DIALOG") {
      modal?.close();
    }
  }

  return (
    <>
      <motion.dialog
        ref={dialogRef}
        className={twMerge(
          "z-10 outline-none transition-all mixin/w:w-[330px] mixin/gap:gap-3 mixin/p:p-4 mixin/w:md:w-[500px]",
          className
        )}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={handleClick}
      >
        {children}
      </motion.dialog>
    </>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  escKeyAction: PropTypes.bool.isRequired,
};

export const CloseBTN = ({ className }) => {
  const { RiCloseFill } = UseIconsPack();
  const [modal] = useModal();
  return (
    <Icons
      Icon={RiCloseFill}
      className={twMerge("cursor-pointer text-red-500", className)}
      onClick={() => modal?.close()}
    />
  );
};

CloseBTN.propTypes = {
  className: PropTypes.string,
};

export default Modal;
