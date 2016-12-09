## react-hot-reload v3 Scaffold ##

This repo contains scaffolds for `react-hot-reload` v3 and compare pros and cons when combining it with react-router and redux with several methods.

### Result ###

| redux | react-router | react-router-redux |  redux-router | hot reload | correct time travel | child component can access router state via connect |
|-------|--------------|--------------------|---------------|------------|---------------------|-----------------------------------------------------|
| no | no | no | no | **YES** | **NO** | **NO** |
| yes | no | no | no | **YES** | **YES** | **NO** |
| no | v3 | no | no | **YES** | **NO** | **NO** |
| yes | v3 | no | no | **YES** | **NO** | **NO** |
| yes | v3 | v4 | no | **NO** | **YES** | **NO** |
| yes | v2 | no | v2 | **NO** | **YES** | **YES** |
| yes | v4 | v5 | no | **YES** | **YES** | **YES** |
