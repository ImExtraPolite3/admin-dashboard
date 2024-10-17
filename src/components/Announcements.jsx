function DisplayAnnouncements() {
  return (
    <div>
      <h4>Site Maintanence</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
        ratione natus dicta expedita veritatis at laboriosam iure culpa quod
        non.
      </p>
    </div>
  );
}

export default function Announcements() {
  return (
    <section className="announcements">
      <h3>Announcements</h3>
      <>
        {Array(2)
          .fill(true)
          .map((_, i) => (
            <>
              <DisplayAnnouncements key={i} />
              <hr />
            </>
          ))}
        <DisplayAnnouncements key={'3'} />
      </>
    </section>
  );
}
