#!/bin/bash
cd /alta/MPHMain
rm -rv !("appsettings.json"|"UseNewDeploy-MPHMain.sh"|"staging"|"Logs")
cp -rp ../safety-MPHMain/* ./
chmod +x *.sh
./ShowRunning.sh

