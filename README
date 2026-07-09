# 🚀 Cloud-Native Microservices Platform on Docker Swarm

A production-inspired cloud project demonstrating how to deploy, scale, monitor, and automate a multi-service application using **Docker Swarm**.

Instead of focusing on application complexity, this project focuses on **infrastructure engineering**, service orchestration, monitoring, and deployment strategies.

---

## Architecture

```text
                        Internet
                            │
                            ▼
                   Nginx Frontend (2 Replicas)
                            │
                            ▼
                  Docker Swarm Routing Mesh
                            │
                            ▼
                  Node.js API (3 Replicas)
                     │                 │
                     ▼                 ▼
              PostgreSQL         Redis Cache
                     │
                     ▼
          Docker Secrets (DB Password)

──────────────────────────────────────────────

Prometheus
        │
        ▼
cAdvisor (all nodes)
        │
        ▼
Grafana Dashboards
```

---

## Project Highlights

- Docker Swarm Cluster
- Multi-node deployment
- Overlay Networking
- Docker Routing Mesh
- Service Discovery
- Docker Secrets
- Rolling Updates
- Automatic Rollback
- Health Checks
- Redis Caching
- PostgreSQL Database
- Prometheus Monitoring
- Grafana Dashboards
- CI/CD Ready
- Horizontal Scaling

---

## Technologies

| Technology | Purpose |
|------------|---------|
| Docker | Containerization |
| Docker Swarm | Container Orchestration |
| Node.js + Express | Backend API |
| Next.js | Frontend |
| PostgreSQL | Persistent Database |
| Redis | High-speed Cache |
| Nginx | Reverse Proxy |
| Prometheus | Metrics Collection |
| Grafana | Monitoring Dashboard |

---

## Features

### Frontend

- Responsive Next.js Movie Application
- External Movie API Integration
- Infrastructure Status Footer
- Nginx Reverse Proxy

### Backend

- Express REST API
- Redis Cache Layer
- PostgreSQL Integration
- Health Endpoint
- Infrastructure Status Endpoint

### Infrastructure

- Docker Swarm Cluster
- Overlay Networks
- Internal Service Discovery
- Rolling Updates
- Rollback Configuration
- Health Monitoring

### Monitoring

- Prometheus Metrics
- cAdvisor Container Metrics
- Grafana Dashboards
- Real-time CPU / Memory Monitoring

---

## Infrastructure Status

The frontend communicates with the backend to display real-time infrastructure information.

Example:

```
Infrastructure Status

API : Online
Container : api-2
PostgreSQL : Connected
Redis : Connected
```

Refreshing the page may display different API container names, demonstrating **Docker Swarm load balancing**.

---

## Docker Swarm Features Demonstrated

### Service Replication

```
Frontend : 2 Replicas

API : 3 Replicas

Redis : 1 Replica

PostgreSQL : 1 Replica
```

### Rolling Updates

```
update_config:
  parallelism: 1
  delay: 10s
```

### Automatic Rollback

```
rollback_config:
  parallelism: 1
```

### Health Checks

```bash
GET /health
```

Swarm automatically replaces unhealthy containers.

---

## Monitoring Stack

- Prometheus
- Grafana
- cAdvisor

Real-time metrics include:

- CPU Usage
- Memory Usage
- Network Traffic
- Container Status
- Service Availability

---

## Repository Structure

```
.
├── api
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── Dockerfile
│   ├── nginx.conf
│   └── Next.js Application
│
├── monitoring
│   ├── prometheus.yml
│   └── stack-monitor.yml
│
└── stack.yml
```

---

## Deployment

Deploy the application:

```bash
docker stack deploy -c stack.yml blog
```

Deploy monitoring:

```bash
docker stack deploy -c monitoring/stack-monitor.yml monitor
```

---

## What This Project Demonstrates

This project was built to practice cloud infrastructure concepts rather than frontend development.

It demonstrates:

- Building production-like containerized applications
- Service orchestration with Docker Swarm
- Multi-node networking
- Zero-downtime deployments
- Container health management
- Infrastructure monitoring
- Secure secret management
- Redis caching
- PostgreSQL persistence
- Reverse proxy configuration
- CI/CD-ready deployment architecture

---

## Future Improvements

- GitHub Actions CI/CD
- Automatic Docker Image Builds
- HTTPS with Let's Encrypt
- Traefik Ingress
- Docker Registry Automation
- Terraform Infrastructure Provisioning
- Kubernetes Migration

---

## Author

**Abubakar Alnour**

Cloud Administrator | Azure Administrator (AZ-104) | Terraform Associate

Passionate about Cloud Infrastructure, Hybrid Environments, Automation, and DevOps.
