import Card from "../Menu";

interface MenuListProps {
  mainMenu: {
    label: string;
    value: number | string;
  }[];
  handleMenu: (value: number | string) => void;
}

const MenuList: React.FC<MenuListProps> = ({ mainMenu, handleMenu }) => {
  return (
    <div className="flex flex-wrap">
      {mainMenu.map((item, index) => (
        <Card item={item} handleMenu={handleMenu} key={index} />
      ))}
    </div>
  );
};

export default MenuList;
