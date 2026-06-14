import Button from "@mui/material/Button";
import { CiSearch } from "react-icons/ci";
const Search = () => {
  return (
    <div className="searchBox w-[600px] h-[42px] bg-[#e5e5e5]  ">
      <input
        type="search"
        placeholder="Search here"
        className="w-full h-[40px] bg-none focus:outline-none p-2 bg-inherit   searchBox "
      />
      <Button className="!absolute h-[42px] left-[730px]  !bg-[#e5e5e5] ">
        <CiSearch className="text-[#171717] size-5" />
      </Button>
    </div>
  );
};

export default Search;
