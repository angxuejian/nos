import UserInfo from "./components/user-info";

async function _loadData() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return { name: "Xuj" };
  } catch (error) {
    console.log(error);
    throw new Error("接口挂了");
  }
}

export default async function dashboardPage() {
  const data = await _loadData();

  return (
    <div>
      <h1>dashboard page</h1>

      <UserInfo name={data.name} />
    </div>
  );
}
