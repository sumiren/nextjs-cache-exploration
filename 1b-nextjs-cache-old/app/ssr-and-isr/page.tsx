import {Suspense} from "react";

export default async function Home() {
  const [staticData] = await Promise.all([
    fetch(`http://localhost:3001/api/nice`, {next: {revalidate: 20}}),
  ]);

  return <>
    <div>Next.js 13.1</div>
    <div>{JSON.stringify(await staticData.json())}</div>
    <Suspense fallback={<p>fetching...</p>}>
      { /* @ts-ignore */ }
      <ServerComponent
      />
    </Suspense>
  </>
}

const ServerComponent = async () => {
  const [dynamicData] = await Promise.all([
    fetch(`http://localhost:3001/api/hello`, { cache: 'no-store' }),
  ]);
  return <div>{JSON.stringify(await dynamicData.json())}</div>
}
