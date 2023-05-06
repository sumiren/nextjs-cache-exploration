import {Suspense} from "react";

export default async function Home() {
  const [isrData] = await Promise.all([
    fetch(`http://localhost:3001/api/hello`,{ next: {revalidate: 10}}  ),
  ]);
  const [ssrData] = await Promise.all([
    fetch(`http://localhost:3001/api/nice`, { cache: 'no-store' })
  ]);

  return <>
    <div>Next.js 13.4 invalid ssr</div>
    { /* @ts-ignore */ }
    <div>{JSON.stringify(await isrData.json())}</div>
    <div>{JSON.stringify(await ssrData.json())}</div>
  </>
}
