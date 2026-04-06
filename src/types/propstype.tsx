export type NavTypeProps = {
  id: number;
  name: string;
  link: string;
  icon: React.ReactNode;
};
export type SideBarProps = {
  navData: NavTypeProps[];
};
