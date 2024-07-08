import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import { Link } from "react-router-dom";

const MostRecentTickets = () => {
  const date = new Date().toLocaleDateString();
  const information = [
    {
      id: 1,
      number: 25546,
      description: "My computer won’t turn on",
      status: "Open",
      color: "text-yellow-500 bg-yellow-500/10",
    },
    {
      id: 2,
      number: 25653,
      description: "Problem with my company email",
      status: "In process",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      id: 3,
      number: 25579,
      description: "Change of system program",
      status: "Closed",
      color: "bg-green-500/10 text-green-500",
    },
  ];
  return (
    <>
      <div>
        <h1 className="text-2xl text-white my-10">Most recent tickets</h1>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4">
          <h5>ID</h5>
          <h5>Description</h5>
          <h5>Status</h5>
          <h5>Date</h5>
          <h5>Actions</h5>
        </div>
        {information.map((data) => {
          return (
            <div
              key={data.id}
              className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl"
            >
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
                <span>#{data.number}</span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">
                  Description
                </h5>
                <p>{data.description}</p>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">Status</h5>
                <span className={`py-1 px-2 ${data.color} rounded-lg`}>
                  {data.status}
                </span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">Date</h5>
                <span>{date}</span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">Actions</h5>
                <Menu
                  menuButton={
                    <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                      Actions
                    </MenuButton>
                  }
                  align="end"
                  transition
                  menuClassName="bg-secondary-100 p-4"
                >
                  <MenuItem className="p-0 hover:bg-transparent">
                    <Link
                      to="/perfil"
                      className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                    >
                      Dashboard tickets
                    </Link>
                  </MenuItem>
                  <MenuItem className="p-0 hover:bg-transparent">
                    <Link
                      to="/perfil"
                      className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                    >
                      Information
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MostRecentTickets;
