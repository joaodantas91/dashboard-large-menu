export type Item = {
  id: number;
  externalId: string;
  name: string;
  internalName: string;
  description: string;
  deliveryFlag: number;
  pickupFlag: number;
  seatFlag: number;
  price: number;
  visible: number;
  availabilityType: string;
  sku: string;
  created: string;
  updated: string;
  images: {
    id: number;
    itemId: number;
    image: string;
    position: number;
    created: string;
    updated: string;
  }[];
  availableForPublish: boolean;
  available: boolean;
};