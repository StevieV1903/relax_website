import React, { useState } from "react";
import "./Tabs.css";
import FirstTab from "./AllTabs/FirstTab";
import SecondTab from "./AllTabs/SecondTab";
import ThirdTab from "./AllTabs/ThirdTab";


const Tabs = () => {

    const [activeTab, setActiveTab] = useState("tab2");

    const handleTab1 = () => {
        setActiveTab("tab1");
      };

    const handleTab2 = () => {
        setActiveTab("tab2");
      };

    const handleTab3 = () => {
        setActiveTab("tab3");
      };
  
    return (
    <div className="tabs-wrapper">
        <div className="Tabs">
            {/* Tab nav */}
            <ul className="nav">
                <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>
                    Baby Mindful (0-18mths)
                </li>
                <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>
                    Relax Kids (ages 3+)
                </li>
                <li className={activeTab === "tab3" ? "active" : ""} onClick={handleTab3}>
                    ChargeUp (ages 11+)
                </li>
            </ul>
            <div className="outlet">
                {activeTab === "tab1" ? <FirstTab /> :  null}
                {activeTab === "tab2" ? <SecondTab /> :  null}
                {activeTab === "tab3" ? <ThirdTab /> :  null}
            </div>
        </div>
    </div>
    );
};

export default Tabs;

    