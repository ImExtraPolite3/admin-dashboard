const allButtonNames = ['New', 'Upload', 'Share'];

function DisplayButtons() {
  return allButtonNames.map((button) => {
    return <button key={button}>{button}</button>;
  });
}

export default function Header() {
  return (
    <header className="headers">
      <div>
        <img src="magnify.svg" alt="" />
        <input type="text" />
        <img src="arrow-right.svg" alt="" />
      </div>
      <div>
        <img src="emoticon-poop.svg" alt="" />
        <div className="header-text">
          <p>Hi there,</p>
          <h1>Random Person (@SomeRandomPerson)</h1>
        </div>
        <div className="plus">
          <button>+</button>
        </div>
        <div className="post-buttons hide">
          <DisplayButtons />
        </div>
      </div>
    </header>
  );
}
