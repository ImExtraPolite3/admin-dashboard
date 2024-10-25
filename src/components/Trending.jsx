function DisplayTrending() {
  return (
    <div>
      <div>
        <img src="emoticon-poop.svg" alt="" width="30px" />
        <div>
          <p>@name</p>
          <p>something</p>
        </div>
      </div>
    </div>
  );
}

export default function Trending() {
  return (
    <section className="trending">
      <h3>Trending</h3>
      <div>
        {Array(3)
          .fill(true)
          .map((_, i) => (
            <>
              <DisplayTrending key={i} />
              <hr />
            </>
          ))}
        <DisplayTrending key={3} />
      </div>
    </section>
  );
}
