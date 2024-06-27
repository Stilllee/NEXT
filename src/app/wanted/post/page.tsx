async function handleForm(formData: FormData) {
  "use server";

  console.log(formData.get("name"), formData.get("salary"));
  console.log("I run the server");
}

export default function Post() {
  return (
    <div>
      <form action={handleForm}>
        <ul>
          <li>
            이름 <input type="text" name="name" />
          </li>
          <li>
            희망연봉 <input type="number" name="salary" />
          </li>
        </ul>
        <button className="bg-blue-300 text-white font-semibold p-3 rounded-md">
          전송
        </button>
      </form>
    </div>
  );
}
