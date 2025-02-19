#!/bin/bash
cd /alta/MPHMain
shopt -s extglob
cp -rp ./*!('staging') ../safety-MPHMain/
rm -rv !("appsettings.json"|"UseNewDeploy-MPHMain.sh"|"Rollback-MPHMain.sh"|"staging"|"Logs")
cd staging 
cp -rp ./*!("UseNewDeploy-MPHMain.sh") ../
cp -rp ./*!('Rollback-MPHMain.sh') ../ 
shopt -u extglob
cd ..
cp /alta/Utils/ShowRunning.sh .
chmod +x ./*.sh
#chmod +x ./index.html
./ShowRunning.sh
