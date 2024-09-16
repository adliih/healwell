import { ReactNode } from "react";

export default function ModalButton({
  children,
  className,
  modalId,
}: {
  children: ReactNode;
  className?: string;
  modalId: string;
}) {
  return (
    <>
      <button
        type="button"
        className={className}
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls={modalId}
        data-hs-overlay={`#${modalId}`}
      >
        {children}
      </button>
    </>
  );
}
