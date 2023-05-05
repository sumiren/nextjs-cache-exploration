import {Suspense} from "react";

export default async function Home() {
  return <>
    <div>Next.js 13.4</div>
    { /* @ts-ignore */ }
    <ServerComponent/>
    { /* @ts-ignore */ }
    <ServerComponent2/>
  </>
}

const ServerComponent = async () => {
  const [dynamicData] = await Promise.all([
    fetch(`http://localhost:3001/api/nice`,{ next: {revalidate: 10}}  ),
  ]);
  return <div>{JSON.stringify(await dynamicData.json())}</div>
}

const ServerComponent2 = async () => {
  const [dynamicData] = await Promise.all([
    fetch(`http://localhost:3001/api/hello`, { next: {revalidate: 60}}),
  ]);
  return <div>{JSON.stringify(await dynamicData.json())}</div>
}
