import "./navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="heading">
          <h1>Dashboard</h1>
        </div>
        <div className="items">
          <div className="item search">
            <input type="text " placeholder="Search..." />
            <SearchOutlinedIcon />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://lh3.googleusercontent.com/ogw/AOLn63HJf1Ro8A5VsK1qQei6icsdC4oEK8m7QrHtfvEUQ-c=s32-c-mo"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
