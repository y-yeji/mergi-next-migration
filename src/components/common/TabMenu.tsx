interface TabMenuItem {
  label: string;
  value: string;
}

interface TabMenuProps {
  tabMenuListItem: TabMenuItem[];
  selectedTab: string;
  onTabClick: (value: string) => void;
}

const TabMenu = ({
  tabMenuListItem,
  selectedTab,
  onTabClick,
}: TabMenuProps) => {
  return (
    <div className="w-full h-[50px] py-[13px] bg-secondary-1">
      <nav>
        <ul className="flex justify-center items-center gap-[30px] body-large-m text-gray-80">
          {tabMenuListItem.map((ListItem) => (
            <li
              key={ListItem.value}
              className={`cursor-pointer ${
                selectedTab === ListItem.value ? "text-primary-2" : ""
              }`}
              onClick={() => onTabClick(ListItem.value)}
            >
              {ListItem.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default TabMenu;
