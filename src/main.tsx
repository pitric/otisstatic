import ReactDOMClient from 'react-dom/client';
import './index.css'
import PageSet from './pages/pageSet.tsx'
import i18next from 'i18next';
import translationEN from './locales/localEnglish.json'
import translationES from './locales/localSpanish.json'
import { I18nextProvider } from 'react-i18next';

const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement);

i18next.init({
  interpolation: { escapeValue: false},
  lng: 'en',
  resources: {
    en: {
      translation: translationEN
    },
    es: {
      translation: translationES
    }
  }
});

(async () => {
  await Office.onReady();

  root.render(
    <I18nextProvider i18n={i18next}>
      <PageSet />
    </I18nextProvider>
  );

})();
