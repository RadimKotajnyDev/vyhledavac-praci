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

export type SearchModalValuesType = {
    obor_stroj: any;
    obor_it: any;
    obor_elektro: any;
    rozmezi_let: any;
    jmeno_prijmeni: any;
    vedouci: any;
    predmet: any;
    tagy: any;
  }