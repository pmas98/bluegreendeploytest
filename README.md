# Blue-Green Deployment with Jenkins on AWS

This example demonstrates a Continuous Integration and Continuous Deployment (CI/CD) workflow using Jenkins for a Blue-Green deployment on AWS.

## Purpose

The purpose of this example is to showcase how to implement a Blue-Green deployment strategy using Jenkins and AWS. Blue-Green deployment is a release management approach that allows for zero-downtime deployments by maintaining two identical environments, referred to as the Blue and Green environments. The Blue environment represents the currently live production environment, while the Green environment is a clone of the Blue environment where new changes are deployed and tested before being switched over to become the new production environment.

## Workflow

1. Jenkins triggers a build whenever changes are pushed to the repository.
2. The build process compiles and packages the application code.
3. Jenkins deploys the application to the Green environment.
4. Automated tests are executed against the Green environment to ensure its stability and functionality.
5. If the tests pass, Jenkins switches the load balancer to route traffic to the Green environment.
6. The Green environment becomes the new production environment, and the Blue environment is kept as a backup.
7. If any issues are detected in the Green environment, Jenkins can quickly switch back to the Blue environment to minimize downtime.

## Prerequisites

To follow along with this example, you will need:

- An AWS account with appropriate permissions to create and manage resources.
- Jenkins installed and configured with the necessary plugins.
- A Git repository to store your application code.

