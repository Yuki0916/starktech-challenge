import { gql } from '@apollo/client'
export const GET_LAUNCHES_LIST = gql`
  query GetLaunchesList($offset: Int! = 0) {
    launchesPast(limit: 10, offset: $offset) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
      launch_success
      details
    }
  }
`

export const GET_NEXT_LAUNCH = gql`
  query GetNextLaunch {
    launchNext {
      launch_date_local
      id
      launch_site {
        site_name_long
      }
      launch_success
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
      details
      mission_name
    }
  }
`
