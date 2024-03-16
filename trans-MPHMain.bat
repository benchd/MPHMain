if exist trans_MPHMain.txt goto dotrans
@echo Can not copy files to the server! Missing file trans_MPHMain.txt
goto end1
:dotrans
"C:\Program Files (x86)\WinSCP\WinSCP.exe"  /ini=nul /script=trans_MPHMain.txt /log=trans_MPHMain.log 
:end1