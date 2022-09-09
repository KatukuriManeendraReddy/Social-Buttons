const Button = (props) => {
  const { className, children } = props;
  return <button className={className}>{children}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div>
      <Button className="button1" children="Like" />
      <Button className="button2" children="Comment" />
      <Button className="button3" children="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
