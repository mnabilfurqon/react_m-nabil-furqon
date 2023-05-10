import { Button } from "antd";
import { Link } from "react-router-dom";

export const MENU_ITEM = [
  {
    label: <Link to="/kritik-saran">Kritik & Saran</Link>,
    key: "/kritik-saran",
  },
  {
    label: (
      <Link to="/">
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem("token");
          }}
          danger
        >
          Logout
        </Button>
      </Link>
    ),
    key: "5",
  },
];
