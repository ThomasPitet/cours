#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Usage : $0 <nombre_de_minutes>"
    exit 1
fi

minutes=$1

heures=$((minutes / 60))
restantes=$((minutes % 60))

echo "$minutes minutes = $heures heure(s) et $restantes minute(s)"
