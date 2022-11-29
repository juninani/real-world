import React, { useState } from "react";
import { userUpdate } from "@/common/module/api/interface/user";
import User from "@/common/module/api/service/user";
import { useNavigate } from "react-router-dom";

const SettingsData = ({ email, username, bio, image }: userUpdate) => {
  let navigate = useNavigate();
  const [settings, setSettings] = useState<userUpdate>({
    email: email,
    username: username,
    bio: bio,
    image: image,
    password: "",
  });
  const settingsData = (key: string, value: string) => {
    setSettings({ ...settings, [key]: value });
  };
  const userUpdate = async (data: userUpdate) => {
    const res = await User.UpdateUser({ user: data });
    if (res.code === 200) {
      alert("유저정보 수정 성공");
      return;
    }
    alert("유저정보 수정 실패");
  };
  const delUserInfo = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  onChange={(e) => settingsData("image", e.target.value)}
                  defaultValue={settings.image !== "null" ? settings.image : ""}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  onChange={(e) => settingsData("username", e.target.value)}
                  defaultValue={
                    settings.username !== "null" ? settings.username : ""
                  }
                />
              </fieldset>
              <fieldset className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  rows={8}
                  placeholder="Short bio about you"
                  onChange={(e) => settingsData("bio", e.target.value)}
                  defaultValue={settings.bio !== "null" ? settings.bio : ""}
                ></textarea>
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  onChange={(e) => settingsData("email", e.target.value)}
                  defaultValue={settings.email !== "null" ? settings.email : ""}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => settingsData("password", e.target.value)}
                  defaultValue={settings.password}
                />
              </fieldset>
              <button
                onClick={() => userUpdate(settings)}
                className="btn btn-lg btn-primary pull-xs-right"
              >
                Update Settings
              </button>
            </fieldset>

            <hr />
            <button onClick={delUserInfo} className="btn btn-outline-danger">
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsData;
