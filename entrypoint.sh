#!/bin/sh

# Check if the command is "start"
if [ "$1" = "start" ]; then
  echo "Building the app for production..."
  yarn build
fi

# Run the provided command
yarn "$@"
