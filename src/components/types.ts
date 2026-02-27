export interface Director {
  civility: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  country: string;
  birthday: string;
  address: {
    street: string;
    zipcode: string;
    city: string;
  };
}

export interface MetaData {
  original_title: string;
  original_synopsis: string;
  duration: number;
  tags: string;
  language: string;
}

// On garde ici uniquement les métadonnées liées aux médias
export interface Media {
  hassubs: boolean;
  srt: string; // Le nom du fichier ou le contenu du sous-titre
  statut: string;
}

export interface Collaborator {
  firstname: string;
  lastname: string;
  email: string;
  job: string;
  contribution: string;
}

export interface Ia {
  stack: string;
  method: boolean;
  creative_process: string;
}

export type Submit = {
  director: Director;
  metadata: MetaData;
  media: Media;
  ia: Ia;
  collaborator: Collaborator[];
  // FICHIERS : Ils vivent ici pour faciliter le FormData.append()
  video: File | null;      // Directement le fichier
  cover_img: File | null;  // L'affiche
  image: File[];           // La galerie
};
