"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';


const SearchBar = () => {
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
    
      if(name) {
        router.push(`/list?name=${name}`);
      }
    
    }
    
    return (
      <form className="flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1" onSubmit={handleSearch}>
        <input type="text" name ="name" placeholder="Search" className="bg-transparent outline-none rounded-md p-1 w-60 flex-1" />
        <button className="cursor-pointer bg-blue-500 text-white px-2 py-1 rounded-md">
          <Image src="/search.png" alt="search" width={16} height={16} />
        </button>
      </form>
    )
  }
  
  export default SearchBar;