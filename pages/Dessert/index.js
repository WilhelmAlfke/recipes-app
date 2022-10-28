import Image from "next/image";

export default function Dessert() {
  return (
    <>
      <h1>desserts.</h1>
      <p> blueberry cakelets with cream.</p>
      <Image
        src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
        alt="some cake"
        width={600}
        height={400}
      />
    </>
  );
}
