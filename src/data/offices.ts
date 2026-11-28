export interface OfficeLocation {
  id: "india" | "usa";
  badge: string;
  title: string;
  shortLabel: string;
  address: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
}

export const OFFICES: OfficeLocation[] = [
  {
    id: "india",
    badge: "INDIA CENTER",
    title: "India Office (Hyderabad)",
    shortLabel: "India",
    address: "Hyderabad, Telangana, India",
    phoneDisplay: "+91 9000.964.005",
    phoneHref: "tel:+919000964005",
    email: "info@rrswiftsol.com",
  },
  {
    id: "usa",
    badge: "AMERICAS CENTER",
    title: "USA Office (Maryland)",
    shortLabel: "USA",
    address: "321 Ballenger Center Dr, Frederick, MD 21703, United States",
    phoneDisplay: "+91 9000.964.005",
    phoneHref: "tel:+919000964005",
    email: "info@rrswiftsol.com",
  },
];
