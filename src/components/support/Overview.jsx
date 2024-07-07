import AdminTheme from "./AdminTheme";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <AdminTheme title="Polular tickets" button="Support" />
      <AdminTheme title="FAQ" button="All FAQ" />
    </div>
  );
};

export default Overview;
