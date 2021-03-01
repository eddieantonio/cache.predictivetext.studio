#!/bin/sh
set -eux

curl --silent --fail --show-error 'https://api.keyman.com/search?q=' > cached-keyman-api.json
