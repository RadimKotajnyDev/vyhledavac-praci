export type PraceType = {
  id?: number,
  skolni_rok?: string,
  tema?: string,
  obor?: string,
  predmet?: string,
  jmeno_prijmeni?: string,
  vedouci?: string,
  Message?: string;
  concat(newData: any): APIData | undefined;
}


export type APIData = {
  Message?: string;
  pocet_stran: number,
  prace: PraceType[]
  concat(prace: PraceType[]): APIData | undefined;
};