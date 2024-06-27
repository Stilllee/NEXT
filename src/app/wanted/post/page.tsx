import FormBtn from "./form-btn";

async function handleForm(formData: FormData) {
  "use server";

  console.log(formData.get("name"), formData.get("salary"));
  await new Promise((resolve) => setTimeout(resolve, 5000));
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
        <FormBtn />
      </form>
    </div>
  );
}
