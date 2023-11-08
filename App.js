import './App.css';
import { useState } from 'react';
import  Tabs from "./Tabs/Tabs"
import TabInfoOne from './Tabs/TabInfoOne';
import TabInfoTwo from './Tabs/TabInfoTwo';
import TabInfoThree from './Tabs/TabInfoThree';


function App() {

  const [activeTab, setActiveTab] = useState(0);

  return (
        <div>
          <Tabs setActiveTab={setActiveTab}/>
          {activeTab === 0 && <TabInfoOne/> }
          {activeTab === 1 && <TabInfoTwo />}
          {activeTab === 2 && <TabInfoThree/>}

           
    </div>
  );
}
