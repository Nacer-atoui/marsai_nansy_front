import { useTranslation } from 'react-i18next';
import JuryFilmList from '../components/Jury/JuryFilmList';

export default function Jury() {
  const { t } = useTranslation();
  return <JuryFilmList />;
}
