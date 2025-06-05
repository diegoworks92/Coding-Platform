import { useTranslation } from "react-i18next";

type LanguageButtonProps = {
  language: string;
  name: string;
};

const LanguageButton = ({ language, name }: LanguageButtonProps) => {
  const { i18n } = useTranslation();

  return (
    <button
      className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
      onClick={() => i18n.changeLanguage(language)} // ✅ Pasar el string directamente
    >
      {name}
    </button>
  );
};

export default LanguageButton;
