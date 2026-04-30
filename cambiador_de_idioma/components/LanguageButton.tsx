
interface LanguageButtonProps {
  label: string;
  onClick: () => void;
}

export const LanguageButton = ({ label, onClick }: LanguageButtonProps) => {
  return (
    <button 
      onClick={onClick}
      style={{ margin: '10px', padding: '8px 16px', cursor: 'pointer' }}
    >
      {label}
    </button>
  );
};