import { useState, useCallback } from 'react'
import LaunchesList from './components/LaunchesList'
import NextLaunch from './components/NextLaunch'
import Style from './App.module.scss'
import classnames from 'classnames/bind'

let cx = classnames.bind(Style)

function App() {
  const [paginNumber, setPaginNumber] = useState(0)
  const [refetch, setRefetch] = useState(false)

  const handlePrevPage = useCallback(() => {
    setPaginNumber(prevNumber => {
      if (prevNumber === 0) return prevNumber
      return prevNumber - 1
    })
  }, [])

  const handleNextPage = useCallback(() => {
    setPaginNumber(prevNumber => prevNumber + 1)
  }, [])

  const handleRefetch = useCallback(() => {
    setRefetch(prevSteate => !prevSteate)
  }, [])

  return (
    <div className={Style['root']}>
      <NextLaunch />
      <LaunchesList
        value={paginNumber}
        refetch={refetch}
        handleRefetch={handleRefetch}
      />
      <div className={Style['pagination-container']}>
        <div
          className={cx({ 'pagination-disabled': paginNumber === 0 })}
          onClick={handlePrevPage}
        >
          prev page
        </div>
        <div className={Style['pagination-page']}>{paginNumber + 1}</div>
        <div onClick={handleNextPage}>next page</div>
      </div>
    </div>
  )
}

export default App
