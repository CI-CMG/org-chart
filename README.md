# CIRES MGG Org Chart

https://org-chart.ciresocean.org/

Knowledge Graph showing the intersection of CIRES & MGG organizations, its people and projects.

## Entities

There are three types of entities:
1. people (e.g. 'rudy klucik', group: 0,)
2. groups (e.g. 'marine geology & geophysics developers', group: 1)
3. projects (e.g. 'EchoFish', group: 2)

## Contributing
To contribute you can edit the "App.tsx" file.

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

Upon saving and committing your code the github action will automatically build and deploy the code to https://org-chart.ciresocean.org/.

## Core concepts
The goal is to highlight the WHO and the WHAT, so connecting people to groups and projects. Not focused on infrastructure.

And we are not focused on what you have worked on in the past — this is not a CV.

It is not "who" you are but "what" you are working on that matters here.

## Difference Between Org Structure & an Org Chart

https://organizationalphysics.com/2015/02/09/organizational-design-the-difference-between-organizational-structure-and-an-org-chart/


## TODO
- get the cicd working
  - ~~create credentials [done]~~
  - ~~cloudfront & route53 [done]~~
  - ~~create s3 bucket~~
- add validation with python on check-in to nodes/edges
- add resize handler
- get others to contribute
- create api

## Future Research
https://www.stmweather.com/blog/profiles/what-is-noaa-and-what-is-its-mission
