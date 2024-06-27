"use server";

export async function handleForm(prevState: any, formData: FormData) {
  console.log(formData.get("name"), formData.get("salary"));
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("I run the server");

  return {
    error: ["name", "salary"],
  };
}
