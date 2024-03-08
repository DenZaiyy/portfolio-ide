import Tab from "../../../../components/Tabs/tab.tsx";

const Interests = () => {
  return (
    <>
      <div className="content">
        <div className="tab">
          <Tab name={"interests-by"} />
        </div>
        <div className="tab-content">interest testing</div>
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

export default Interests;
