const QUANTITY_GUITARS = 100;

export const promocodesMock = {
  GITARAHIT: {
    value: 10,
    type: `percent`,
  },
  SUPERGITARA: {
    value: 700,
    type: `value`,
  },
  GITARA2020: {
    value: 3500,
    type: `value`,
    maxPercent: 30,
  },
}

export const typeOfStrings = {
  electro: [`4`, `6`, `7`],
  acoustic: [`6`, `7`, `12`],
  ukulele: [`4`],
}

export const typeOfGuitars = {
  electro: `Электрогитара`,
  acoustic: `Акустика`,
  ukulele: `Укулеле`,
}

const guitars = [
  {
    vendorCode: `SO757575`,
    name:	`Честер Bass`,
    type: `electro`,
    numberOfReviews: 15,
    numberOfStrings: 7,
    price: 17500,
    rating: 4,
    photo: `electro`,
  },
  {
    vendorCode: `TK129049`,
    name:	`СURT Z300`,
    type: `electro`,
    numberOfReviews: 9,
    numberOfStrings: 7,
    price: 29500,
    rating: 4,
    photo: `electro`,
  },
  {
    vendorCode: `RO111111`,
    name:	`Roman LX`,
    type: `ukulele`,
    numberOfReviews: 21,
    numberOfStrings: 4,
    price: 6800,
    rating: 4,
    photo: `ukulele`,
  },
  {
    vendorCode: `TK436457`,
    name:	`СURT T300`,
    type: `electro`,
    numberOfReviews: 15,
    numberOfStrings: 6,
    price: 30000,
    rating: 4,
    photo: `electro`,
  },
  {
    vendorCode: `DI192138`,
    name:	`Dania Super`,
    type: `acoustic`,
    numberOfReviews: 5,
    numberOfStrings: 7,
    price: 3500,
    rating: 4,
    photo: `acoustic`,
  },
  {
    vendorCode: `SO934345`,
    name:	`Честер WX`,
    type: `electro`,
    numberOfReviews: 17,
    numberOfStrings: 6,
    price: 15300,
    rating: 4,
    photo: `electro`,
  },
  {
    vendorCode: `DI082347`,
    name:	`Dania VX`,
    type: `ukulele`,
    numberOfReviews: 5,
    numberOfStrings: 4,
    price: 2200,
    rating: 4,
    photo: `ukulele`,
  },
  {
    vendorCode: `SO135646`,
    name:	`Честер Plus`,
    type: `electro`,
    numberOfReviews: 27,
    numberOfStrings: 4,
    price: 30000,
    rating: 4,
    photo: `electro`,
  },
  {
    vendorCode: `VO154751`,
    name:	`Виолана 300`,
    type: `acoustic`,
    numberOfReviews: 3,
    numberOfStrings: 7,
    price: 1700,
    rating: 4,
    photo: `acoustic`,
  },
  {
    vendorCode: `TK244556`,
    name:	`СURT Clasic`,
    type: `electro`,
    numberOfReviews: 20,
    numberOfStrings: 4,
    price: 23000,
    rating: 4,
    photo: `electro`,
  },
  {
    vendorCode: `TK134663`,
    name:	`СURT Z250`,
    type: `electro`,
    numberOfReviews: 19,
    numberOfStrings: 4,
    price: 18700,
    rating: 4,
    photo: `electro`,
  },
  {
    vendorCode: `SO123212`,
    name:	`Честер 7X`,
    type: `electro`,
    numberOfReviews: 30,
    numberOfStrings: 7,
    price: 35000,
    rating: 4,
    photo: `electro`,
  },
  {
    vendorCode: `SO123234`,
    name:	`Честер 6V`,
    type: `electro`,
    numberOfReviews: 28,
    numberOfStrings: 6,
    price: 14900,
    rating: 4,
    photo: `electro`,
  },
  {
    vendorCode: `VO519510`,
    name:	`Виолана Mix`,
    type: `acoustic`,
    numberOfReviews: 7,
    numberOfStrings: 6,
    price: 7600,
    rating: 4,
    photo: `acoustic`,
  },
  {
    vendorCode: `VO457369`,
    name:	`Виолана 250x`,
    type: `acoustic`,
    numberOfReviews: 19,
    numberOfStrings: 6,
    price: 6500,
    rating: 4,
    photo: `acoustic`,
  },
  {
    vendorCode: `FB625903`,
    name:	`Фабио Лайт`,
    type: `acoustic`,
    numberOfReviews: 26,
    numberOfStrings: 7,
    price: 12000,
    rating: 4,
    photo: `acoustic`,
  },
  {
    vendorCode: `FB576948`,
    name:	`Фабио L100`,
    type: `acoustic`,
    numberOfReviews: 31,
    numberOfStrings: 7,
    price: 9900,
    rating: 4,
    photo: `acoustic`,
  },
  {
    vendorCode: `LU012032`,
    name:	`Liana Z200`,
    type: `acoustic`,
    numberOfReviews: 28,
    numberOfStrings: 12,
    price: 8900,
    rating: 4,
    photo: `acoustic`,
  },
  {
    vendorCode: `LU546853`,
    name:	`Liana Z100`,
    type: `acoustic`,
    numberOfReviews: 34,
    numberOfStrings: 12,
    price: 10500,
    rating: 4,
    photo: `acoustic`,
  },
  {
    vendorCode: `LU458283`,
    name:	`Liana Z300`,
    type: `acoustic`,
    numberOfReviews: 9,
    numberOfStrings: 6,
    price: 13300,
    rating: 4,
    photo: `acoustic`,
  },
  {
    vendorCode: `RO324341`,
    name:	`Roman RX`,
    type: `ukulele`,
    numberOfReviews: 37,
    numberOfStrings: 4,
    price: 4800,
    rating: 4,
    photo: `ukulele`,
  },
  {
    vendorCode: `RO214235`,
    name:	`Roman TX`,
    type: `ukulele`,
    numberOfReviews: 5,
    numberOfStrings: 4,
    price: 1900,
    rating: 4,
    photo: `ukulele`,
  },
  {
    vendorCode: `DI132414`,
    name:	`Dania U100`,
    type: `ukulele`,
    numberOfReviews: 23,
    numberOfStrings: 4,
    price: 2500,
    rating: 4,
    photo: `ukulele`,
  },
  {
    vendorCode: `DI934754`,
    name:	`Dania WR`,
    type: `ukulele`,
    numberOfReviews: 3,
    numberOfStrings: 4,
    price: 3800,
    rating: 4,
    photo: `ukulele`,
  },
  {
    vendorCode: `DI034292`,
    name:	`Dania LE`,
    type: `ukulele`,
    numberOfReviews: 10,
    numberOfStrings: 4,
    price: 4100,
    rating: 4,
    photo: `ukulele`,
  },
  {
    vendorCode: `MI193214`,
    name:	`Mirana V10`,
    type: `ukulele`,
    numberOfReviews: 14,
    numberOfStrings: 4,
    price: 2700,
    rating: 4,
    photo: `ukulele`,
  },
  {
    vendorCode: `VO043244`,
    name:	`Виолана Mini`,
    type: `ukulele`,
    numberOfReviews: 29,
    numberOfStrings: 4,
    price: 6700,
    rating: 4,
    photo: `ukulele`,
  },
];

export default guitars;
