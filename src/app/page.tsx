import UploadForm from '@/components/UploadForm'

async function handleUpload(file: FormData) {
  'use server'
  console.log(file.get('photo')?.valueOf())
}
const Home = () => {
  return (
    <div className="flex flex-col text-4xl gap-8">
      <h1 className="text-center mt-10">Home</h1>

      <UploadForm handleUpload={handleUpload} />
    </div>
  )
}

export default Home
