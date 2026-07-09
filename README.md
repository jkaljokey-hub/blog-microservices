# 🚀 Cloud-Native Microservices Platform on Docker Swarm
![Docker Swarm](https://img.shields.io/badge/Docker-Swarm-2496ED?logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI/CD-2088FF?logo=github-actions&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-Frontend-000000?logo=next.js)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?logo=prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?logo=grafana&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?logo=nginx&logoColor=white)


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

- Multi-node Docker Swarm Cluster
- Microservices Architecture
- Docker Overlay Networking
- Internal Service Discovery
- Docker Secrets Management
- Rolling Updates
- Automatic Rollback
- Health Checks
- Redis Caching
- PostgreSQL Database
- Prometheus Monitoring
- Grafana Dashboards
- GitHub Actions CI/CD Pipeline
- Automated Docker Image Build & Push
- Automated Stack Deployment
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
- Health Monitoringg

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

## Networking

The application uses Docker Swarm Overlay Networks to enable secure communication between services running on different nodes.

- Frontend Overlay Network
  - Frontend ↔ API

- Backend Overlay Network
  - API ↔ PostgreSQL
  - API ↔ Redis

Docker Swarm Service Discovery allows containers to communicate using service names instead of IP addresses, improving scalability and resilience.

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
## CI/CD Pipeline

Every push to the main branch automatically triggers GitHub Actions.

```text
Developer
     │
     ▼
GitHub Push
     │
     ▼
GitHub Actions
     │
     ├── Build Frontend Image
     ├── Build API Image
     ├── Push Images to Docker Hub
     └── Deploy Updated Stack to Docker Swarm
```

The deployment uses Docker Swarm rolling updates, ensuring zero-downtime deployments by updating one replica at a time.





## Cloud Engineering Concepts Demonstrated

- Containerization with Docker
- Multi-Service Architecture
- Docker Swarm Orchestration
- Overlay Networking
- Routing Mesh
- Service Discovery
- Reverse Proxy (Nginx)
- Docker Secrets
- Health Checks
- Rolling Updates
- Automatic Rollback
- Horizontal Scaling
- Redis Caching
- PostgreSQL Persistence
- Infrastructure Monitoring
- GitHub Actions CI/CD
- Infrastructure Status API
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
