import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Results from '@/components/Results'
import Image from 'next/image'
import request from '@/utils/request';




export default function Home(props) {
  console.log(props)
  return (
    <div className=''>
      <Header/>
      <Nav/>
      <Results/>
    </div>
  )
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const requests = await fetch(
    `https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url}`
  ).then((res)=>res.json());

  return {
    props: {
      results : requests.results,
    }
  }
}
