function DisplayTrending() {
  return (
    <div>
      <img src="emoticon-poop.svg" alt="" width="30px" />
      <div>
        <p>@name</p>
        <p>something</p>
      </div>
    </div>
  );
}

export default function Trending() {
  return (
    <section className="trending">
      <h4>Trending</h4>
      <div>
        {Array(4)
          .fill(true)
          .map((_, i) => (
            <DisplayTrending key={i} />
          ))}
      </div>
    </section>
  );
}
