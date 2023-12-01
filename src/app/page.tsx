// import Image from "next/image";
import TinyEditor from "@/components/TinyEditor";

export default function Home() {
  async function myAction(data: any) {
    "use server";

    console.log(data);
  }

  return (
    <main className="h-screen p-10 flex flex-row justify-center dark:bg-slate-600">
      <form action={myAction}>
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Titulo del articulo
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Titulo"
          />
        </div>
        <TinyEditor id="content" name="content" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Guardar
        </button>
      </form>
    </main>
  );
}
