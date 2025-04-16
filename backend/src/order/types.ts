type customerType = {
  fName: string;
  lName: string;
  country: string;
  emirate: string;
  type: string;
  streetAddress: string;
  apartment: string;
  phone: string;
  email: string;
};

type fabricType = {
  type: string;
  coverType: string;
  windowType: string;
  roomName: string;
  liveInDubai: boolean;
  height: number;
  width: number;
  panelType: string;
  hangingStyle: string;
  lining: string;
  installationMethod: string;
  installationItem: {
    name: string;
    meterial: string;
  };
  sqm: number;
  price: number;
};

export { customerType, fabricType };
