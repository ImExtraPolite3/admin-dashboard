function Project() {
  return (
    <div>
      <h3>Super Cool Project</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At vero nobis
        dolores aspernatur rem optio nam doloremque. Nam tempora dicta ab fugit
        aliquid possimus a voluptatem, magni architecto recusandae quasi.
      </p>
      <div>
        <img src="star-plus-outline.svg" alt="" width="20px" />
        <img src="eye-plus-outline.svg" alt="" width="20px" />
        <img src="share-variant.svg" alt="" width="20px" />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects">
      <h2>Your Projects</h2>
      <div>
        {Array(6)
          .fill(true)
          .map((_, i) => (
            <Project key={i} />
          ))}
      </div>
    </section>
  );
}
