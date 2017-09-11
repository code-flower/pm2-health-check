
### Overview

Sometimes cloud-based service providers (AWS, digital-ocean) require a health-check endpoint to confirm the status of servers (e.g. for load-balancing). This module creates such an endpoint at the port you specify.

### Installation

```
pm2 install code-flower/pm2-health-check
```

### Configuration

By default, the health check server runs on port 28464, with an endpoint of '/health'. You can configure both the port and endpoint using the set command:

```
pm2 set pm2-health-check:port [port]
pm2 set pm2-health-check:endpoint [endpoint]
```

### Testing

You can use curl to make sure the endpoint is working, e.g.:

```
curl http://example.com:28484/health
```