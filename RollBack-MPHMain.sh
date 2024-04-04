#!/bin/bash
cd /alta/MPHMain
rm -rv !("appsettings.json"|"UseNewDeploy-MPHMain.sh"|"staging"|"Logs")
cp -rp ../safety-MPHMain/* ./
chmod +x *.sh
#./Startme-MPHMain.sh
./ShowRunning.sh
#cp -a -r ../safety-MPHMain/* ./
