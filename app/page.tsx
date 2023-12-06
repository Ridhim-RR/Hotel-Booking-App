import HomeComp from "@/components/home";
import Error from "./error";
export const dynamic = 'force-dynamic'

const getRooms = async () => {
  const res = await fetch(`${process.env.API_URL}/api/rooms`, { cache: 'no-store' });
  return res.json();
};
export default async function Home() {
  const data = await getRooms();
  if(data?.msg){
    return <Error error={data}/>
  }
  const { rooms, totalRooms } = data;
  console.log(rooms,"RRROOOMMMSSS")
  return <HomeComp data={data}/>;
}
