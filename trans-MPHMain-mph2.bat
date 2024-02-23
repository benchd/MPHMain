if exist trans_MPHMain-mph2.txt goto dotrans
@echo Can not copy files to the server! Missing file trans_MPHMain-mph2.txt
goto end1
:dotrans
"C:\Program Files (x86)\WinSCP\WinSCP.exe"  /ini=nul /script=trans_MPHMain-mph2.txt /log=trans_MPHMain-mph2.log 
:end1