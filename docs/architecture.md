# architecture

DNS is a microservice which is built using so-called Clean Architecture approach. This approach is grounded on 4 application core layers:

- Enterprise business rules, which represents Entities for given Domain Context
- Application business rules, which represents Use cases that solve particular tasks within Domain Context using Domain Entities
- Infrastructure, which contains all the frameworks and tools that serves the spine of the application (like web server, logger, etc.)
- Interface adapters, which are the glue between outside world and Infrastructure, and Business rules

This architecture also uses IOC, so the flow is being controlled from the outside to the inside. That means, any change in the outside layer has no effect to the inner layers, but e.g. changing Domain context can affect all layers of the system.

Learn more at:

- [Uncle's Bob blog](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Node Clean Architecture | Medium](https://medium.com/better-programming/node-clean-architecture-deep-dive-ab68e523554b)
