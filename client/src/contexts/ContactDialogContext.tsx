import { createContext, useContext, useState, ReactNode } from 'react';
import { ContactChoiceDialog } from '@/components/ContactChoiceDialog';

interface ContactDialogContextType {
  openContactDialog: (source?: string) => void;
}

const ContactDialogContext = createContext<ContactDialogContextType | undefined>(undefined);

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState('default');

  const openContactDialog = (dialogSource: string = 'default') => {
    setSource(dialogSource);
    setIsOpen(true);
  };

  return (
    <ContactDialogContext.Provider value={{ openContactDialog }}>
      {children}
      <ContactChoiceDialog 
        open={isOpen} 
        onOpenChange={setIsOpen}
        source={source}
      />
    </ContactDialogContext.Provider>
  );
}

export function useContactDialog() {
  const context = useContext(ContactDialogContext);
  if (context === undefined) {
    throw new Error('useContactDialog must be used within a ContactDialogProvider');
  }
  return context;
}
