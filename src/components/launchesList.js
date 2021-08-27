import { useQuery, useMutation, NetworkStatus } from '@apollo/client'
import { Fragment, useMemo, useContext } from 'react'
import { GET_LAUNCHES_LIST, ADD_LAUNCH } from '../graphQL'
import Style from './launchesList.module.scss'
import PropTypes from 'prop-types'

const parserEmbedUrl = url =>
  `https://www.youtube.com/embed/${String(url).replace(
    /https:\/\/youtu.be\//gm,
    ''
  )}`

const LaunchesItem = ({ data }) => {
  const {
    id,
    mission_name,
    launch_date_local,
    launch_site: { site_name_long },
    links: { article_link, video_link },
    rocket: { rocket_name, rocket_type },
    launch_success,
    details,
  } = data
  return (
    <div className={Style.item}>
      <div>id: {id}</div>
      <div>mission name: {mission_name}</div>
      <div>rocket name: {rocket_name}</div>
      <div>rocket type: {rocket_type}</div>
      <div>launch time: {launch_date_local}</div>
      <div>launch site: {site_name_long}</div>
      <div>launch success: {launch_success ? 'ture' : 'false'}</div>
      {details && <div>detail: {details}</div>}
      {article_link && (
        <div>
          <a href={article_link} target='_blank' rel='noreferrer'>
            article_link
          </a>
        </div>
      )}
      {video_link && (
        <iframe
          width='560'
          height='315'
          src={parserEmbedUrl(video_link)}
          frameBorder='0'
          allowFullScreen
        ></iframe>
      )}
    </div>
  )
}

const LaunchesList = ({ value }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_LAUNCHES_LIST,
    {
      variables: {
        offset: value * 10,
      },
    }
  )

  return (
    <div className={Style.container}>
      {loading && <div>loading</div>}
      {error && <div>error</div>}
      {data &&
        data.launchesPast.map((item, key) => (
          <LaunchesItem key={key} data={item} />
        ))}
    </div>
  )
}

export default LaunchesList

LaunchesItem.propTypes = {
  data: {
    id: PropTypes.number.isRequired,
    mission_name: PropTypes.string.isRequired,
    launch_date_local: PropTypes.string.isRequired,
    launch_success: PropTypes.bool.isRequired,
    details: PropTypes.string,
    launch_site: {
      site_name_long: PropTypes.string.isRequired,
    },
    links: {
      video_link: PropTypes.string.isRequired,
      article_link: PropTypes.string,
    },
    rocket: {
      rocket_name: PropTypes.string.isRequired,
      rocket_type: PropTypes.string.isRequired,
    },
  },
}

LaunchesList.propTypes = {
  value: PropTypes.number.isRequired,
}
