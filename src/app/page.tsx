// import Image from "next/image";
import TinyEditor from '@/components/TinyEditor';

export default function Home() {
  async function myAction(data: any) {
    'use server';

    console.log(data);
  }

  return (
    <main className='h-screen p-10 flex flex-col justify-start dark:bg-slate-600'>
      <h1 className='self-center  font-semibold text-gray-900 text-4xl'>
        Nuevo Post!
      </h1>
      <form action={myAction} className='w-full flex flex-col'>
        <div className=' relative  pt-4 pb-8 '>
          <input
            id='title'
            name='title'
            type='text'
            className='peer h-10 w-full border-b-2 rounded-t bg-transparent border-gray-500 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-500'
            placeholder='Titulo del articulo'
          />
          <label
            htmlFor='title'
            className='absolute left-2  text-gray-600 dark:text-opacity-0 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-pla  peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm'
          >
            Titulo del articulo
          </label>
        </div>
        <TinyEditor id='content' name='content' />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4 w-32 self-end'>
          Guardar
        </button>
      </form>
    </main>
  );
}
