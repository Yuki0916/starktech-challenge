import { useState, useCallback } from 'react'
import LaunchesList from './components/launchesList'

function App() {
  const [paginNumber, setPaginNumber] = useState(0)

  const handlePrevPage = useCallback(() => {
    setPaginNumber(prevNumber => prevNumber - 1)
  }, [])

  const handleNextPage = useCallback(() => {
    setPaginNumber(prevNumber => prevNumber + 1)
  }, [])

  return (
    <div>
      <LaunchesList value={paginNumber} />
      {paginNumber > 0 && <div onClick={handlePrevPage}>prev page</div>}
      <div>{paginNumber + 1}</div>
      <div onClick={handleNextPage}>next page</div>
    </div>
  )
}

export default App
