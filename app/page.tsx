import HomeComp from "@/components/home";
import Error from "./error";

const getRooms = async () => {
  const res = await fetch(`${process.env.API_URL}/api/rooms`, { cache: 'no-store' });
  return res.json();
};
export default async function Home() {
  const rooms = await getRooms();
  if(rooms?.msg){
    return <Error error={rooms}/>
  }
  console.log(rooms)
  return <HomeComp data={rooms}/>;
}
