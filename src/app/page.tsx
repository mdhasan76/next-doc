
export default function Home() {
  const envVariable= process.env.MONGO_URI
  console.log("env variable ",envVariable);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     home
    </main>
  )
}
