# CIRES MGG Org Chart

https://org-chart.ciresocean.org/

Knowledge Graph showing the intersection of CIRES & MGG organizations, its people and projects.

Data derived from [here](https://docs.google.com/spreadsheets/d/1wYRAvP02BrueU2KhbVbleqBQgeNxy5PnJfb_F9uFX38/edit?gid=585617807#gid=585617807).

## Entities

There are three types of entities:
1. people (e.g. 'rudy klucik', group: 0,)
2. groups (e.g. 'marine geology & geophysics developers', group: 1)
3. projects (e.g. 'EchoFish', group: 2)

## Contributing
To contribute you can edit the "App.tsx" file.

Entries aren't in any order, so things will be chaotic as you add.

### Adding an Entity
In the meta_graph constant you can add a new node.

Be sure to add an 'id', which needs to be unique and will connect nodes to other nodes.
```json
{ id: "Rudy Klucik", longName: "Rudy Klucik", group: 0 },
```
For the 'group' you would put a '0' for a person, a '1' for a group (like 'NCEI'), or a '2' for a project (like 'Tugboat'). The 'longName' variable is optional and meant for longer names that typically get abbrevated, e.g.
for 'NOAA' you would do something like:
```json
{
  id: "NOAA",
  longName: "National Oceanic and Atmospheric Administration (NOAA)",
  group: 1,
},
```
to allow the UI to fully display the name but allow you to connect other nodes more easily by using the id.

Projects are similar to groups except they use a group value of '2'.

Description fields are optionally allowable for all entities.

### Adding an Edge
Adding an edge just requires two node ids added under the 'links', e.g.:
```json
{ source: "Rudy Klucik", target: "EchoFish", predicate: "associatedWith" },
```
connects the node, 'Rudy Klucik' to the node 'EchoFish'. The predicate is generically 'associatedWith' for now but will change in future iterations.

To keep the graph more clean, try and connect people to the lowest denomination group you can. E.g. I could connect 'Rudy Klucik' to {'NOAA', 'NESDIS', 'NCEI', 'MGG', 'GSB Dev Team', 'CU', 'CIRES', 'CMC', etc.} but instead we opt to connect just {'GSB Dev Team', 'CMC'}.

The convention for direction is generally:
 - person --> project
 - person --> group
 - group --> group

And so when the UI renders the dots move in the direction the arrow would point.

Upon saving and committing your code the github action will automatically build and deploy the code to https://org-chart.ciresocean.org/.

## Core concepts
The goal is to highlight the WHO and the WHAT, so connecting people to groups and projects. Not focused on infrastructure.

And we are not focused on what you have worked on in the past — this is not a CV. The goal is to illuminate the groups-and-projects people are involved in on the near horizon.


## Difference Between Org Structure & an Org Chart

https://organizationalphysics.com/2015/02/09/organizational-design-the-difference-between-organizational-structure-and-an-org-chart/


## TODO
- ~~get the cicd working~~
  - ~~create credentials [done]~~
  - ~~cloudfront & route53 [done]~~
  - ~~create s3 bucket~~
- add validation with python on check-in to nodes/edges
- add resize handler
- get others to contribute
- create api


## Future Research
https://www.stmweather.com/blog/profiles/what-is-noaa-and-what-is-its-mission
