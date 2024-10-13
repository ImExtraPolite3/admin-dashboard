const linkNames = [
  ['Home', 'Profile', 'Messages', 'History', 'Task', 'Communites'],
  ['Settings', 'Support', 'Privacy'],
];

function Links(images, names) {
  return (
    <div>
      {/* <img src={images} alt="" /> */}
      <p>{names}</p>
    </div>
  );
}

function First() {
  console.log(linkNames[0]);

  // return linkNames[0].map((eachRow) => {
  //   <Links names={eachRow} />;
  // });
}

export default function Sidebar() {
  First();

  return (
    <div>
      <h1>Dashboard</h1>
      <First />
    </div>
  );
}
