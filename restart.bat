TASKKILL /FI  "WINDOWTITLE eq Conan Exiles" 
TIMEOUT 30
TASKKILL /F /FI  "WINDOWTITLE eq ConanExiles*"
TIMEOUT 5
start DedicatedServerLauncher*.exe
