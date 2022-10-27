import Image from "next/image";
import pizza from "/public/images/pizza.jpg";

export default function Veggie() {
  return (
    <>
      <h1>veggies veggies veggies</h1>
      <p>Pizza</p>
      <Image src={pizza} alt="Pizza Image" width={600} height={400} />
    </>
  );
}
