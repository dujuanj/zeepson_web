
interface ParamsType{
    id: string;
    title: string;
    activeTab: string;
    setActiveTab:any
}

export default function TabNavItem({ id, title, activeTab, setActiveTab }: ParamsType) {
    
    const handleClick = () => {
        setActiveTab(id);
      };
      

    return (
      <>
         <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
     { title }
   </li>
      </>
    )
  }