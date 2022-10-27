import Image from "next/image";

export default function Dessert() {
  return (
    <>
      <h1>dessert1 dessert2 dessert3</h1>
      <p>cake</p>
      <Image
        src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
        alt="some cake"
        width={600}
        height={400}
      />
    </>
  );
}
