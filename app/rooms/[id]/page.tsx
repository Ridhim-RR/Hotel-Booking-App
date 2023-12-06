// 'use client';
import React from "react";
import Error from "../../error"
import RoomDetails from "@/components/roomDetails";

interface Props {
  params: { id: string };
}
const getRoom = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/api/rooms/${id}`);
  return res.json();
};

const RoomDetailsPage = async ({ params }: Props) => {
  const id = params?.id;
  const details = await getRoom(id);
  if(details?.msg){
    return <Error error={details} />
  }
  return <div>
    <RoomDetails data={details}/>
  </div>;
};

export default RoomDetailsPage;
