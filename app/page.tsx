import HomeComp from "@/components/home";

const getRooms = async () => {
  const res = await fetch("http://localhost:3000/api/rooms", { cache: 'no-store' });
  return res.json();
};
export default async function Home() {
  const rooms = await getRooms();
  console.log(rooms.length)
  return <HomeComp />;
}
