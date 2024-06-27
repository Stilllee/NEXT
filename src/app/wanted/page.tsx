import { Suspense } from "react";
import CoffeTitle from "./CoffeTitle";
import CoffeContent from "./CoffeContent";

export default async function Data() {
  return (
    <div>
      <Suspense fallback={<h1>Loading</h1>}>
        <CoffeTitle />
      </Suspense>
      <hr />
      <Suspense fallback={<h1>Loading</h1>}>
        <CoffeContent />
      </Suspense>
    </div>
  );
}
