import { createContext, useContext, useState, ReactNode } from "react";
import { ContactModal } from "@/components/ContactModal";

interface ContactModalContextType {
  openContact: (workshopName?: string) => void;
}

const ContactModalContext = createContext<ContactModalContextType>({
  openContact: () => { },
});

export function ContactModalProvider({ children }: { children: ReactNode; }) {
  const [open, setOpen] = useState(false);
  const [workshopName, setWorkshopName] = useState<string | undefined>(undefined);

  const openContact = (selectedWorkshop?: string) => {
    setWorkshopName(selectedWorkshop);
    setOpen(true);
  };

  const handleOpenChange = (state: boolean) => {
    setOpen(state);
    if (!state) {
      setWorkshopName(undefined);
    }
  };

  return (
    <ContactModalContext.Provider value={{ openContact }}>
      {children}
      <ContactModal open={open} onOpenChange={handleOpenChange} workshopName={workshopName} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}
