import {Suspense} from "react";

export default async function Home() {
  const [isrData] = await Promise.all([
    fetch(`http://localhost:3001/api/hello`,{ next: {revalidate: 10}}  ),
  ]);
  const [staticData] = await Promise.all([
    fetch(`http://localhost:3001/api/nice`, { cache: 'force-cache' })
  ]);

  return <>
    <div>Next.js 13.4 invalid</div>
    { /* @ts-ignore */ }
    <div>{JSON.stringify(await isrData.json())}</div>
    <div>{JSON.stringify(await staticData.json())}</div>
  </>
}
