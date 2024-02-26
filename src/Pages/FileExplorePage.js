import React from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'
import BottomHeader from '../Components/BottomHeader'
import FileDetails from '../Components/FileDetails'
import Pagination from '../Components/Pagination'

const FileExplorePage = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 11;
  return (
    <div>
        <Navbar/>
        <BottomHeader/>
        <FileDetails/>
        <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default FileExplorePage