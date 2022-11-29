import React from "react";
import { getLocal } from "@/common/module/token";
import SettingsData from "./settings-data";

const index = () => {
  return (
    <div>
      <SettingsData
        image={String(getLocal("userImg"))}
        email={String(getLocal("userEmail"))}
        username={String(getLocal("userName"))}
        bio={String(getLocal("userBio"))}
      />
    </div>
  );
};

export default index;
