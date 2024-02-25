#!/bin/bash
cd /alta/Main
rm -rv !("appsettings.json"|"UseNewDeploy.sh"|"staging"|"Logs")
cp -rp ../safety-Main/* ./
chmod +x *.sh
./Startme-Main.sh
./ShowRunning.sh

