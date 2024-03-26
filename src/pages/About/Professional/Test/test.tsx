import Tab from "../../../../components/Tabs/tab.tsx";

const Test = () => {
  return (
    <>
      <div className="content">
        <div className="tab">
          <Tab name={"test"} />
        </div>
        <div className="tab-content">dfggd</div>
      </div>
      <div className="snippets">
        <div className="tab">
          <Tab name={"test"} />
        </div>
        <div className="tab-content"></div>
      </div>
    </>
  );
};

export default Test;
