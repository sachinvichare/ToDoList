const HeaderApp = (props) => {
  return (
    <div>
      <h1>ToDo List</h1>
      <div>{props.children}</div>
    </div>
  );
};

export default HeaderApp;
