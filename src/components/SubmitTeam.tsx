import { useState } from "react";
import type { Collaborator, Submit } from "./types";
import type { Dispatch , SetStateAction} from "react";


export default function SubmitTeam({
    collaborator,
    setFormData,
    formData
}: {
    collaborator: Collaborator[],
    setFormData: Dispatch<SetStateAction<Submit>>,
    formData: Submit
}) {

    const [collab, setCollab] = useState<Collaborator>({
        firstname: "",
        lastname: "",
        email: "",
        job: "",
        contribution: "",
    })


    function resetUseState() {
        setCollab({
            firstname: "",
            lastname: "",
            email: "",
            job: "",
            contribution: "",
        })
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const { name, value } = e.target;
        
        setCollab(prevData => ({
            ...prevData,     // On garde toutes les anciennes valeurs
            [name]: value    // On écrase seulement celle qui correspond au "name" de l'input
        }));

    }

    function addCollaborator() {
        const newFormData = formData;

        console.log(collab)

        const addColab = {
            firstname : collab.firstname,
            lastname: collab.lastname,
            job: collab.job,
            contribution: collab.contribution,
            email: collab.email
        }

        newFormData.collaborator.push(addColab)
        
        setFormData(newFormData)
        console.log(formData.collaborator)
        resetUseState();
        
    }

    function edit(e: React.ChangeEvent<HTMLInputElement>, id: number) {
        
        console.log(formData.collaborator[id])
        let collaborator = "collaborator"

        setFormData(prevData=> ({
            ...prevData,
            [collaborator]: prevData.collaborator.map((collab, i) => {
                if (i == id) {
                    return {
                        ...collab,
                        [e.target.name]: e.target.value
                    }
                }
                return collab;
            })
        }))
        

        console.log(formData)
    }

    const inputClasses = "w-full bg-transparent text-white px-2 py-1 focus:outline-none border-b border-transparent focus:border-[#f97316] transition-all placeholder-gray-600";
    const headerClasses = "px-6 py-4 font-medium text-gray-300 uppercase text-xs";

    return (
        <section className="w-full">
            <div className="mt-10 border border-[#364153] rounded-2xl p-8 flex flex-col gap-8 bg-[#0B0E14]">

                <div className="flex items-center gap-3">
                    <img className="w-8 h-8 px-2" src="/equipe.svg" alt="" aria-hidden="true" />
                    <h3 className="text-white text-2xl font-bold">Équipe</h3>
                </div>

                <div className="relative overflow-x-auto border border-[#364153] rounded-xl">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="bg-[#1A1F2E] border-b border-[#364153]">
                            <tr>
                                <th scope="col" className={headerClasses}>Prénom</th>
                                <th scope="col" className={headerClasses}>Nom</th>
                                <th scope="col" className={headerClasses}>Rôle</th>
                                <th scope="col" className={headerClasses}>Contribution</th>
                                <th scope="col" className={headerClasses}>Email</th>
                                <th scope="col" className="px-6 py-4 text-center text-gray-300 uppercase text-xs">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Ligne statique d'exemple */}
                            { }
                            <tr className="border-b border-[#364153] hover:bg-[#13162A] transition-colors">
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        placeholder="Prénom"
                                        className={inputClasses}
                                        onChange={handleChange}
                                        value={collab.firstname}
                                        name="firstname"
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        placeholder="Nom"
                                        className={inputClasses}
                                        onChange={handleChange}
                                        value={collab.lastname}
                                        name="lastname"
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        placeholder="Ex: Monteur"
                                        className={inputClasses}
                                        onChange={handleChange}
                                        value={collab.job}
                                        name="job"
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        placeholder="Détails..."
                                        className={inputClasses}
                                        onChange={handleChange}
                                        value={collab.contribution}
                                        name="contribution"
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        placeholder="Ex: email"
                                        className={inputClasses}
                                        onChange={handleChange}
                                        value={collab.email}
                                        name="email"
                                    />
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button
                                        type="button"
                                        className="text-red-500 hover:text-red-400 transition-colors font-bold"
                                        
                                    >
                                        ✕
                                    </button>
                                </td>
                            </tr>
                            {
                                collaborator.map((collaboratorElement, id) => {
                                    return <tr key={id}>
                                        <td className="px-6 py-4">
                                            <input type="text" value={ collaboratorElement.firstname} name="firstname" onChange={(e) => edit(e, id)}/>
                                        </td>
                                        <td className="px-6 py-4">
                                            <input type="text" value={ collaboratorElement.lastname} name="lastname"  onChange={(e) => edit(e, id)}/>
                                        </td>
                                        <td className="px-6 py-4">
                                            <input type="text" value={ collaboratorElement.job} name="job" onChange={(e) => edit(e, id)}/>
                                        </td>
                                        <td className="px-6 py-4">
                                            <input type="text" value={ collaboratorElement.contribution} name="contribution"  onChange={(e) => edit(e, id)}/>
                                        </td>
                                        <td className="px-6 py-4">
                                            <input type="text" value={ collaboratorElement.email} name="email"  onChange={(e) => edit(e, id)}/>
                                        </td>
                                            <td className="px-6 py-4 text-center">
                                                <button
                                                    type="button"
                                                    className="text-red-500 hover:text-red-400 transition-colors font-bold"
                                                onClick={(() => {
                                                    setFormData({ ...formData, collaborator: formData.collaborator.filter((_, k) => k !== id) })
                                                    })}
                                                >
                                                    ✕
                                                </button>
                                            </td>
                                        </tr>
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>

            
                <div className="flex justify-start">
                    <button
                        type="button"
                        className="flex items-center gap-2 text-[#f97316] hover:text-orange-400 font-bold uppercase text-sm tracking-wider transition-all"
                        onClick={addCollaborator}
                    >
                        <span className="text-xl">+</span> Ajouter un membre
                    </button>
                </div>
            </div>
        </section>
    );
}