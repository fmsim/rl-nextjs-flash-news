// export const dynamic = "force-dynamic";
export const revalidate = 10;

export default async function IndexPage() {
  // cache: "no-cache"
  const fetch1 = await (
    await fetch("http://api.open-notify.org/iss-now.json", {})
  ).json();

  // next: { revalidate: 5 }
  const fetch2 = await (await fetch("https://randomuser.me/api/", {})).json();

  return (
    <div>
      {new Date().toLocaleTimeString()}
      <br />
      <br />
      <br /> {JSON.stringify(fetch1)}
      <br />
      <br />
      <br /> {JSON.stringify(fetch2)}
    </div>
  );
}
