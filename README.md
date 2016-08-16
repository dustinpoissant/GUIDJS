# GUID.JS

> *1.2.0*

A simple script for generating a Globally Unique Identifiers (GUID) in JavaScript.

## Create a new GUID
Use the `GUID` function (or `GUID.create`) to create a new GUID.
```JavaScript
var myGuid = GUID();
// or
var myGuid = GUID.create();
```

## Get a list of all GUIDs
Use `GUID.list` to get a full list of all registered GUIDs.
```JavaScript
GUID.list
```

## Check if a GUID exists
Use the `GUID.exists` method to check if a GUID already exists.
```JavaScript
GUID.exists("885b8819-5bb3-467b-9e6b-62ca997b55a5");
```

## Register a GUID
Use the `GUID.register` method to register a GUID so that it will not be used again. This can be useful to sync the GUID list with a database on your server and then generate new GUIDs that are truely unique to your database.

This returns `true` if the GUID did not previously exist and was successfully registered, `false` if the GUID previously existed.
```JavaScript
GUID.register("885b8819-5bb3-467b-9e6b-62ca997b55a5");
```

## GUID.JS Version
Use `GUID.version` to check the version number of this script.
```JavaScript
GUID.version
```
