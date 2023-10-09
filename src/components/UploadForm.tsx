'use client'

import { useState } from 'react'
type Props = {
  handleUpload: (data: FormData) => void
}

const UploadForm = ({ handleUpload }: Props) => {
  const [file, setFile] = useState<File | null>(null)
  return (
    <div className="flex flex-col text-center items-center gap-y-12 mt-36">
      <form action={handleUpload}>
        <input type="file" accept="image/*" name="photo" />
        <button type="submit"> Upload </button>
      </form>
    </div>
  )
}

export default UploadForm
