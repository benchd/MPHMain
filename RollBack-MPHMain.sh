#!/bin/bash
cd /alta/Front
rm -rv !("appsettings.json"|"UseNewDeploy.sh"|"staging"|"Logs")
cp -rp ../safety-Front/* ./
#chmod +x MPHBackendServer
chmod +x *.sh
./Startme-Front.sh
./ShowRunning.sh
#cp -a -r ../safety-Front/* ./
