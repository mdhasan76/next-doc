
export default function page({ params, searchParams }: any) {
  console.log(searchParams, "rendered")
  return (
    <div>categories page {searchParams?.category }</div>
  )
}
