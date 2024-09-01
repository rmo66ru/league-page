/*   STEP 1   */
export const leagueID = "1105629840285224960"; // your league ID
export const leagueName = "Peter Sucks"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>League OGs: Ryan, Dom, Peter, Graz, Gluck, Iosso, Demarco, Vernick, Aaron</p>
  <p>In memory of Ruple, Towne, Skalski, Mannix, Cermak</p>
  <p>  </p> 
  <p>Winners:</p>
  <p>2019/2020: Peter </p>
  <p>2021: Ryan</p>
  <p>2022/2023: Dom</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "639390298463617024",
      "name": "Ryan",
      "bio": "1x Champ (2021), Commissioner, League OG, Bijan Robinson enthusiast, Dom hater, Has made playoffs in every year of league history, inlcuding 4x semi final appearences (2019, 2020, 2021, 2022) and 2x final appearances (2019, 2021)",
      "photo": "/managers/ryann.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Dom", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/dom.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 9509, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "philosophy": "Zero RB, Jonathan Brooks legacy second half of season",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "639486416488841216",
      "name": "Dom",
      "location": "Marshalls", // (optional)
      "bio": "2x Champ (2022, 2023), League OG, Known fraud, Got lucky that Damar Hamlin died or Towne would've won in 2022",
      "photo": "/managers/dom.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Ted", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/ted.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 8159, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "philosophy": "Cheat and injure other teams players to get their backups",
      "tradingScale": 8, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "639721883067027456",
      "name": "Peter",
      "location": "Scranton", // (optional)
      "bio": "2x Champ (2019, 2020), League OG, Chris Herndon enthusiast, Paul McCartney lover",
      "photo": "/managers/peter.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Vernick", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/vernick.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5009, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "philosophy": "Draft mid but win the league",
      "tradingScale": 7, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "648391577617768448",
      "name": "Leo",
      "location": "Colombia", // (optional)
      "bio": "Messi Enthusiast, Cod enjoyer, Saints fan LOL?",
      "photo": "/managers/leo.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2021, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "no", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Pessi", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/pessi.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4035, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "philosophy": "Pray",
      "tradingScale": 0, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "781705010592509952",
      "name": "Demarco",
      "location": "Planet Mobius", // (optional)
      "bio": "League OG, Dolphins fan, Tua enthusiast, Sonic, Bad MLB the show player",
      "photo": "/managers/demarco.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Dr. Eggman", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/eggman.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6768, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "philosophy": "Draft young running backs and the goat Malik Nabers",
      "tradingScale": 8, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "782029591257747456",
      "name": "Graz",
      "location": "Delly", // (optional)
      "bio": "League OG, Jets enjoyer, Pat hater, Chicken operation goat",
      "photo": "/managers/graz.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Pat", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/pat.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 8155, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "philosophy": "Draft the young guys and ride",
      "tradingScale": 1, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "827730059321249792",
      "name": "Pat",
      "location": "Hillcrest Ave", // (optional)
      "bio": "Fired from Pegasus, Barnacle scraper, Bad at video games, Bad at fantasy",
      "photo": "/managers/pat.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Pedro", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/pedro.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 8155, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "philosophy": "Draft Bijan because hes weird and offer 300 trades that dont make sense and listen to any tweet about any single player",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "782036102742691840",
      "name": "Aaron",
      "location": "Morocco", // (optional)
      "bio": "League OG, World traveler, Eagles watcher, Rutgers legend",
      "photo": "/managers/aaron.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Dom", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/dom.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 8159, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "philosophy": "Pray",
      "tradingScale": 2, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "781705005945184256",
      "name": "Vernick",
      "location": "Citi Field", // (optional)
      "bio": "League OG, Mets lover, Peter hater",
      "photo": "/managers/vernick.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Peter", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/peter.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "philosophy": "Beat Peter",
      "tradingScale": 8, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
   {
      "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "565986071124283392",
      "name": "Rose",
      "location": "The Linc", // (optional)
      "bio": "League Terrorist, Eagles superfan, Scranton lord",
      "photo": "/managers/rose.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2023, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/world.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "philosophy": "Terrorize the league and draft Jalen Hurts",
      "tradingScale": 4, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
   {
      "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "782070099719909376",
      "name": "Jimmy",
      "location": "Jimmy Land", // (optional)
      "bio": "League OG, Giants lover, Dynasty enjoyer",
      "photo": "/managers/jimmy.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Demarco", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/demarco.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11628, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "philosophy": "Go beast mode",
      "tradingScale": 2, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
   {
      "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "648464977245601792",
      "name": "Iosso",
      "location": "Purdue", // (optional)
      "bio": "League OG, Retired Pat hater, ALmost champion if Peter didn't use dark magic",
      "photo": "/managers/iosso.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Peter", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/peter.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "philosophy": "Be goated",
      "tradingScale": 2, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
