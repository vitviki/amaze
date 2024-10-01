import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm("");
    navigate(`/search/${searchTerm}`);
  };

  return (
    <form
      className="h-10 sm:h-full flex items-center gap-4 bg-white p-2 rounded-lg flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search..."
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 bg-transparent outline-none sm:placeholder:text-base placeholder:text-sm"
      />
      <button className="cursor-pointer px-4 py-2 bg-amazon_yellow flex items-center justify-center rounded-lg">
        <IoSearchSharp className="md:text-xl  text-lg text-white" />
      </button>
    </form>
  );
};

export default Searchbar;
