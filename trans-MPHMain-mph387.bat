if exist trans_MPHMain-mph387.txt goto dotrans
@echo Can not copy files to the server! Missing file trans_MPHMain-mph387.txt
goto end1
:dotrans
"C:\Program Files (x86)\WinSCP\WinSCP.exe"  /ini=nul /script=trans_MPHMain-mph387.txt /log=trans_MPHMain-mph387.log 
:end1