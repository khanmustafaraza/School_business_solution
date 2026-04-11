export type NavTypeProps = {
  id: number;
  name: string;
  link: string;
  icon: React.ReactNode;
};
export type SideBarProps = {
  navData: NavTypeProps[];
};

export type AdminHeadingType = {
  name: string;
  href: string;
  subHeading: string;
  btnHeading: string;
  icon: React.ReactNode;
};
export type headingProps = {
  heading: AdminHeadingType;
};
