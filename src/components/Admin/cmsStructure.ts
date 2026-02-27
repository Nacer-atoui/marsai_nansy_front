export const pageStructure = {
  // --- SECTION : HERO ---
  hero: {
    title: 'Hero Accueil',
    icon: 'Sparkles',
    groups: [
      {
        groupTitle: 'Textes Principaux',
        fields: [
          { key: 'hero_subtitle', label: 'Accroche Principale', type: 'textarea' },
          { key: 'intro_text', label: "Sous-titre d'introduction", type: 'text' },
        ],
      },
      {
        groupTitle: 'Paramètres du Site',
        fields: [
          { 
            key: 'hero_primary_color', 
            label: 'Couleur Primaire (CMS)', 
            type: 'color' 
          },
          { 
            key: 'event_date', // 👈 C'est la clé qu'on utilise dans ton Controller/Model !
            label: 'Date & Heure du Compteur', 
            type: 'datetime-local' // 👈 Type spécial pour jour/heure/minute/seconde
          },
        ],
      },
    ],
  },

  // --- SECTION : PROJET MARSAI ---
  mars_section: {
    title: 'Le Projet (Mars AI)',
    icon: 'Layers',
    groups: [
      {
        groupTitle: 'En-tête',
        fields: [
          { key: 'mars_project_title', label: 'Titre (LE PROJET)', type: 'text' },
          { key: 'section_mars_subtitle', label: 'Sous-titre (Description)', type: 'textarea' },
        ],
      },
      {
        groupTitle: 'Cartes (Contenu)',
        fields: [
          { key: 'challenge_title', label: 'C1 - Titre', type: 'text' },
          { key: 'section_50_text', label: 'C1 - Description', type: 'textarea' },
          { key: 'btn_participate', label: 'C1 - Bouton', type: 'text' },
          { key: 'masterclass_title', label: 'C2 - Titre', type: 'text' },
          { key: 'section_prix_text', label: 'C2 - Description', type: 'textarea' },
          { key: 'btn_reserve', label: 'C2 - Bouton', type: 'text' },
          { key: 'future_cinema_title', label: 'C3 - Titre', type: 'text' },
          { key: 'section_jury_text', label: 'C3 - Description', type: 'textarea' },
          { key: 'btn_view_program', label: 'C3 - Bouton', type: 'text' },
        ],
      },
    ],
  },

  // --- SECTION : FILM SELECTION ---
  movie_selection: {
    title: 'Sélection de Films',
    icon: 'Film',
    groups: [
      {
        groupTitle: 'En-tête de la section',
        fields: [
          { key: 'films.title.t1', label: 'Titre - Partie 1 (Blanc)', type: 'text' },
          { key: 'films.title.t2', label: 'Titre - Partie 2 (Orange)', type: 'text' },
          { key: 'films.description', label: 'Description (Sous le titre)', type: 'textarea' },
        ],
      },
      {
        groupTitle: 'Labels des Cartes',
        fields: [
          { key: 'films.labels.director', label: 'Label Réalisateur', type: 'text' },
          { key: 'films.labels.origin', label: 'Label Origine', type: 'text' },
          { key: 'films.link.text', label: 'Texte bouton "Toute la sélection"', type: 'text' },
        ],
      },
    ],
  },

  // --- SECTION : OBJECTIF DU FESTIVAL ---
  festival_objectifs: {
    title: 'Objectifs du Festival',
    icon: 'Target',
    groups: [
      {
        groupTitle: 'Titre de la section',
        fields: [
          { key: 'objectif_main_title_part1', label: 'Titre (Blanc)', type: 'text' },
          { key: 'objectif_main_title_part2', label: 'Titre (Orange)', type: 'text' },
        ],
      },
      {
        groupTitle: 'Contenu des Cartes',
        fields: [
          { key: 'objectif_card1_title', label: 'C1 - Titre', type: 'text' },
          { key: 'objectif_card1_desc', label: 'C1 - Description', type: 'textarea' },
          { key: 'objectif_card2_title', label: 'C2 - Titre', type: 'text' },
          { key: 'objectif_card2_desc', label: 'C2 - Description', type: 'textarea' },
          { key: 'objectif_card3_title', label: 'C3 - Titre', type: 'text' },
          { key: 'objectif_card3_desc', label: 'C3 - Description', type: 'textarea' },
        ],
      },
    ],
  },

  // --- SECTION : FORMAT DE LA SELECTION ---
  event_format: {
    title: 'Format de la Sélection',
    icon: 'Layout',
    groups: [
      {
        groupTitle: 'En-tête',
        fields: [
          { key: 'format_title_p1', label: 'Titre - Partie 1 (Blanc)', type: 'text' },
          { key: 'format_title_p2', label: 'Titre - Partie 2 (Orange)', type: 'text' },
          { key: 'format_subtitle', label: 'Sous-titre (Gris)', type: 'text' },
        ],
      },
      {
        groupTitle: 'Les 4 Cartes',
        fields: [
          { key: 'format_card1_title', label: 'C1 - Titre', type: 'text' },
          { key: 'format_card1_label', label: 'C1 - Label', type: 'text' },
          { key: 'format_card1_desc', label: 'C1 - Description', type: 'textarea' },
          { key: 'format_card2_title', label: 'C2 - Titre', type: 'text' },
          { key: 'format_card2_label', label: 'C2 - Label', type: 'text' },
          { key: 'format_card2_desc', label: 'C2 - Description', type: 'textarea' },
          { key: 'format_card3_title', label: 'C3 - Titre', type: 'text' },
          { key: 'format_card3_label', label: 'C3 - Label', type: 'text' },
          { key: 'format_card3_desc', label: 'C3 - Description', type: 'textarea' },
          { key: 'format_card4_title', label: 'C4 - Titre', type: 'text' },
          { key: 'format_card4_label', label: 'C4 - Label', type: 'text' },
          { key: 'format_card4_desc', label: 'C4 - Description', type: 'textarea' },
        ],
      },
    ],
  },

  // --- SECTION : ABOUT (Corrigée pour ton composant React) ---
  about: {
    title: 'À Propos',
    icon: 'Info',
    groups: [
      {
        groupTitle: 'Titre de Section (3 parties)',
        fields: [
          { key: 'about_title_part1', label: 'Titre (Début)', type: 'text' },
          { key: 'about_title_highlight', label: 'Titre (Orange)', type: 'text' },
          { key: 'about_title_part2', label: 'Titre (Fin)', type: 'text' },
        ],
      },
      {
        groupTitle: 'Étapes & Détails',
        fields: [
          { key: 'about_step1', label: 'Étape 1', type: 'textarea' },
          { key: 'about_step2', label: 'Étape 2', type: 'textarea' },
          { key: 'about_step3', label: 'Étape 3', type: 'textarea' },
          { key: 'about_proj_title', label: 'Titre Projections', type: 'text' },
          { key: 'about_proj_desc', label: 'Description Projections', type: 'textarea' },
          { key: 'about_work_title', label: 'Titre Workshops', type: 'text' },
          { key: 'about_work_desc', label: 'Description Workshops', type: 'textarea' },
          { key: 'about_prize_title', label: 'Titre Prix', type: 'text' },
          { key: 'about_prize_desc', label: 'Description Prix', type: 'textarea' },
        ],
      },
    ],
  },

  // --- SECTION : LOCATION ---
  location: {
    title: 'Lieu & Salles',
    icon: 'MapPin',
    groups: [
      {
        groupTitle: 'Identité du Lieu',
        fields: [
          { key: 'location.badge', label: 'Badge', type: 'text' },
          { key: 'location.name.part1', label: 'Nom Ligne 1', type: 'text' },
          { key: 'location.name.part2', label: 'Nom Ligne 2', type: 'text' },
          { key: 'location.old.name', label: 'Sous-titre', type: 'text' },
          { key: 'location.main.desc', label: 'Texte Principal', type: 'textarea' },
        ],
      },
      {
        groupTitle: 'Salles',
        fields: [
          { key: 'location.room.sucres.t1', label: 'Sucres - Blanc', type: 'text' },
          { key: 'location.room.sucres.t2', label: 'Sucres - Orange', type: 'text' },
          { key: 'location.room.sucres.desc', label: 'Sucres - Description', type: 'textarea' },
          { key: 'location.room.plaza.t1', label: 'Plaza - Blanc', type: 'text' },
          { key: 'location.room.plaza.t2', label: 'Plaza - Orange', type: 'text' },
          { key: 'location.room.plaza.desc', label: 'Plaza - Description', type: 'textarea' },
        ],
      },
    ],
  },

  // --- SECTION : MARS AI NIGHT ---
  night_event: {
    title: 'Soirée de Clôture (Night)',
    icon: 'Moon',
    groups: [
      {
        groupTitle: 'Textes & Infos',
        fields: [
          { key: 'night_label', label: 'Badge / Titre', type: 'text' },
          { key: 'night_description', label: 'Description', type: 'textarea' },
          { key: 'night_date', label: 'Date', type: 'text' },
          { key: 'night_time', label: 'Heure', type: 'text' },
          { key: 'night_btn_pass', label: 'Texte Bouton', type: 'text' },
        ],
      },
    ],
  },

  // --- SECTION : SPONSORS ---
  sponsors: {
    title: 'Partenaires',
    icon: 'Handshake',
    groups: [
      {
        groupTitle: 'Textes',
        fields: [
          { key: 'sponsors_label', label: 'Label', type: 'text' },
          { key: 'sponsors_title_part1', label: 'Titre Blanc', type: 'text' },
          { key: 'sponsors_title_highlight', label: 'Titre Orange', type: 'text' },
        ],
      },
    ],
  },
};