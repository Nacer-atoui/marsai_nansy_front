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
}

export interface Media {
  //hassubs contient des commentaires? et srt sous titre
  hassubs: boolean;
  srt: string;
  statut: string;
}

export interface Collaborator{
  firstname: string;
  lastname: string;
  email: string;
  job: string;
  contribution: string;
}

export interface Ia{
  stack: string,
  method:string
}

export interface Image {
  url: string;
}

export type Submit = {
  director: Director;
  metadata: MetaData;
  media: Media;
  ia: Ia;
  collaborator: Collaborator[];
  image: Image;
};
