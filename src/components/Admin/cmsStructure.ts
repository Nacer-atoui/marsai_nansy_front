// src/components/Admin/cmsStructure.ts

export const pageStructure = {
  
    // --- SECTION 1 : LOCATION (Ta page actuelle) ---
    location: {
        title: "Lieu & Salles",
        icon: "MapPin",
        groups: [
            {
                groupTitle: "En-tête Principal",
                fields: [
                    { key: "location.badge", label: "Petit Badge (Haut)", type: "text" },
                    { key: "location.name.part1", label: "Titre Principal (Partie Blanche)", type: "text" },
                    { key: "location.name.part2", label: "Titre Principal (Partie Orange)", type: "text" },
                    { key: "location.old.name", label: "Sous-titre (Ex Docks...)", type: "text" },
                ]
            },
            {
                groupTitle: "Salle des Sucres",
                fields: [
                    { key: "location.room.sucres.t1", label: "Nom Salle (Blanc)", type: "text" },
                    { key: "location.room.sucres.t2", label: "Nom Salle (Orange)", type: "text" },
                    { key: "location.room.sucres.desc", label: "Description", type: "textarea" },
                    { key: "location.room.sucres.img", label: "Photo de la salle", type: "image" }
                ]
            },
            {
                groupTitle: "Salle Plaza",
                fields: [
                    { key: "location.room.plaza.t1", label: "Nom Salle (Blanc)", type: "text" },
                    { key: "location.room.plaza.t2", label: "Nom Salle (Orange)", type: "text" },
                    { key: "location.room.plaza.desc", label: "Description", type: "textarea" }
                ]
            }
        ]
    },

   
    // --- SECTION 2 : FILMS EN COMPETITION (Option 2 : Mode Automatique) ---
    films_competition: {
        title: "Films en Compétition",
        icon: "Film",
        groups: [
            {
                groupTitle: "En-tête de la section",
                fields: [
                    { key: "films.title.t1", label: "Titre (Partie Blanche)", type: "text" },
                    { key: "films.title.t2", label: "Titre (Partie Orange)", type: "text" },
                    { key: "films.description", label: "Texte de présentation", type: "textarea" }
                ]
            },
            {
                groupTitle: "Mots-clés des cartes (Général)",
                fields: [
                    { key: "films.labels.director", label: "Mot 'Réalisateur'", type: "text" },
                    { key: "films.labels.origin", label: "Mot 'Origine'", type: "text" }
                ]
            },
            {
                groupTitle: "Bouton d'action",
                fields: [
                    { key: "films.link.text", label: "Texte du lien (ex: voir toute la selection)", type: "text" }
                ]
            }
        ]
    }
};