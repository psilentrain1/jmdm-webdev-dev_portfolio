#!/bin/bash

# Create the demo database file
ECHO "Creating demo database file..."
touch folio.db

# Load demo data
ECHO "Loading demo data..."
sqlite3 folio.db < demo-db.sql

ECHO "Ready!"