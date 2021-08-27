import { gql } from '@apollo/client'
export const GET_LAUNCHES_LIST = gql`
  query Getexportes($offset: Int! = 0) {
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

export const ADD_LAUNCH = gql`
  mutation AddLaunch(
    $launch_date_local: String!
    $site_name_long: String!
    $launch_success: Boolean!
    $details: String!
    $mission_name: String!
    $site_name_long: String!
    $article_link: String!
    $video_link: String!
    $rocket_name: String!
    $rocket_type: String!
  ) {
    launchNext(
      launch_date_local: $launch_date_local
      launch_success: $launch_success
      details: $details
      mission_name: $mission_name
      site_name_long: $site_name_long
      article_link: $article_link
      video_link: $video_link
      rocket_name: $rocket_name
      rocket_type: $rocket_type
    ) {
      id
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
    }
  }
`
