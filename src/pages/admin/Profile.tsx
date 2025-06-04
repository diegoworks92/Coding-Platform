import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import {
  RiEdit2Line,
  RiErrorWarningLine,
  RiShieldCheckLine,
} from "react-icons/ri";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import { RootState } from "store/store";
const Profile = () => {
  const [enabled, setEnabled] = useState(false);
  const [enabled2, setEnabled2] = useState(false);
  const [enabled3, setEnabled3] = useState(false);

  const auth = useSelector((state: RootState) => state.auth);
  if (!auth.loggedIn) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      {/* Profile  */}
      <div className="bg-secondary-300 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Profile</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p>Avatar</p>
            </div>
            <div className="flex-1">
              <div className="relative mb-2">
                <img
                  src="https://img.freepik.com/foto-gratis/negocio-joven-empresario-profesional-gafas-sonriendo-camara-brazo-cruzado-sobre-pecho_1258-26377.jpg"
                  className="w-28 h-28 object-cover rounded-lg"
                />
                <label
                  htmlFor="avatar"
                  className="absolute bg-secondary-300 p-2 rounded-full hover:cursor-pointer -top-2 left-24"
                >
                  <RiEdit2Line />
                </label>
                <input type="file" id="avatar" className="hidden" />
              </div>
              <p className="text-gray-500 text-sm">
                Allowed file types: png, jpg, jpeg
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Full Name <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Name"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Surnames"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Company <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Company Name"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Contact Phone <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Contact Phone"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Company Site <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Company Site"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Country <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select
                defaultValue="Spain"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none"
              >
                <option value="Belgium">Belgium</option>
                <option value="Spain">Spain</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Portugal">Portugal</option>
                <option value="England">United Kingdom</option>
              </select>
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors">
            Save
          </button>
        </div>
      </div>
      {/* Change Password */}
      <div className="bg-secondary-300 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Sign-in Method</h1>
        <hr className="my-8 border-gray-500/30" />
        <form className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-100 text-xl mb-1">Email Address</h5>
              <p className="text-gray-500 text-sm">diegoreyes@diegoworks.com</p>
            </div>
            <div>
              <button className="w-full md:w-auto bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors">
                Change Email
              </button>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-100 text-xl mb-1">Password</h5>
              <p className="text-gray-500 text-sm">*************</p>
            </div>
            <div>
              <button className="w-full md:w-auto bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors">
                Reset Password
              </button>
            </div>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-8 items-center gap-y-4 bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600">
          <div className="flex justify-center">
            <RiShieldCheckLine className="text-5xl text-green-600" />
          </div>
          <div className="md:col-span-6">
            <h5 className="text-gray-100 text-xl mb-2">Secure Your Account</h5>
            <p className="text-gray-500">
              Two-factor authentication adds an extra layer of security to your
              account. To log in, in addition you'll need to provide a 6 digit
              code
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-green-600/70 hover:bg-green-600 transition-colors py-2 px-4 rounded-lg text-gray-100">
              Enable
            </button>
          </div>
        </div>
      </div>
      {/* Connected accounts */}
      <div className="bg-secondary-300 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Connected Accounts</h1>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex flex-col md:flex-row gap-4 items-center bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600 mb-8">
          <div className="flex justify-center">
            <PiPlugsConnectedFill className="text-5xl text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-500">
              Two-factor authentication adds an extra layer of security to your
              account. To log in, in you'll need to provide a 4 digit amazing
              code.{" "}
              <Link to="" className="text-blue-500">
                Learn More
              </Link>
            </p>
          </div>
        </div>
        <form className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                className="w-8 h-8 object-cover"
              />
              <div className="flex flex-col gap-y-1">
                <h5 className="text-gray-100">Google</h5>
                <p className="text-gray-500 text-sm">
                  Plan properly your workflow
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-primary" : "bg-secondary-900"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled
                      ? "translate-x-6 bg-secondary-900"
                      : "translate-x-1 bg-gray-500"
                  } inline-block h-4 w-4 transform rounded-full transition`}
                />
              </Switch>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                className="w-8 h-8 object-cover"
              />
              <div className="flex flex-col gap-y-1">
                <h5 className="text-gray-100">GitHub</h5>
                <p className="text-gray-500 text-sm">
                  Keep eye on on yor Repositories
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabled2}
                onChange={setEnabled2}
                className={`${
                  enabled2 ? "bg-primary" : "bg-secondary-900"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled2
                      ? "translate-x-6 bg-secondary-900"
                      : "translate-x-1 bg-gray-500"
                  } inline-block h-4 w-4 transform rounded-full transition`}
                />
              </Switch>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://static.wikia.nocookie.net/youtubepedia/images/6/64/Discord.jpg/revision/latest?cb=20210824043945&path-prefix=es"
                className="w-8 h-8 object-cover rounded-md"
              />
              <div className="flex flex-col gap-y-1">
                <h5 className="text-gray-100">Discord</h5>
                <p className="text-gray-500 text-sm">
                  Integrate Projects Discussions
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabled3}
                onChange={setEnabled3}
                className={`${
                  enabled3 ? "bg-primary" : "bg-secondary-900"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled3
                      ? "translate-x-6 bg-secondary-900"
                      : "translate-x-1 bg-gray-500"
                  } inline-block h-4 w-4 transform rounded-full transition`}
                />
              </Switch>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
        </form>
      </div>
      {/* Email Preferences */}
      <div className="bg-secondary-300 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Email Preferences</h1>
        <hr className="my-8 border-gray-500/30" />

        <form className="mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="accent-primary" id="id1" />
              <div className="flex flex-col gap-y-1">
                <label htmlFor="id1" className="text-gray-100">
                  Successful Payments
                </label>
                <p className="text-gray-500 text-sm">
                  Receive a notification for every successful payment.
                </p>
              </div>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="accent-primary" id="id2" />
              <div className="flex flex-col gap-y-1">
                <label htmlFor="id2" className="text-gray-100">
                  Payouts
                </label>
                <p className="text-gray-500 text-sm">
                  Receive a notification for every initiated payout.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="accent-primary" id="id4" />
              <div className="flex flex-col gap-y-1">
                <label htmlFor="id4" className="text-gray-100">
                  Course updates
                </label>
                <p className="text-gray-500 text-sm">
                  Receive a notification every time a course has been updated.
                </p>
              </div>
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors">
            Save
          </button>
        </div>
      </div>
      {/* Inactive account */}
      <div className="bg-secondary-300 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Deactivate Accounts</h1>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex  flex-col md:flex-row items-center gap-4 bg-yellow-600/10 p-4 rounded-lg border border-dashed border-yellow-600 mb-8">
          <div className="flex justify-center">
            <RiErrorWarningLine className="text-5xl text-yellow-600" />
          </div>
          <div className="flex-1">
            <h5 className="text-gray-100 text-xl mb-2">
              You Are Deactivating Your Account
            </h5>
            <p className="text-gray-500">
              For extra security, this requires you to confirm your email or
              phone number when you reset yousignr password.{" "}
              <Link to="" className="text-blue-500">
                Learn More
              </Link>
            </p>
          </div>
        </div>
        <form className="flex items-center gap-4">
          <input type="checkbox" className="accent-primary" id="idInactive" />
          <label htmlFor="idInactive" className="text-gray-500">
            I confirm my account deactivation
          </label>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-red-500/80 text-gray-100 py-2 px-4 rounded-lg hover:bg-red-500 transition-colors">
            Desactivate account
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
