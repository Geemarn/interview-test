import React from "react";
import ProIcon from "../../../assets/pro-icon.svg";
import { Avatar, Button } from "antd";
import UpDownIcon from "../../../assets/up-down-icon.svg";

const btnStyle = {
  height: 56,
  background: "#FFFFFF",
  borderRadius: 16,
  position: "relative",
  top: -90,
  left: 22,
  padding: "0 44px",
  border: "none",
  color: "#5F75EE",
};
const avatarStyle = { color: "#f56a00", background: "#fde3cf" };

const UserProfileBtn = (props) => {
  const { styles, iconStyle, collapse } = props;
  return (
    <div>
      {!collapse ? (
        <>
          <div style={{ position: "relative" }}>
            <ProIcon style={{ marginTop: 30 }} />
            <Button style={btnStyle}>Get Pro Now</Button>
          </div>
          <div className={styles.userProfileBtn}>
            <Avatar style={avatarStyle} size={44}>
              TT
            </Avatar>
            <div>
              <p className={styles.user_info}>Tam Tran</p>
              <p className={styles.user_subinfo}>Free Account</p>
            </div>
            <UpDownIcon
              style={{ ...iconStyle, top: 12 }}
              className={styles.up_icon}
            />
          </div>
        </>
      ) : (
        <Avatar style={{ ...avatarStyle, marginLeft: 18 }} size={44}>
          TT
        </Avatar>
      )}
    </div>
  );
};

export default UserProfileBtn;
