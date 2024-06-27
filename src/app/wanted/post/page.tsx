"use client";

import { useFormState } from "react-dom";
import FormBtn from "./form-btn";
import { handleForm } from "./action";

export default function Post() {
  const [state, action] = useFormState(handleForm, null);

  return (
    <div>
      <form action={action}>
        <ul>
          <li>
            이름 <input type="text" name="name" />
            {state?.error.includes("name") && "이름이 틀렸어요"}
          </li>
          <li>
            희망연봉 <input type="number" name="salary" />
            {state?.error.includes("name") && "연봉이 잘못됐어요"}
          </li>
        </ul>
        <FormBtn />
      </form>
    </div>
  );
}
