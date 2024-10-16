const linkNames = [
  ['Home', 'Profile', 'Messages', 'History', 'Task', 'Communites'],
  ['Settings', 'Support', 'Privacy'],
];

const imgLinks = [
  [
    'home.svg',
    'card-account-details-outline.svg',
    'message-reply.svg',
    'clock-time-three.svg',
    'note-multiple.svg',
    'account-group.svg',
  ],
  ['cog.svg', 'help-box.svg', 'shield-check.svg'],
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
          return (
            <Links
              key={wordIndex}
              images={imgLinks[rowIndex][wordIndex]}
              names={eachWord}
            />
          );
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
