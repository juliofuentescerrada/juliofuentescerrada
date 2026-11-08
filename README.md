<p>
<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="assets/variants/mono/header-compact-dark.svg">
  <source media="(max-width: 600px)" srcset="assets/variants/mono/header-compact-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="assets/variants/mono/header-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/variants/mono/header-light.svg">
  <img src="assets/variants/mono/header-light.svg" alt="Julio Fuentes Cerrada — Software Architect &amp; Technical Lead." width="1000">
</picture>
</p>



[🛠️ Projects](#projects) · [🧰 Technologies](#technologies) · [🤖 How I develop with AI](#how-i-develop-with-ai) · [💼 Experience](#experience)

**I build applications and the platforms that support them.** Over 20 years in software engineering, I have worked across backend and frontend development, architecture, cloud infrastructure and delivery, with a focus on .NET, Angular and Azure.

My work connects business requirements with technical decisions: modeling the domain, defining service boundaries, building APIs and user interfaces, and making systems observable and maintainable. I also help teams improve through code reviews, mentoring and shared engineering practices.

[![LinkedIn — Connect](assets/variants/mono/linkedin.svg)](https://www.linkedin.com/in/juliofuentescerrada/) [![Email — Let’s talk](assets/variants/mono/email-lime.svg)](mailto:juliofuentescerrada@outlook.com)

## Projects

These projects cover infrastructure, application development, applied AI, data engineering and product delivery.

| Project | Engineering focus |
| :--- | :--- |
| [Steward](#steward--azure-platform-and-delivery) | Azure platform & delivery |
| [Herald](#herald--application-architecture) | Application architecture |
| [Arcana](#arcana--applied-ai-with-evaluation) | Applied AI & evaluation |
| [Archivist](#archivist--data-pipelines-and-classification) | Data pipelines & classification |
| [Pauper Pilot](#pauper-pilot--product-development) | Product development |

### [Steward — Azure platform and delivery](https://github.com/juliofuentescerrada/steward)

A shared Azure platform designed to support multiple applications, with clear ownership boundaries between platform resources and application-specific infrastructure.

![Infrastructure as code](assets/focus/infrastructure-as-code.svg) ![CI/CD](assets/focus/ci-cd.svg) ![Identity and access](assets/focus/identity-and-access.svg) ![Recovery](assets/focus/recovery.svg) ![Cost-aware design](assets/focus/cost-aware-design.svg)

<details>
<summary>Platform decisions</summary>

OpenTofu and GitHub Actions support OIDC-based delivery, independent application state and resource activation according to need. Operational records cover access checks, recovery exercises and the cost trade-offs of running a small shared platform.

</details>

---

### [Herald — Application architecture](https://github.com/juliofuentescerrada/herald)

A tournament management application designed around registration, pairings, results and standings for individuals or teams. Game-specific rules are kept separate from the competition workflow.

![DDD and CQRS](assets/focus/ddd-and-cqrs.svg) ![Modular boundaries](assets/focus/modular-boundaries.svg) ![Transactional outbox/inbox](assets/focus/transactional-outbox-inbox.svg) ![API contracts](assets/focus/api-contracts.svg) ![Automated testing](assets/focus/automated-testing.svg)

<details>
<summary>Architecture &amp; implementation status</summary>

Herald brings together the core of my application development experience: domain modeling, a .NET backend, an Angular frontend and the decisions that connect them. Its modular monolith uses vertical slices, module-owned persistence and explicit integration boundaries. PostgreSQL persistence, Wolverine transactional messaging, architecture checks and CI form the implemented foundations; specifications and interactive UI prototypes guide the next steps.

</details>

---

### [Arcana — Applied AI with evaluation](https://github.com/juliofuentescerrada/arcana)

A rules assistant for Magic: The Gathering, a card game with a detailed, interconnected ruleset. Arcana retrieves rules and card rulings, generates answers with checkable citations, and can abstain when its sources do not support an answer.

🔗 **Live demo:** [Arcana](https://ca-arcana-web.politehill-c00afc81.northeurope.azurecontainerapps.io/)

![RAG](assets/focus/rag.svg) ![Retrieval evaluation](assets/focus/retrieval-evaluation.svg) ![Citation validation](assets/focus/citation-validation.svg) ![MCP](assets/focus/mcp.svg) ![Cost and latency trade-offs](assets/focus/cost-and-latency-trade-offs.svg)

<details>
<summary>Retrieval &amp; evaluation</summary>

A .NET API, Angular interface and MCP server expose the capabilities. PostgreSQL with pgvector supports retrieval, and Microsoft Foundry provides model inference. Experiments and evaluations document the trade-offs between retrieval quality, citation validity, latency and cost.

</details>

---

### [Archivist — Data pipelines and classification](https://github.com/juliofuentescerrada/archivist)

A .NET pipeline that extracts tournament decklists, normalizes events and card identities, and classifies decks into archetypes by similarity.

![Data ingestion](assets/focus/data-ingestion.svg) ![Normalization](assets/focus/normalization.svg) ![TF-IDF and centroids](assets/focus/tf-idf-and-centroids.svg) ![Evaluation](assets/focus/evaluation.svg) ![Data provenance](assets/focus/data-provenance.svg)

<details>
<summary>Pipeline &amp; evaluation</summary>

The local pipeline separates raw extraction, normalization, reference labels and classification. Calibration and temporal evaluation measure agreement with the reference alongside coverage, making uncertain assignments visible. Data provenance and keyed player hashes are part of the design.

</details>

---

### [Pauper Pilot — Product development](https://github.com/juliofuentescerrada/pauper-pilot)

A metagame explorer for Pauper, a Magic: The Gathering format. It helps players explore tournament decks and compare them with their own card collections.

🔗 **Live site:** [pauperpilot.com](https://pauperpilot.com/)

![Product design](assets/focus/product-design.svg) ![Astro and TypeScript](assets/focus/astro-and-typescript.svg) ![Supabase](assets/focus/supabase.svg) ![Collection workflows](assets/focus/collection-workflows.svg) ![Automated delivery](assets/focus/automated-delivery.svg)

<details>
<summary>Product &amp; delivery</summary>

TypeScript ingestion feeds an Astro static site, with Supabase-backed accounts and collections. Automated ingestion, checks and builds support daily updates, bringing together data processing, user-facing features and delivery in a personal product.

</details>

## Technologies

My core stack is **.NET, Azure and Angular**, supported by tools chosen for the work at hand.

![C#, .NET, Azure, Angular, TypeScript, Astro, Docker, Terraform, GitHub Actions, PostgreSQL and Supabase](assets/variants/mono/stack.svg)

| Area | Technologies & practices |
| :--- | :--- |
| Application engineering | ![C#](assets/technology-badges/c.svg) ![.NET](assets/technology-badges/net.svg) ![Angular](assets/technology-badges/angular.svg) ![TypeScript](assets/technology-badges/typescript.svg) ![Astro](assets/technology-badges/astro.svg) |
| Cloud & delivery | ![Azure](assets/technology-badges/azure.svg) ![Docker](assets/technology-badges/docker.svg) ![Terraform](assets/technology-badges/terraform.svg) ![OpenTofu](assets/technology-badges/opentofu.svg) ![GitHub Actions](assets/technology-badges/github-actions.svg) |
| Data | ![PostgreSQL](assets/technology-badges/postgresql.svg) ![SQL Server](assets/technology-badges/sql-server.svg) ![Supabase](assets/technology-badges/supabase.svg) |
| Applied AI | ![Microsoft Foundry](assets/technology-badges/microsoft-foundry.svg) ![RAG](assets/technology-badges/rag.svg) ![pgvector](assets/technology-badges/pgvector.svg) ![MCP](assets/technology-badges/mcp.svg) |
| AI-assisted development | ![Codex](assets/technology-badges/codex.svg) ![Claude Code](assets/technology-badges/claude-code.svg) ![OpenSpec](assets/technology-badges/openspec.svg) |

## How I develop with AI

I use **Codex and Claude Code** as part of my engineering workflow, and **OpenSpec** to connect requirements, design decisions, implementation tasks, and verification. My work also includes helping teams adopt these practices and making useful workflows reusable across an organization.

- **Specifications and context.** Define scope and acceptance criteria, record architectural decisions, and give agents explicit repository instructions. Keep that context with the code so work can continue across sessions.
- **Skills.** Capture repeatable engineering practices as task-specific instructions, including conventions, workflows, and validation steps. This gives agents a consistent starting point for recurring work.
- **Plugins and marketplaces.** Package and distribute reusable capabilities so teams can adopt shared tooling and practices. I have put an internal AI development plugin marketplace in place at the organization level.
- **Harness design.** Treat the environment around the agent as part of the engineering work: context loading, tool access, execution boundaries, feedback from tests, and checks before a change is accepted. The aim is to make the workflow repeatable and its results inspectable.
- **Review and feedback.** Keep changes focused, inspect the implementation, and use tests, static analysis, and CI to check the result. Feed corrections back into specifications and working instructions.

I remain responsible for architecture, trade-offs, and acceptance. My focus is on building a development process that teams can understand, reuse, and improve as the tools evolve.

## Experience

Over 20 years, I have progressed from software development to technical leadership and Principal Engineer responsibilities, working across business applications, digital platforms, and cloud infrastructure.

My experience includes designing .NET systems, building web applications, evolving platforms on Azure, and improving delivery through CI/CD, automated testing, and observability. Code reviews, mentoring, and shared engineering standards have been a consistent part of that work.

I currently work as a Technical Delivery Manager, connecting that engineering background with architecture alignment and delivery across teams.

[Explore my professional background on LinkedIn](https://www.linkedin.com/in/juliofuentescerrada/)

