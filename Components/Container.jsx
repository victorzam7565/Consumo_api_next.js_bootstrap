import Navigation from "./Navigation";
import Head from "next/head";

const Container = (props) => {
  return (
    <div>
        <Head>
            <title>Next-proyect</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
        </Head>
      <Navigation />
      <div className="container p-4"> {props.children}</div>
    </div>
  );
};

export default Container;