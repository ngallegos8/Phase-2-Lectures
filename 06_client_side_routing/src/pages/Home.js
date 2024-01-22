import { useLoaderData, Link } from "react-router-dom"; 


const Home = () => {
  const users = useLoaderData()
  console.log(users)

  return (
    <div>
      <h1>Welcome to my app!</h1>
      {
        users.map((user) => (
            <Link key={user.id} to={`/profile/${user.id.toString()}`}>
              <h2>{user.firstName}</h2>
            </Link>
          ))  
      }
    </div>
  );
};
export default Home;