import { memo } from 'react'
import { useQuery } from '@apollo/client'
import { GET_NEXT_LAUNCH } from '../graphQL'
import LaunchItem from './LaunchItem'
import Style from './LaunchStyle.module.scss'

const NextLaunch = () => {
  const { loading, error, data } = useQuery(GET_NEXT_LAUNCH)

  return (
    <div className={Style.nextLaunch}>
      <h1>NextLaunch</h1>
      {loading && <div className={Style.networkStatus}>loading</div>}
      {error && <div className={Style.networkStatus}>error</div>}
      {data && <LaunchItem data={data.launchNext} />}
    </div>
  )
}

export default memo(NextLaunch)
