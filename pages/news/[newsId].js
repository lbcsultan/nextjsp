import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  let newsId = router.query.newsId;

  return (
    <>
      <h1> The Detail Page: </h1>
      <h2> {newsId} </h2>
    </>
  );
}

export default DetailPage;
