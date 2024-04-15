if exist dist rd dist /s /q
call npm run build
copy *.sh dist
:pause
:dotnet publish . --configuration Debug --framework netcoreapp3.1 --output  ubuntu --self-contained false --runtime linux-x64 --verbosity minimal
:dotnet publish . --configuration Debug --framework netcoreapp3.1 -p:PublishDir=./ubuntu --self-contained false --runtime linux-x64 --verbosity minimal
call trans-MPHMain-mph387