// Alert.tsx
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void; // Fixed syntax for the onClose prop
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose} // Fixed usage of the onClose prop
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
