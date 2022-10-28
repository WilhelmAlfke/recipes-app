import Image from "next/image";
import pizza from "/public/images/pizza.jpg";

export default function Veggie() {
  return (
    <>
      <h1>veggies.</h1>
      <p>pizza</p>
      <Image src={pizza} alt="Pizza Image" width={600} height={400} />
    </>
  );
}
