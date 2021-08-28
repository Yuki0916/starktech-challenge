import { useQuery } from '@apollo/client'
import { GET_LAUNCHES_LIST } from '../graphQL'
import Style from './LaunchStyle.module.scss'
import LaunchItem from './LaunchItem'
import PropTypes from 'prop-types'

const LaunchesList = ({ value }) => {
  const { loading, error, data } = useQuery(GET_LAUNCHES_LIST, {
    variables: {
      offset: value * 10,
    },
  })

  return (
    <div>
      <h1>LaunchesList</h1>
      {loading && <div className={Style.networkStatus}>loading</div>}
      {error && <div className={Style.networkStatus}>error</div>}
      <div className={Style.launchesList}>
        {data &&
          data.launchesPast.map((item, key) => (
            <LaunchItem key={key} data={item} />
          ))}
      </div>
    </div>
  )
}

LaunchesList.propTypes = {
  value: PropTypes.number.isRequired,
}

export default LaunchesList
