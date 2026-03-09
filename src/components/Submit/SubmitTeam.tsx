import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Collaborator, Submit } from '../types';
import type { Dispatch, SetStateAction } from 'react';

export default function SubmitTeam({
  collaborator,
  setFormData,
  formData,
}: {
  collaborator: Collaborator[];
  setFormData: Dispatch<SetStateAction<Submit>>;
  formData: Submit;
}) {
  // 👈 ICI : On précise 'submit_form' pour correspondre à la colonne 'section' du SQL
  const { t } = useTranslation('submit_form');

  const [collab, setCollab] = useState<Collaborator>({
    firstname: '',
    lastname: '',
    email: '',
    job: '',
    contribution: '',
  });

  function resetUseState() {
    setCollab({
      firstname: '',
      lastname: '',
      email: '',
      job: '',
      contribution: '',
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCollab(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }

  function addCollaborator() {
    if (
      !collab.firstname.trim() ||
      !collab.lastname.trim() ||
      !collab.job.trim() ||
      !collab.contribution.trim() ||
      !collab.email.trim()
    ) {
      // alert(
      //   t(
      //     'submit_team.alert_empty',
      //     "Veuillez remplir tous les champs avant d'ajouter le collaborateur."
      //   )
      // );
      // return;
    }

    if (/\S+@\S+\.\S+/.test(collab.email.trim()) == false) {
      alert('email non valide pour le collaborateur');
      return;
    }
    setFormData(prevData => ({
      ...prevData,
      collaborator: [...prevData.collaborator, { ...collab }],
    }));

    resetUseState();
  }

  function edit(e: React.ChangeEvent<HTMLInputElement>, id: number) {
    setFormData(prevData => ({
      ...prevData,
      collaborator: prevData.collaborator.map((c, i) => {
        if (i === id) {
          return { ...c, [e.target.name]: e.target.value };
        }
        return c;
      }),
    }));
  }

  const inputClasses =
    'w-full bg-transparent text-white px-2 py-1 focus:outline-none border-b border-transparent focus:border-[#f97316] transition-all placeholder-gray-600';
  const headerClasses = 'px-6 py-4 font-medium text-gray-300 uppercase text-xs';

  return (
    <section className="w-full font-display">
      <div className="mt-10 border border-[#364153] rounded-2xl p-8 flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <img
            className="w-8 h-8 px-2"
            src="/equipe.svg"
            alt=""
            aria-hidden="true"
          />
          <h3 className="text-white text-2xl font-bold">
            {t('submit_team.title', 'Équipe')}
          </h3>
        </div>

        <div className="relative overflow-x-auto border border-[#364153] rounded-xl">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="bg-[#1A1F2E] border-b border-[#364153]">
              <tr>
                <th scope="col" className={headerClasses}>
                  {t('submit_team.firstname', 'Prénom')}
                </th>
                <th scope="col" className={headerClasses}>
                  {t('submit_team.lastname', 'Nom')}
                </th>
                <th scope="col" className={headerClasses}>
                  {t('submit_team.role', 'Rôle')}
                </th>
                <th scope="col" className={headerClasses}>
                  {t('submit_team.contribution', 'Contribution')}
                </th>
                <th scope="col" className={headerClasses}>
                  {t('submit_team.email', 'Email')}
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-gray-300 uppercase text-xs"
                >
                  {t('submit_team.action', 'Action')}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#364153] bg-[#1A1F2E]/50 hover:bg-[#13162A] transition-colors">
                <td className="px-6 py-4">
                  <input
                    type="text"
                    placeholder={t('submit_team.firstname', 'Prénom')}
                    className={inputClasses}
                    onChange={handleChange}
                    value={collab.firstname}
                    name="firstname"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    placeholder={t('submit_team.lastname', 'Nom')}
                    className={inputClasses}
                    onChange={handleChange}
                    value={collab.lastname}
                    name="lastname"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    placeholder={t(
                      'submit_team.role_placeholder',
                      'Ex: Monteur'
                    )}
                    className={inputClasses}
                    onChange={handleChange}
                    value={collab.job}
                    name="job"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    placeholder={t(
                      'submit_team.contrib_placeholder',
                      'Détails...'
                    )}
                    className={inputClasses}
                    onChange={handleChange}
                    value={collab.contribution}
                    name="contribution"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="email"
                    placeholder={t(
                      'submit_team.email_placeholder',
                      'Ex: email'
                    )}
                    className={inputClasses}
                    onChange={handleChange}
                    value={collab.email}
                    name="email"
                  />
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    type="button"
                    onClick={resetUseState}
                    className="text-gray-500 hover:text-white transition-colors font-bold"
                    title={t('submit_team.clear', 'Vider les champs')}
                  >
                    ✕
                  </button>
                </td>
              </tr>

              {collaborator.map((collaboratorElement, id) => (
                <tr
                  key={id}
                  className="border-b border-[#364153] hover:bg-[#13162A] transition-colors"
                >
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      className={inputClasses}
                      value={collaboratorElement.firstname}
                      name="firstname"
                      onChange={e => edit(e, id)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      className={inputClasses}
                      value={collaboratorElement.lastname}
                      name="lastname"
                      onChange={e => edit(e, id)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      className={inputClasses}
                      value={collaboratorElement.job}
                      name="job"
                      onChange={e => edit(e, id)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      className={inputClasses}
                      value={collaboratorElement.contribution}
                      name="contribution"
                      onChange={e => edit(e, id)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="email"
                      className={inputClasses}
                      value={collaboratorElement.email}
                      name="email"
                      onChange={e => edit(e, id)}
                    />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-400 transition-colors font-bold"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          collaborator: formData.collaborator.filter(
                            (_, k) => k !== id
                          ),
                        });
                      }}
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-start">
          <button
            type="button"
            className="flex items-center gap-2 text-[#f97316] hover:text-orange-400 font-bold uppercase text-sm tracking-wider transition-all"
            onClick={addCollaborator}
          >
            <span className="text-xl">+</span>{' '}
            {t('submit_team.add_btn', 'Ajouter un membre')}
          </button>
        </div>
      </div>
    </section>
  );
}
