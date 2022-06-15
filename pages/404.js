import Link from "next/link";

const PageNotfound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <h4>Check to see if you are in the correct page.</h4>
      <Link href="/">Click here to go home</Link>
    </div>
  );
};

export default PageNotfound;
