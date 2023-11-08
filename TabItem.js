const TabItem = ( {tab, index, setActiveTab} ) => {
    return <button 
            className="tab"
            value= {index}
            onClick={() => setActiveTab (index)}>
        { tab }

    </button>
}
export default TabItem;
