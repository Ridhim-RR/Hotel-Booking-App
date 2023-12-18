import HomeComp from "@/components/home";
import Error from "./error";
export const dynamic = 'force-dynamic'

const getRooms = async (searchParams : string) => {
  console.log(searchParams,"SEARCH")
  const urlParams = new URLSearchParams(searchParams);
  const queryString = urlParams.toString();
  const res = await fetch(`${process.env.API_URL}/api/rooms?${queryString}`, { cache: 'no-store' });
  return res.json();
};
export default async function Home({ searchParams }: { searchParams : string}) {
  const data = await getRooms(searchParams);
  if(data?.msg){
    return <Error error={data}/>
  }
  const { rooms, totalRooms } = data;
  // console.log(rooms,"RRROOOMMMSSS")
  return <HomeComp data={data}/>;
}
