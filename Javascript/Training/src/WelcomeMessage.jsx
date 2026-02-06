function WelcomeMessage() {
  const message = "Hello World";
  const content = "This is a text with details...";

  return (
    <div className="WelcomeMessage">
      <h1>{message}</h1>
      <p>{content}</p>
    </div>
  );
}

export default WelcomeMessage;
