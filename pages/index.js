import Head from "next/head";
import Container from "../Components/Container";
import fetch from 'isomorphic-fetch';
import Users from "../Components/Users";

const Index = (props) => {
   console.log(props)
  return (
    <div>
      
      <Container>
      <Head>
        <title>Home</title>
      </Head>
        <h1>Este es el indice con nombres</h1>
        <Users users={props.users}/>
      </Container>
    </div>
  );
};
Index.getInitialProps = async (ctx) =>{
  const res=await fetch('https://reqres.in/api/users/')
  const resJSON = await res.json();
  return {users : resJSON.data}
 }


export default Index;


