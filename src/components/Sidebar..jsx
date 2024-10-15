const linkNames = [
  ['Home', 'Profile', 'Messages', 'History', 'Task', 'Communites'],
  ['Settings', 'Support', 'Privacy'],
];

function Links({ images, names }) {
  return (
    <div>
      <img src={images} alt="" />
      <p>{names}</p>
    </div>
  );
}

function GetLinks() {
  return linkNames.map((eachRow, rowIndex) => {
    return (
      <div key={rowIndex}>
        {eachRow.map((eachWord, wordIndex) => {
          return <Links key={wordIndex} images="" names={eachWord} />;
        })}
      </div>
    );
  });
}

export default function Sidebar() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <GetLinks />
      </div>
    </div>
  );
}
