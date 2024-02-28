import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import {getCatagories, getTags} from '../../../services/DiscourseService';
import MarketplaceSidebarButton from './VideoSidebarButton';
import {
  discourseMarketplaceCatagoryId,
  discourseProductTag,
} from '../../../util/util';

const topicData = {
  users: [
    {
      id: 1,
      username: 'jordan_violet',
      name: 'Jordan Violet',
      avatar_template:
        '/discuss/user_avatar/developer.sailpoint.com/jordan_violet/{size}/1657_2.png',
      primary_group_name: 'developer_relations',
      flair_name: 'developer_relations',
      flair_url:
        'https://global.discourse-cdn.com/sailpoint/original/2X/c/c1c09cb5f47af2124008b081b2e383c0d87302fc.png',
      flair_bg_color: 'ffffff',
      flair_group_id: 41,
      admin: true,
      trust_level: 3,
      assign_icon: 'user-plus',
      assign_path: '/u/jordan_violet/activity/assigned',
    },
    {
      id: 7274,
      username: 'Darrell',
      name: 'Darrell Thobe',
      avatar_template:
        '/discuss/user_avatar/developer.sailpoint.com/darrell/{size}/5688_2.png',
      primary_group_name: 'dev_tools_team',
      flair_name: 'dev_tools_team',
      flair_url:
        'https://global.discourse-cdn.com/sailpoint/original/2X/f/f2136700ed5e3703e0b85e02f6be799dacca7735.png',
      flair_bg_color: 'ffffff',
      flair_group_id: 96,
      admin: true,
      trust_level: 3,
      assign_icon: 'user-plus',
      assign_path: '/u/Darrell/activity/assigned',
    },
  ],
  primary_groups: [
    {id: 41, name: 'developer_relations'},
    {id: 96, name: 'dev_tools_team'},
  ],
  flair_groups: [
    {
      id: 41,
      name: 'developer_relations',
      flair_url:
        'https://global.discourse-cdn.com/sailpoint/original/2X/c/c1c09cb5f47af2124008b081b2e383c0d87302fc.png',
      flair_bg_color: 'ffffff',
      flair_color: '',
    },
    {
      id: 96,
      name: 'dev_tools_team',
      flair_url:
        'https://global.discourse-cdn.com/sailpoint/original/2X/f/f2136700ed5e3703e0b85e02f6be799dacca7735.png',
      flair_bg_color: 'ffffff',
      flair_color: '',
    },
  ],
  topic_list: {
    can_create_topic: true,
    per_page: 30,
    top_tags: [
      'developer-days-2023',
      'access-intelligence-center',
      'identitynow',
    ],
    circles: [],
    topics: [
      {
        id: 29911,
        title: 'Access Intelligence Center: Out of the Box Charts & Dashboards',
        fancy_title:
          'Access Intelligence Center: Out of the Box Charts &amp; Dashboards',
        slug: 'access-intelligence-center-out-of-the-box-charts-dashboards',
        posts_count: 3,
        reply_count: 0,
        highest_post_number: 3,
        image_url: null,
        created_at: '2024-02-09T14:00:39.226Z',
        last_posted_at: '2024-02-09T14:28:39.584Z',
        bumped: true,
        bumped_at: '2024-02-09T14:28:39.584Z',
        archetype: 'regular',
        unseen: false,
        last_read_post_number: 3,
        unread: 0,
        new_posts: 0,
        unread_posts: 0,
        pinned: false,
        unpinned: null,
        excerpt:
          'https://play.vidyard.com/Jd8waVWCZm3bZcNjJhRF2n.html \n\nDescription\nWithin other areas of our documentation, you will find resources that are tailored to specific features of our platform, providing in-depth information&hellip;',
        visible: true,
        closed: false,
        archived: false,
        notification_level: 2,
        bookmarked: false,
        liked: false,
        thumbnails: null,
        tags: ['identitynow', 'access-intelligence-center'],
        tags_descriptions: {},
        views: 5,
        like_count: 0,
        has_summary: false,
        last_poster_username: 'Darrell',
        category_id: 118,
        pinned_globally: false,
        featured_link: null,
        ratings: [],
        show_ratings: false,
        has_accepted_answer: false,
        can_have_answer: false,
        can_vote: false,
        posters: [
          {
            extras: null,
            description: 'Original Poster',
            user_id: 1,
            primary_group_id: 41,
            flair_group_id: 41,
          },
          {
            extras: 'latest',
            description: 'Most Recent Poster',
            user_id: 7274,
            primary_group_id: 96,
            flair_group_id: 96,
          },
        ],
      },
      {
        id: 29908,
        title: 'About the Videos category',
        fancy_title: 'About the Videos category',
        slug: 'about-the-videos-category',
        posts_count: 1,
        reply_count: 0,
        highest_post_number: 1,
        image_url: null,
        created_at: '2024-02-09T13:53:25.090Z',
        last_posted_at: null,
        bumped: true,
        bumped_at: '2024-02-09T13:53:25.091Z',
        archetype: 'regular',
        unseen: false,
        last_read_post_number: 1,
        unread: 0,
        new_posts: 0,
        unread_posts: 0,
        pinned: false,
        unpinned: true,
        excerpt: null,
        visible: true,
        closed: false,
        archived: false,
        notification_level: 1,
        bookmarked: false,
        liked: false,
        thumbnails: null,
        tags: [],
        tags_descriptions: {},
        views: 1,
        like_count: 0,
        has_summary: false,
        last_poster_username: 'jordan_violet',
        category_id: 118,
        pinned_globally: false,
        featured_link: null,
        ratings: [],
        show_ratings: false,
        has_accepted_answer: false,
        can_have_answer: false,
        can_vote: false,
        posters: [
          {
            extras: 'latest single',
            description: 'Original Poster, Most Recent Poster',
            user_id: 1,
            primary_group_id: 41,
            flair_group_id: 41,
          },
        ],
      },
      {
        id: 29909,
        title: 'Automated Documentation Tool for IIQ',
        fancy_title: 'Automated Documentation Tool for IIQ',
        slug: 'automated-documentation-tool-for-iiq',
        posts_count: 1,
        reply_count: 0,
        highest_post_number: 1,
        image_url:
          'https://global.discourse-cdn.com/sailpoint/optimized/2X/1/1017066173406adae86f8e3e6028649b05ef3fe7_2_1024x576.jpeg',
        created_at: '2024-02-09T13:57:05.388Z',
        last_posted_at: '2024-02-09T13:57:05.476Z',
        bumped: true,
        bumped_at: '2024-02-09T13:57:05.476Z',
        archetype: 'regular',
        unseen: false,
        pinned: false,
        unpinned: null,
        excerpt:
          'Presenters: @menno_pieters \nPresentation: \nDocumentation Generator for IdentityIQ.pdf (1.4 MB) \nThe tool can be found here: GitHub - menno-pieters-sp/identityiq-documentation-public: IdentityIQ Documentation Tool \nThe me&hellip;',
        visible: true,
        closed: false,
        archived: false,
        bookmarked: null,
        liked: null,
        thumbnails: [
          {
            max_width: null,
            max_height: null,
            width: 1280,
            height: 720,
            url: 'https://global.discourse-cdn.com/sailpoint/original/2X/1/1017066173406adae86f8e3e6028649b05ef3fe7.jpeg',
          },
          {
            max_width: 1024,
            max_height: 1024,
            width: 1024,
            height: 576,
            url: 'https://global.discourse-cdn.com/sailpoint/optimized/2X/1/1017066173406adae86f8e3e6028649b05ef3fe7_2_1024x576.jpeg',
          },
          {
            max_width: 800,
            max_height: 800,
            width: 800,
            height: 450,
            url: 'https://global.discourse-cdn.com/sailpoint/optimized/2X/1/1017066173406adae86f8e3e6028649b05ef3fe7_2_800x450.jpeg',
          },
          {
            max_width: 400,
            max_height: 400,
            width: 400,
            height: 225,
            url: 'https://global.discourse-cdn.com/sailpoint/optimized/2X/1/1017066173406adae86f8e3e6028649b05ef3fe7_2_400x225.jpeg',
          },
          {
            max_width: 200,
            max_height: 200,
            width: 200,
            height: 112,
            url: 'https://global.discourse-cdn.com/sailpoint/optimized/2X/1/1017066173406adae86f8e3e6028649b05ef3fe7_2_200x112.jpeg',
          },
          {
            max_width: 100,
            max_height: 100,
            width: 100,
            height: 56,
            url: 'https://global.discourse-cdn.com/sailpoint/optimized/2X/1/1017066173406adae86f8e3e6028649b05ef3fe7_2_100x56.jpeg',
          },
          {
            max_width: 50,
            max_height: 50,
            width: 50,
            height: 28,
            url: 'https://global.discourse-cdn.com/sailpoint/optimized/2X/1/1017066173406adae86f8e3e6028649b05ef3fe7_2_50x28.jpeg',
          },
        ],
        tags: ['developer-days-2023'],
        tags_descriptions: {},
        views: 1,
        like_count: 0,
        has_summary: false,
        last_poster_username: 'jordan_violet',
        category_id: 118,
        pinned_globally: false,
        featured_link: null,
        ratings: [],
        show_ratings: false,
        has_accepted_answer: false,
        can_have_answer: false,
        can_vote: false,
        posters: [
          {
            extras: 'latest single',
            description: 'Original Poster, Most Recent Poster',
            user_id: 1,
            primary_group_id: 41,
            flair_group_id: 41,
          },
        ],
      },
      {
        id: 29910,
        title: 'Error at Line 0: Advanced Logging for your IIQ Code',
        fancy_title: 'Error at Line 0: Advanced Logging for your IIQ Code',
        slug: 'error-at-line-0-advanced-logging-for-your-iiq-code',
        posts_count: 1,
        reply_count: 0,
        highest_post_number: 1,
        image_url:
          'https://global.discourse-cdn.com/sailpoint/optimized/2X/b/b507fc08280d4445f402177d17d5db54c0a6c5aa_2_1024x576.jpeg',
        created_at: '2024-02-09T13:57:51.476Z',
        last_posted_at: '2024-02-09T13:57:51.566Z',
        bumped: true,
        bumped_at: '2024-02-09T13:57:51.566Z',
        archetype: 'regular',
        unseen: false,
        pinned: false,
        unpinned: null,
        excerpt:
          'Presenters: @alexander_jakimowic \nPresentation: \nLoggingFramework_Pres_1_2.pptx (3,2 MB) \nHere you can find the code of the Framework (Java and RuleLibrary), The log4j2Admin.jsp page, and some admittedly rudimentary java&hellip;',
        visible: true,
        closed: false,
        archived: false,
        bookmarked: null,
        liked: null,
        thumbnails: [
          {
            max_width: null,
            max_height: null,
            width: 1280,
            height: 720,
            url: 'https://global.discourse-cdn.com/sailpoint/original/2X/b/b507fc08280d4445f402177d17d5db54c0a6c5aa.jpeg',
          },
          {
            max_width: 1024,
            max_height: 1024,
            width: 1024,
            height: 576,
            url: 'https://global.discourse-cdn.com/sailpoint/optimized/2X/b/b507fc08280d4445f402177d17d5db54c0a6c5aa_2_1024x576.jpeg',
          },
          {
            max_width: 800,
            max_height: 800,
            width: 800,
            height: 450,
            url: 'https://global.discourse-cdn.com/sailpoint/optimized/2X/b/b507fc08280d4445f402177d17d5db54c0a6c5aa_2_800x450.jpeg',
          },
          {
            max_width: 400,
            max_height: 400,
            width: 400,
            height: 225,
            url: 'https://global.discourse-cdn.com/sailpoint/optimized/2X/b/b507fc08280d4445f402177d17d5db54c0a6c5aa_2_400x225.jpeg',
          },
          {
            max_width: 200,
            max_height: 200,
            width: 200,
            height: 112,
            url: 'https://global.discourse-cdn.com/sailpoint/optimized/2X/b/b507fc08280d4445f402177d17d5db54c0a6c5aa_2_200x112.jpeg',
          },
          {
            max_width: 100,
            max_height: 100,
            width: 100,
            height: 56,
            url: 'https://global.discourse-cdn.com/sailpoint/optimized/2X/b/b507fc08280d4445f402177d17d5db54c0a6c5aa_2_100x56.jpeg',
          },
          {
            max_width: 50,
            max_height: 50,
            width: 50,
            height: 28,
            url: 'https://global.discourse-cdn.com/sailpoint/optimized/2X/b/b507fc08280d4445f402177d17d5db54c0a6c5aa_2_50x28.jpeg',
          },
        ],
        tags: ['developer-days-2023'],
        tags_descriptions: {},
        views: 1,
        like_count: 0,
        has_summary: false,
        last_poster_username: 'jordan_violet',
        category_id: 118,
        pinned_globally: false,
        featured_link: null,
        ratings: [],
        show_ratings: false,
        has_accepted_answer: false,
        can_have_answer: false,
        can_vote: false,
        posters: [
          {
            extras: 'latest single',
            description: 'Original Poster, Most Recent Poster',
            user_id: 1,
            primary_group_id: 41,
            flair_group_id: 41,
          },
        ],
      },
    ],
  },
};

export default function MarketplaceSidebar({filterCallback, selectedCategory}) {
  const [tagProductData, setTagProductData] = React.useState();
  const [filterTags, setFilterTags] = React.useState(true);

  const getTagData = async () => {
    // const data = await getVideoPosts(filterCallback.tags.join('+'));
    const uniqueTags = new Set();

    const data = await topicData;
    const resultset = [];
    if (data.topic_list) {
      for (const topic of data.topic_list.topics) {
        if (topic.tags.length > 0) {
          topic.tags.forEach((tag) => {
            uniqueTags.add(tag);
          });
        }
      }
    }
    setTagProductData(Array.from(uniqueTags));
  };

  // function toggleSeeAll() {
  //   filterTags ? setFilterTags(false) : setFilterTags(true);
  // }

  function displayText(text) {
    if (text === 'identitynow') {
      return 'IdentityNow';
    }
    if (text === 'access-intelligence-center') {
      return 'Access Intelligence Center';
    }
    if (text === 'developer-days-2023') {
      return 'Developer Days 2023';
    }
  }

  React.useEffect(() => {
    getTagData();
  }, []);

  const filterText = filterTags ? 'See All Tags' : 'See Less Tags';

  if (tagProductData) {
    return (
      <div className={styles.sidebar}>
        <div className={styles.tagHeader}>Video Search</div>
        <div className={styles.tagContainer}>
         <input type="text" id="search" placeholder="Search for Video" />
        </div>
        <div className={styles.tagHeader}>Video Tags</div>
        <div className={styles.tagContainer}>
          {tagProductData.map(function (a, index) {
            return (
              <MarketplaceSidebarButton
                key={a}
                text={displayText(a)}
                id={a}
                filterCallback={filterCallback}></MarketplaceSidebarButton>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
