import Link from 'next/link';
import { useRouter } from 'next/router';

const Article = ({ article }) => {

  // const router = useRouter();
  // const { id } = router.query;

  return (
    // <div>
    //   this is an article {id}
    // </div>
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>
        Go Back
      </Link>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`);

  const article = await res.json();

  return {
    props: {
      article
    }
  };
};

export default Article;
