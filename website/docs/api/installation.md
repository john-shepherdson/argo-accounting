---
id: installation
title: Installation
sidebar_position: 5
---

# Installation

We use the term installation as it is defined in the Virtual Access
documentation to refer to a specific instance or part of a resource/service
that is allocated to a specific Project by one Provider.

An Installation can only be generated through the endpoint we are going to
describe below.

The Installation collection has the following structure:

| Field                | Description         |
|----------------------|---------------------------------|
| [project](./project.md) | Points to an already registered Project ID. |
| [organisation](./provider.md) |Points to an already registered Provider* ID.|
|[resource](./resource.md)|Points to a Resource**. _(O)_|
| infrastructure       | Short name of infrastructure. |
| installation         | Short name of installation.   |
|[unit_of_access](./metric_definition.md)| Points to Metric Definition***. _(O)_|

\* _Provider has been either registered through the EOSC Resource Catalogue
or Accounting System API._

\** _Resource has been either registered through the EOSC Resource Catalogue
or Accounting System API._

\*** _Different Metrics can be added to an Installation, but this attribute
expresses the primary Unit of Access._

_O_: Optional

## [POST] - Create a new Installation

You can submit a new Installation by executing the following POST request:

```
POST /accounting-system/installations

Content-type: application/json
Authorization: Bearer {token}

{
  "project" : "101017567t",
  "organisation" : "grnet",
  "infrastructure" : "okeanos-knossos",
  "installation" : "GRNET-KNS",
  "unit_of_access" : "62973fea0f41a20c683e9014"
}
```

Upon inserting the record into the database, the API returns the Installation
enhanced with the generated installation ID:

Success Response `201 CREATED`

```
{
  "id" : "61dc142f6a278e43e8d6b3be",
  "project" : "101017567t",
  "organisation" : "grnet",
  "infrastructure" : "okeanos-knossos",
  "installation" : "GRNET-KNS",
  "unit_of_access": {
        "metric_definition_id": "62973fea0f41a20c683e9014",
        "metric_name": "lalala",
        "metric_description": "Number of users",
        "unit_type": "#",
        "metric_type": "aggregated",
        "creator_id": "115143399384cc3177df5377691ccdbb284cb245fad1c@aai.eosc-portal.eu"
    }
}
```

## [DELETE] - Delete an existing Installation

You can also delete an existing Installation by executing the following request:

```
DELETE /accounting-system/installations/{installation_id}

Authorization: Bearer {token}
```

If the deletion is successful the following response is returned:

Success Response `200 OK`

```
{
   "code": 200,
   "message": "Installation has been deleted successfully."
}
```

## [PATCH] - Update an existing Installation

You can update an existing Installation by executing the following request:

```
PATCH /accounting-system/installations/{installation_id}

Content-type: application/json
Authorization: Bearer {token}

{
  "organisation" : "organisation to be updated",
  "infrastructure" : "infrastructure to be updated",
  "installation" : "installation to be updated",
  "unit_of_access" : "unit_of_access to be updated"
}
```

The body of the request must contain an updated representation of Installation.
You can update a part or all attributes of the Installation. The empty or null
values are ignored.

The response will be the updated entity :

Success Response `200 OK`

```
{
   "updated_entity"
}
```

## [GET] - Fetch an existing Installation

You can fetch a created Installation by executing the following GET HTTP request:

```
GET /accounting-system/installations/{installation_id}

Authorization: Bearer {token}
```

The response is as follows:

Success Response `200 OK`

```
{
    "id": "6350f13072dda00a3ce5f0cb",
    "project": "725025",
    "organisation": "sites",
    "infrastructure": "infra-grnet-test",
    "installation": "installation-grnet",
    "unit_of_access": {
        "metric_definition_id": "6350f12772dda00a3ce5f0ca",
        "metric_name": "lalala",
        "metric_description": "Number of users",
        "unit_type": "#",
        "metric_type": "aggregated"
    }
}
```

## [GET] Fetch all Project Installations

Essentially, the following endpoint returns all Installations available
in a specific Project. By default, the first page of 10 Installations will
be returned.

```
GET /accounting-system/projects/{project_id}/installations

Authorization: Bearer {token}
```

You can tune the default values by using the query parameters page and size as
shown in the example below.

```
GET /accounting-system/projects/{project_id}/installations?page=2&size=15

Authorization: Bearer {token}
```

The above request returns the second page which contains 15 Installations:

Success Response 200 OK

```
{
   "size_of_page": 15,
   "number_of_page": 2,
   "total_elements": 237,
   "total_pages": 16,
   "content": [
   {
   "id": "62986c61683f693f470bb67c",
   "organisation": "grnet",
   "infrastructure": "okeanos-knossos",
   "installation": "GRNET-KNS",
   "unit_of_access": {
       "metric_definition_id": "62986c4e683f693f470bb67b",
       "metric_name": "number_of_users",
       "metric_description": "Number of users",
       "unit_type": "#",
       "metric_type": "aggregated"
   }
   }
   ],
   "links": [
       {
           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=1&size=15",
           "rel": "first"
       },
       {
           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=16&size=15",
           "rel": "last"
       },
       {
           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=2&size=15",
           "rel": "self"
       },
       {
           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=1&size=15",
           "rel": "prev"
       },
       {
           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=3&size=15",
           "rel": "next"
       }
   ]
}
```

## [GET] Fetch all Provider Installations

Essentially, the following endpoint returns all Installations available in a
Provider belonging to a specific Project. By default, the first page of 10
Installations will be returned.

```
GET /accounting-system/projects/{project_id}/providers/{provider_id}/installations

Authorization: Bearer {token}
```

You can tune the default values by using the query parameters page and size as
shown in the example below.

```
GET /accounting-system/projects/{project_id}/providers/{provider_id}/installations?page=2&size=15

Authorization: Bearer {token}
```

The above request returns the second page which contains 15 Installations:

Success Response 200 OK

```
{
   "size_of_page": 15,
   "number_of_page": 2,
   "total_elements": 237,
   "total_pages": 16,
   "content": [
        {
            "id": "6350f13072dda00a3ce5f0cb",
            "project": "725025",
            "organisation": "sites",
            "infrastructure": "infra-grnet-test",
            "installation": "installation-grnet",
            "unit_of_access": {
                "metric_definition_id": "6350f12772dda00a3ce5f0ca",
                "metric_name": "lalala",
                "metric_description": "Number of users",
                "unit_type": "#",
                "metric_type": "aggregated"
            }
        }
    ],
   "links": [
       {
           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=1&size=15",
           "rel": "first"
       },
       {
           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=16&size=15",
           "rel": "last"
       },
       {
           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=2&size=15",
           "rel": "self"
       },
       {
           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=1&size=15",
           "rel": "prev"
       },
       {
           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=3&size=15",
           "rel": "next"
       }
   ]
}
```

## [POST] - Access Control Entry for a particular Installation

The same goes for the Installations. Any client can have different
responsibilities at different Installations. The actions the client can
perform at each Installation are determined by the role, and the permissions
it has.

To grant a role to a client on a specific Installation, you have to execute
the following request:

```
POST /accounting-system/installations/{installation_id}/acl/{who}

Content-Type: application/json
Authorization: Bearer {token}

{
  "roles":[
     {role_name}
  ]
}
```

where `{who}` is the client ID in which the roles will be assigned.

The response is :

Success Response `200 OK`

```
{
   "code": 200,
   "message": "Installation Access Control was successfully created."
}
```

**Keep in mind that** to execute the above operation, you must have been
assigned a role containing the Installation Acl permission.

## [POST] - Search for Installations

You can search on Installations, to find the ones corresponding to the given
search criteria. Installations  can be searched by executing the following
request:

```
POST accounting-system/installations/search
Content-Type: application/json
```

### Example 1

```
{
           "type":"query",
           "field": "installation",
           "values": "GRNET-KNS-1",
           "operand": "eq"

}
```

### Example 2

```
{
 "type": "filter",
 "operator": "OR",
 "criteria": [
   {
     "type": "filter",
     "operator": "OR",
     "criteria": [{
           "type":"query",
           "field": "installation",
           "values": "GRNET-KNS-1",
           "operand": "eq"

},{
           "type":"query",
           "field": "organisation",
           "values": "grnet",
           "operand": "eq"

}]

   }]}
```

The context of the request should be a JSON object. The syntax of the JSON
object is described [**here**](https://argoeu.github.io/argo-accounting/docs/guides/search-filter).
If the operation is successful, you get a list of installations.

```
{
   "size_of_page": 2,
   "number_of_page": 1,
   "total_elements": 2,
   "total_pages": 1,
   "content": [
       {
           "installation_id": "62de52a3be6b3a161e01c75b",
           "project": "750802",
           "organisation": "sites",
           "infrastructure": "okeanos-knossos-1",
           "installation": "GRNET-KNS-1",
           "unit_of_access": {
               "metric_definition_id": "62de528dbe6b3a161e01c75a",
               "metric_name": "number_of_active_users",
               "metric_description": "Number of active users",
               "unit_type": "#",
               "metric_type": "aggregated"
           }
       },
       {
           "installation_id": "62de532cbe6b3a161e01c75d",
           "project": "750802",
           "organisation": "grnet",
           "infrastructure": "okeanos-knossos-2",
           "installation": "GRNET-KNS-2",
           "unit_of_access": {
               "metric_definition_id": "62de531cbe6b3a161e01c75c",
               "metric_name": "number_of_users_deleted",
               "metric_description": "Number of deleted users",
               "unit_type": "#",
               "metric_type": "aggregated"
           }
       }
   ],
   "links": []
}
```

## Errors

Please refer to section [Errors](./api_errors) to see all possible Errors.
