export function mockUpcomingResponse() {
  return {
    results: [
      {
        vote_count: 315,
        id: 505058,
        video: false,
        vote_average: 6.1,
        title: 'Unfriended: Dark Web',
        popularity: 16.746,
        poster_path: '/nOXuOeD07nZPT29IgiGT0S8PZH.jpg',
        original_language: 'en',
        original_title: 'Unfriended: Dark Web',
        genre_ids: [27],
        backdrop_path: '/2Dk9WG8R0PYlgZjo5F9iheKybpO.jpg',
        adult: false,
        overview:
          '​When a 20-something finds a cache of hidden files on his new laptop, he and his friends are unwittingly thrust into the depths of the dark web. They soon discover someone has been watching their every move and will go to unimaginable lengths to protect the dark web.',
        release_date: '2018-07-19',
      },
      {
        vote_count: 0,
        id: 412117,
        video: false,
        vote_average: 0,
        title: 'The Secret Life of Pets 2',
        popularity: 12.588,
        poster_path: '/xuGdAwetqSGxNNwZ2DjS8U7BBzn.jpg',
        original_language: 'en',
        original_title: 'The Secret Life of Pets 2',
        genre_ids: [12, 16, 35, 10751],
        backdrop_path: '/4vf0SX6tcGdcT1MNziTkfKAAMfz.jpg',
        adult: false,
        overview: 'A sequel to the animated hit THE SECRET LIFE OF PETS.',
        release_date: '2019-05-24',
      },
    ],
    page: 1,
    total_results: 2,
    dates: {
      maximum: '2019-05-27',
      minimum: '2019-05-10',
    },
    total_pages: 1,
  };
}

export function mockSearchByNameResponse() {
  return {
    page: 1,
    total_results: 3,
    total_pages: 1,
    results: [
      {
        vote_count: 62,
        id: 348811,
        video: false,
        vote_average: 4.9,
        title: 'War Pigs',
        popularity: 6.423,
        poster_path: '/aqJBaehKrf23xUJCTC6DkoyNyUT.jpg',
        original_language: 'en',
        original_title: 'War Pigs',
        genre_ids: [10752, 28],
        backdrop_path: '/qt78zvlpXqNiiy090ggqe7cWuFU.jpg',
        adult: false,
        overview:
          'A rag tag unit of misfits known as the War Pigs must go behind enemy lines to exterminate Nazis by any means necessary.',
        release_date: '2015-08-03',
      },
      {
        vote_count: 2065,
        id: 59962,
        video: false,
        vote_average: 6,
        title: 'This Means War',
        popularity: 12.188,
        poster_path: '/8eqEw3NGdqAfGtHyCTiuoMb4RrM.jpg',
        original_language: 'en',
        original_title: 'This Means War',
        genre_ids: [28, 35, 10749],
        backdrop_path: '/aJh5rFH6jQRqvZyd0HR8BMiHhRn.jpg',
        adult: false,
        overview:
          'Two top CIA operatives wage an epic battle against one another after they discover they are dating the same woman.',
        release_date: '2012-02-14',
      },
      {
        vote_count: 90,
        id: 11706,
        video: false,
        vote_average: 6.7,
        title: 'War and Peace',
        popularity: 6.259,
        poster_path: '/gMotizNZwXkta9sVX66CFmvjkFu.jpg',
        original_language: 'en',
        original_title: 'War and Peace',
        genre_ids: [18, 10752, 10749],
        backdrop_path: '/xL8YkB2y1hxL7D3FufoVTMeBxVF.jpg',
        adult: false,
        overview:
          "Napoleon's tumultuous relations with Russia including his disastrous 1812 invasion serve as the backdrop for the tangled personal lives of two aristocratic families.",
        release_date: '1956-08-21',
      },
    ],
  };
}

export function mockMovieDetails() {
  return {
    adult: false,
    backdrop_path: '/2Ah63TIvVmZM3hzUwR5hXFg2LEk.jpg',
    belongs_to_collection: null,
    budget: 20000000,
    genres: [
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 10749,
        name: 'Romance',
      },
    ],
    homepage: null,
    id: 283552,
    imdb_id: 'tt2547584',
    original_language: 'en',
    original_title: 'The Light Between Oceans',
    overview:
      'A lighthouse keeper and his wife living off the coast of Western Australia raise a baby they rescue from an adrift rowboat.',
    popularity: 10.429,
    poster_path: '/pEFRzXtLmxYNjGd0XqJDHPDFKB2.jpg',
    production_companies: [
      {
        id: 7,
        logo_path: '/9YHAhaqpFKDq66Alz7HrYd1iM6G.png',
        name: 'DreamWorks',
        origin_country: 'US',
      },
      {
        id: 437,
        logo_path: '/nu20mtwbEIhUNnQ5NXVhHsNknZj.png',
        name: 'Heyday Films',
        origin_country: 'GB',
      },
      {
        id: 6735,
        logo_path: '/6yyByQrmTAgJv0QzZ1Eh1jiGX4R.png',
        name: 'Participant Media',
        origin_country: 'US',
      },
    ],
    production_countries: [
      {
        iso_3166_1: 'NZ',
        name: 'New Zealand',
      },
      {
        iso_3166_1: 'GB',
        name: 'United Kingdom',
      },
    ],
    release_date: '2016-09-02',
    revenue: 25956113,
    runtime: 133,
    spoken_languages: [
      {
        iso_639_1: 'en',
        name: 'English',
      },
    ],
    status: 'Released',
    tagline: 'Love demands everything',
    title: 'The Light Between Oceans',
    video: false,
    vote_average: 7.1,
    vote_count: 799,
  };
}
