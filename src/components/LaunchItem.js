import moment from 'moment'
import PropTypes from 'prop-types'
import Style from './LaunchStyle.module.scss'

const parserEmbedUrl = url =>
  `https://www.youtube.com/embed/${String(url).replace(
    /https:\/\/youtu.be\//gm,
    ''
  )}`

const LauncheItem = ({ data }) => {
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
    <div className={Style.launchItem}>
      <div>id: {id}</div>
      <div>mission name: {mission_name}</div>
      <div>rocket name: {rocket_name}</div>
      <div>rocket type: {rocket_type}</div>
      <div>
        launch time:
        {moment(launch_date_local).local().format('YYYY-MM-DD HH:mm:ss ZZ')}
      </div>
      <div>launch site: {site_name_long}</div>
      <div>launch success: {launch_success ? 'ture' : 'false'}</div>
      {details && (
        <div className={Style['launchItem-detail']}>detail: {details}</div>
      )}
      {article_link && (
        <div className={Style['launchItem-articleLink']}>
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

LauncheItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    launch_date_local: PropTypes.string.isRequired,
    launch_success: PropTypes.bool,
    details: PropTypes.string,
    launch_site: {
      site_name_long: PropTypes.string.isRequired,
    },
    links: {
      video_link: PropTypes.string,
      article_link: PropTypes.string,
    },
    rocket: {
      rocket_name: PropTypes.string.isRequired,
      rocket_type: PropTypes.string.isRequired,
    },
  }),
}

export default LauncheItem
