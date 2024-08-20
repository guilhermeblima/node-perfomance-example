## PM2 usage for cluster management

Start cluster with max number of processes
```
pm2 start server.js -i max
```
Display all processes
```
pm2 list
```

Check Logs
```
pm2 logs
```

Delete existing process
```
pm2 delete server
```

Zero Downtime restart
```
pm2 reload server
```

Monitor CPU and Memore Usage server
```
pm2 monit
```