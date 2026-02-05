import { useTranslation } from "react-i18next";

export default function Jury() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("jury")} </h1>
    </div>
  )
}
