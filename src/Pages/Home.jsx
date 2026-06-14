import Search from "../components/Search";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosGitCompare } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import Tooltip from '@mui/material/Tooltip';

const Home = () => {
  return (
    <div>
      <hr className="mt-0 w-full" mb-0 />
            <div className="flex flex-col-2 items-center justify-around bg-white h-20 mt-0 mb-0">
              <div>
                <Search className="" />
              </div>
              <div className="flex gap-10">
                <Tooltip describeChild title="Cart" placement="top">
                <IconButton aria-label="show 4 unread messages">
                  <Badge badgeContent={4} color="secondary">
                    <LuShoppingCart />
                  </Badge>
                </IconButton>
                </Tooltip>
      
      <Tooltip describeChild title="Compare" placement="top">
                <IconButton aria-label="show 4 unread messages">
                  <Badge badgeContent={4} color="secondary">
                    <IoIosGitCompare />
                  </Badge>
                </IconButton>
                </Tooltip>
      
      <Tooltip describeChild title="Like" placement="top">
                <IconButton aria-label="show 4 unread messages">
                  <Badge badgeContent={4} color="secondary">
                    <SlLike />
                  </Badge>
                </IconButton>
                </Tooltip>
              </div>
            </div>
           <hr className="! important size-2 w-full"/>
<div>
</div>
    </div>
  )
}

export default Home;
