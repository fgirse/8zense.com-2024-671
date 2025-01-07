import ArrayGenerator from '@/src/sections/ArrayTest/ArrayGenerator';

export default function Home() {
  return (
    <main>
      <h1>Server to Client Props Example</h1>
      <ArrayGenerator serverArray={[]} />
    </main>
  );
}