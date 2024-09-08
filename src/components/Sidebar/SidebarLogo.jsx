const SidebarLogo = ({ isOpen }) => {
  return (
    <div className={`logo mb-6 text-2xl font-bold ${!isOpen && "hidden"}`}>
      Writio
    </div>
  );
};

export default SidebarLogo;
