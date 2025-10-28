import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import { ContactChoiceDialog } from '@/components/ContactChoiceDialog';

interface ContactDialogContextType {
  openContactDialog: (source?: string) => void;
}

const ContactDialogContext = createContext<ContactDialogContextType | undefined>(undefined);

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState('default');

  const openContactDialog = useCallback((dialogSource: string = 'default') => {
    setSource(dialogSource);
    setIsOpen(true);
  }, []);

  const contextValue = useMemo(() => ({ openContactDialog }), [openContactDialog]);

  return (
    <ContactDialogContext.Provider value={contextValue}>
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
