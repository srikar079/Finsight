import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const ModalContext = createContext();

/** Modal Provider  */
const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);
  return (
    <ModalContext.Provider value={[modal, setModal]}>
      {children}
    </ModalContext.Provider>
  );
};

/* Custom hook to use the Modal context */
export const useModal = () => useContext(ModalContext);

ModalProvider.propTypes = {
  children: PropTypes.any,
};
export default ModalProvider;
