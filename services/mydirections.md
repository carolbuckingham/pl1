# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=place_id%3AChIJAXFFBzut0kwRF1ws_Yy-8JE&destination=place_id%3AChIJCUkM8Puq0kwRzBQkUeCPn7o&alternatives=true&mode=driving&departure_time=1645557742&traffic_model=pessimistic&units=metric&waypoints=6CQR%2B2C%20Kingston%20Ontario%7Cplace_id%3AChIJ2RVr1Qar0kwR6ktT52qO8gY%7C6GJ8%2BR4%20Kingston%20Ontario&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJAXFFBzut0kwRF1ws_Yy-8JE",
         "types" : [ "establishment", "point_of_interest", "shopping_mall" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "GhIJxCCwcmgeRkARg8DKocUjU8A",
         "types" : [ "plus_code" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ2RVr1Qar0kwR6ktT52qO8gY",
         "types" : [ "premise" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "GhIJYhBYObQdRkAR61G4HgUfU8A",
         "types" : [ "plus_code" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJCUkM8Puq0kwRzBQkUeCPn7o",
         "types" : [ "establishment", "park", "point_of_interest", "tourist_attraction" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 44.25655130000001,
               "lng" : -76.4815083
            },
            "southwest" : {
               "lat" : 44.2272834,
               "lng" : -76.574353
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "3.4 km",
                  "value" : 3410
               },
               "duration" : {
                  "text" : "7 mins",
                  "value" : 439
               },
               "end_address" : "6CQR+2C Kingston, ON, Canada",
               "end_location" : {
                  "lat" : 44.2375487,
                  "lng" : -76.55942329999999
               },
               "start_address" : "945 Gardiners Rd, Kingston, ON K7M 7H4, Canada",
               "start_location" : {
                  "lat" : 44.25655130000001,
                  "lng" : -76.57325399999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "91 m",
                        "value" : 91
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 20
                     },
                     "end_location" : {
                        "lat" : 44.2563336,
                        "lng" : -76.574353
                     },
                     "html_instructions" : "Head \u003cb\u003ewest\u003c/b\u003e",
                     "polyline" : {
                        "points" : "mzbmGxujrM?BBL?DDb@@BFl@@HF`@L`A"
                     },
                     "start_location" : {
                        "lat" : 44.25655130000001,
                        "lng" : -76.57325399999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 557
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 98
                     },
                     "end_location" : {
                        "lat" : 44.2552108,
                        "lng" : -76.569298
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "aybmGt|jrM\\?H?VAP?PAN?PAN?NA|@KPAFAFCDCDCBCBE@C@ABIBI@G@K?I?M?Q?g@Ao@?q@Ae@Au@?e@A_AAw@Ao@Ak@Ao@Am@Am@Am@Ao@?GAi@?MAUCKEOGOEIIIKK"
                     },
                     "start_location" : {
                        "lat" : 44.2563336,
                        "lng" : -76.574353
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "48 m",
                        "value" : 48
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 44.2550993,
                        "lng" : -76.56873639999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eGardiners Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "arbmGb}irMNa@BI@E?C@K?MA_@"
                     },
                     "start_location" : {
                        "lat" : 44.2552108,
                        "lng" : -76.569298
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 1988
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 228
                     },
                     "end_location" : {
                        "lat" : 44.2372793,
                        "lng" : -76.5675844
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at the 1st cross street onto \u003cb\u003eGardiners Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kqbmGryirMZ?j@Cn@Av@Uz@C`@ArDIt@At@Aj@AjBEh@Ap@JV?p@CTApAM|AG~AEt@E`@AbBGX?Z?f@AlAE~@C`AC^Af@AbACb@?n@C~@EHApBGvBEH?\\AzBGdDIL?JAfBArAI|BKt@Ez@A^?\\@|@BlCGBAZQDANCrAEj@@ZJB?VCrAG"
                     },
                     "start_location" : {
                        "lat" : 44.2550993,
                        "lng" : -76.56873639999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 671
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 68
                     },
                     "end_location" : {
                        "lat" : 44.2370516,
                        "lng" : -76.55939160000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBath Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRoute 33 E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_b_mGjrirML?L@BYB_C@wBF}DByC@sC?y@@aA?cB?MAEAEEO?yG?O@{B?u@?cC"
                     },
                     "start_location" : {
                        "lat" : 44.2372793,
                        "lng" : -76.5675844
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "55 m",
                        "value" : 55
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 15
                     },
                     "end_location" : {
                        "lat" : 44.2375487,
                        "lng" : -76.55942329999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eTanner Dr\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "q`_mGd_hrM_ABQ@Q?"
                     },
                     "start_location" : {
                        "lat" : 44.2370516,
                        "lng" : -76.55939160000001
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "6.2 km",
                  "value" : 6161
               },
               "duration" : {
                  "text" : "10 mins",
                  "value" : 597
               },
               "end_address" : "121 Division St, Kingston, ON K7L 3M5, Canada",
               "end_location" : {
                  "lat" : 44.2312374,
                  "lng" : -76.4926852
               },
               "start_address" : "6CQR+2C Kingston, ON, Canada",
               "start_location" : {
                  "lat" : 44.2375487,
                  "lng" : -76.55942329999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "55 m",
                        "value" : 55
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 44.2370516,
                        "lng" : -76.55939160000001
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eTanner Dr\u003c/b\u003e toward \u003cb\u003eBath Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRoute 33 W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "uc_mGj_hrMP?PA~@C"
                     },
                     "start_location" : {
                        "lat" : 44.2375487,
                        "lng" : -76.55942329999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.2 km",
                        "value" : 3169
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 276
                     },
                     "end_location" : {
                        "lat" : 44.2402944,
                        "lng" : -76.51991749999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBath Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRoute 33 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "q`_mGd_hrMAuC?_@?iDAkACwFEeEG_DAeACoAG_CC}@EsAKqDCo@GkBAMG}AHc@GwAKmCkAiVEq@?CMoCQqDM_DM{CG{A?GIcBCi@SkEUiFEkAGqAAe@K{DYaG[gGAIOuCOuCYiGAIOiBCYOqCCa@GeAIcBUyEOcCEw@Ac@MwCI{AKiBMyCSyFKqCEuAKeCCiA"
                     },
                     "start_location" : {
                        "lat" : 44.2370516,
                        "lng" : -76.55939160000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1173
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 94
                     },
                     "end_location" : {
                        "lat" : 44.2310287,
                        "lng" : -76.5145867
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSir John A. MacDonald Blvd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yt_mGnh`rMBi@@M@GBIDIBEFI@ABGTWLARCNEPEPEPEPGPINIPINIRORO\\YJMnB{B@CnA_Bt@y@zBkCf@m@t@}@`@g@^c@PQ@APOROPIRKRIRGREPCj@EhAAfAIr@EX?r@CXC|DUbDOrBC"
                     },
                     "start_location" : {
                        "lat" : 44.2402944,
                        "lng" : -76.51991749999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1764
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 209
                     },
                     "end_location" : {
                        "lat" : 44.2312374,
                        "lng" : -76.4926852
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eJohnson St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}z}lGdg_rMTCAc@Ae@Cg@?GAWCq@KyDEgAEkCG}BGmBEiBKmFE}BA}@G_ECiBAaAEwDAsBCeB?MGuEEmEA_AGwFGmHIqHGoG?I@K?I@GDm@`@uEd@aGH_A"
                     },
                     "start_location" : {
                        "lat" : 44.2310287,
                        "lng" : -76.5145867
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "0.8 km",
                  "value" : 815
               },
               "duration" : {
                  "text" : "4 mins",
                  "value" : 248
               },
               "end_address" : "6GJ8+R4 Kingston, ON, Canada",
               "end_location" : {
                  "lat" : 44.2319225,
                  "lng" : -76.48472749999999
               },
               "start_address" : "121 Division St, Kingston, ON K7L 3M5, Canada",
               "start_location" : {
                  "lat" : 44.2312374,
                  "lng" : -76.4926852
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 257
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 46
                     },
                     "end_location" : {
                        "lat" : 44.2307692,
                        "lng" : -76.4895281
                     },
                     "html_instructions" : "Head \u003cb\u003eeast\u003c/b\u003e on \u003cb\u003eJohnson St\u003c/b\u003e toward \u003cb\u003eBarrie St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "g|}lGh~zqMRcCXkDFgAJkADg@TkC"
                     },
                     "start_location" : {
                        "lat" : 44.2312374,
                        "lng" : -76.4926852
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 205
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 86
                     },
                     "end_location" : {
                        "lat" : 44.2325854,
                        "lng" : -76.48906409999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eClergy St E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "iy}lGpjzqM_BYqAUyDm@"
                     },
                     "start_location" : {
                        "lat" : 44.2307692,
                        "lng" : -76.4895281
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 353
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 116
                     },
                     "end_location" : {
                        "lat" : 44.2319225,
                        "lng" : -76.48472749999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003ePrincess St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ud~lGrgzqMLoAJuATqCDc@`@cFRsBXmD"
                     },
                     "start_location" : {
                        "lat" : 44.2325854,
                        "lng" : -76.48906409999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "0.8 km",
                  "value" : 772
               },
               "duration" : {
                  "text" : "4 mins",
                  "value" : 217
               },
               "end_address" : "Kingston Waterfront, Waterfront Pathway, Kingston, ON K7L 0A5, Canada",
               "end_location" : {
                  "lat" : 44.2272834,
                  "lng" : -76.48169369999999
               },
               "start_address" : "6GJ8+R4 Kingston, ON, Canada",
               "start_location" : {
                  "lat" : 44.2319225,
                  "lng" : -76.48472749999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "41 m",
                        "value" : 41
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 11
                     },
                     "end_location" : {
                        "lat" : 44.2318487,
                        "lng" : -76.4842244
                     },
                     "html_instructions" : "Head \u003cb\u003eeast\u003c/b\u003e on \u003cb\u003ePrincess St\u003c/b\u003e toward \u003cb\u003eBagot St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "o`~lGplyqMLeB"
                     },
                     "start_location" : {
                        "lat" : 44.2319225,
                        "lng" : -76.48472749999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 213
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 89
                     },
                     "end_location" : {
                        "lat" : 44.23009039999999,
                        "lng" : -76.4851802
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at the 1st cross street onto \u003cb\u003eBagot St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "a`~lGjiyqMlBZp@LHBJDNFrAdAdA|@"
                     },
                     "start_location" : {
                        "lat" : 44.2318487,
                        "lng" : -76.4842244
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 348
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 64
                     },
                     "end_location" : {
                        "lat" : 44.22839949999999,
                        "lng" : -76.4815083
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eJohnson St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "au}lGjoyqMp@eB^gAh@yA|@eCr@yBbBuE"
                     },
                     "start_location" : {
                        "lat" : 44.23009039999999,
                        "lng" : -76.4851802
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 104
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 20
                     },
                     "end_location" : {
                        "lat" : 44.2276249,
                        "lng" : -76.48223249999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eOntario St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "oj}lGlxxqMzCnC"
                     },
                     "start_location" : {
                        "lat" : 44.22839949999999,
                        "lng" : -76.4815083
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "56 m",
                        "value" : 56
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 30
                     },
                     "end_location" : {
                        "lat" : 44.2273586,
                        "lng" : -76.4816337
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at the 1st cross street onto \u003cb\u003eWilliam St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "se}lG||xqMTq@\\eA"
                     },
                     "start_location" : {
                        "lat" : 44.2276249,
                        "lng" : -76.48223249999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "10 m",
                        "value" : 10
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 3
                     },
                     "end_location" : {
                        "lat" : 44.2272834,
                        "lng" : -76.48169369999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_d}lGdyxqMNJ"
                     },
                     "start_location" : {
                        "lat" : 44.2273586,
                        "lng" : -76.4816337
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "mzbmGxujrM\\xCL`A\\?`@AdAC^AnAMZMHMJ]@u@CoDMmKEsCAw@Ea@M_@OSKKNa@DO?}@fACn@Av@U|AEhFKvFKp@JV?fAEpAM|AGtCKdCIt@?vFOfACfBCjFSzGOfHMpEUpBG|@@|@BlCG^STErAEj@@^JjBKZ@PoMFiL?qBCKEO?yG@kC?yDqADQ?P?pAECkLI}LIeFUaJY{IG}AHc@SeF_Bo\\u@iQa@aJe@mLK{DYaG]qG{@_Qg@wHw@gO_@oIYcG_@kKQ{ECiABi@BUHSPYTWLAb@IfAYbAg@f@_@h@g@pB_CdCyCzF_HdAgAd@Yf@Uf@M|@IhAAfAIr@EX?lAG`Je@hCGCiAIyB_@kO_@cQ[iYq@uq@HkAdB{Sr@gJTkC_BYkGcAt@{It@wIf@sG~Ch@THNFrAdAdA|@p@eBhAaDpB_GbBuEzCnCr@wBNJ"
         },
         "summary" : "Gardiners Rd",
         "warnings" : [],
         "waypoint_order" : [ 0, 1, 2 ]
      }
   ],
   "status" : "OK"
}

```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
