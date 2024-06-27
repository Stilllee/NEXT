"use client";

import { useFormStatus } from "react-dom";

export default function FormBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-blue-300 text-white font-semibold p-3 rounded-md"
    >
      {pending ? "로딩중" : "전송"}
    </button>
  );
}
