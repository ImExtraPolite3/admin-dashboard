function Project() {
  return (
    <>
      <h3>Super Cool Project</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At vero nobis
        dolores aspernatur rem optio nam doloremque. Nam tempora dicta ab fugit
        aliquid possimus a voluptatem, magni architecto recusandae quasi.
      </p>
    </>
  );
}

export default function Projects() {
  return (
    <section>
      <h2>Your Projects</h2>
      <>
        {Array(6)
          .fill(true)
          .map((_, i) => (
            <Project key={i} />
          ))}
      </>
    </section>
  );
}
