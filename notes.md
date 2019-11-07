# Requirements

A client has hired you to track zoo animals.
For each individual animal, you must track that their name, species, and all zoos in which they have resided (including zoo name and address).

Determine the database tables necessary to track this information.

Label any relationships between table.



A client has hired you to track zoo animals.
For each individual animal, you must track that their _name_, _species_, and _all zoos_ in which they have resided. 
(including zoo name and address).

Determine the database tables necessary to track this information.

Label any relationships between table.

For the `zoos` the client wants to record the :
- name
- address

For the `animals` the client wants to record:
- name
- species
- list of all zoos they have resided

Determing the DB tables necessary to track this info.
Label any relationships between table too.

## A good Data Model:
- is easily readable.
- captures ALL information the system needs.
- captures ONLY the information the system needs.
- reflect reality ( from the POV of the system )
- is flexible, can evolce w/ the system.
- guarantess `data integrity`, without sacrificing too much performance.
- is driven by the way we access data.

## Components
- entities (nouns: zoo, animal, species), like a resource ---> tables.
- properties ---> columns or fields.
- relationships ---> Foreign Keys (FK)

## Workflow
- identify entities
- identify the properties
- identify relationships

## Relationships
- 1:1
- one to many-most common!!
- many to many- doesn't really exist but the concept does

_there many animals in one species_ (one to many relationship)_

_there can be moret han one animal at the zoo_

_animal can visit/lived in more than one zoo_
 
## Mantras
- every table need ***PK***
- work on ***2 or 3*** entities at a time
- **one to many** relationships are modeled using ***FK***
- the ***FK** always goes to the ***many** table (1 species to many animals)
- the ***FK Column*** MUST be same type as the ***PK*** is referencing (integer/string/etc)
- ***many to many*** modeled by using a ***third table***
- third table can include other columns
- 