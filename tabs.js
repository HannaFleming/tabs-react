import TabItem from "./TabItem";
import './style.css';

const Tabs = ( {setActiveTab} ) => {
    return(
        <div>
            
                    
            {
                [ 'tab one', 'tab two', 'tab three' ].map((tab, index) => (
                    <TabItem 
                    key = {index}
                    tab = {tab}
                    index = {index}
                    setActiveTab = {setActiveTab}
                    />
                ))
            }
           
        </div>
    )
}
export default Tabs;
