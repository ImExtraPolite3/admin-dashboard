const allButtonNames = ['New', 'Upload', 'Share'];

function DisplayButtons() {
  return allButtonNames.map((button) => {
    return <button key={button}>{button}</button>;
  });
}

export default function Header() {
  return (
    <header className="header">
      <div>
        <img src="magnify.svg" alt="" width="20px" />
        <input type="text" />
        <img src="bell-ring-outline.svg" alt="" width="20px" />
      </div>
      <div>
        <img src="emoticon-poop.svg" alt="" width="40px" />
        <div>
          <p>Hi there,</p>
          <h1>Random Person (@SomeRandomPerson)</h1>
        </div>
        <div>
          <DisplayButtons />
        </div>
      </div>
    </header>
  );
}
