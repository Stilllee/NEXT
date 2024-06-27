async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  // const response = await fetch("https://api.sampleapis.com/coffee/hot");
  throw new Error("error");
  // const json = await response.json();
  // return json;
}

export default async function CoffeContent() {
  const data = await getData();
  return <h6>Coffe Content</h6>;
}
