import {StaticImageData} from "next/image";

import azure_login_step1 from "../assets/images/tutorials/azure_login/step1.png";
import azure_login_step2 from "../assets/images/tutorials/azure_login/step2.png";

import github_setup_step1 from "../assets/images/tutorials/github_setup/step1.png";
import github_setup_step2 from "../assets/images/tutorials/github_setup/step2.png";

import github_oauth_step1 from "../assets/images/tutorials/github_oauth/step1.png";
import github_oauth_step2 from "../assets/images/tutorials/github_oauth/step2.png";
import github_oauth_step3 from "../assets/images/tutorials/github_oauth/step3.png";

import jenkins_setup_step1 from "../assets/images/tutorials/jenkins_setup/step1.png";
import jenkins_setup_step2 from "../assets/images/tutorials/jenkins_setup/step2.png";
import jenkins_setup_step3 from "../assets/images/tutorials/jenkins_setup/step3.png";
import jenkins_setup_step4 from "../assets/images/tutorials/jenkins_setup/step4.png";
import jenkins_setup_step5 from "../assets/images/tutorials/jenkins_setup/step5.png";
import jenkins_setup_step6 from "../assets/images/tutorials/jenkins_setup/step6.png";
import jenkins_setup_step7 from "../assets/images/tutorials/jenkins_setup/step7.png";
import jenkins_setup_step8 from "../assets/images/tutorials/jenkins_setup/step8.png";

export type Input = {
  id: string;
  label: string;
  type: string;
};

export type TutStep = {
  nb: number;
  title: string;
  instructions: string[];
  image_visible: boolean;
  image: StaticImageData;
  link?: {title: string; url: string};
  input_link?: string;
};

export type Step = {
  id: string;
  nb: number;
  label: string;
  api_endpoint: string;
  inputs: Input[];
  tutorial?: {
    visible: boolean;
    title: string;
    steps: TutStep[];
  };
};

const steps: Step[] = [
  {
    id: "jenkins_setup",
    nb: 0,
    label: "Jenkins Setup",
    api_endpoint: "jenkins-setup",
    inputs: [
      {id: "JENKINS_USERNAME", label: "Jenkins Username", type: "text"},
      {id: "JENKINS_API_TOKEN", label: "Jenkins API Token", type: "password"},
    ],
    tutorial: {
      visible: true,
      title: "",
      steps: [
        {
          nb: 0,
          title: "Open Jenkins",
          instructions: [
            "This is your jenkins admin password: <jenkins_admin_pass>",
            "Copy it and paste it into the adminstrator password field",
            "Then click 'Continue'",
          ],
          image_visible: true,
          image: jenkins_setup_step1,
          link: {
            title: "http://<VM_ADDRESS>:8080",
            url: "http://<VM_ADDRESS>:8080",
          },
        },
        {
          nb: 1,
          title: "Install Jenkins Plugins",
          instructions: ["Click 'Install suggested plugins'"],
          image_visible: true,
          image: jenkins_setup_step2,
          link: {
            title: "http://<VM_ADDRESS>:8080",
            url: "http://<VM_ADDRESS>:8080",
          },
        },
        {
          nb: 2,
          title: "Create Jenkins User",
          instructions: [
            "Fill with credentails to create a new jenkins user",
            "Enter the same username used here in the username input above",
          ],
          image_visible: true,
          image: jenkins_setup_step3,
          link: {
            title: "http://<VM_ADDRESS>:8080",
            url: "http://<VM_ADDRESS>:8080",
          },
        },
        {
          nb: 3,
          title: "Instance Configuration",
          instructions: ["Click 'Save and Finish'"],
          image_visible: true,
          image: jenkins_setup_step4,
          link: {
            title: "http://<VM_ADDRESS>:8080",
            url: "http://<VM_ADDRESS>:8080",
          },
        },
        {
          nb: 4,
          title: "Jenkins is ready",
          instructions: ["Click 'Start using Jenkins'"],
          image_visible: true,
          image: jenkins_setup_step5,
          link: {
            title: "http://<VM_ADDRESS>:8080",
            url: "http://<VM_ADDRESS>:8080",
          },
        },
        {
          nb: 5,
          title: "Open configuration page",
          instructions: [
            "Click on your username in the up-right corner",
            "Click on configure",
          ],
          image_visible: true,
          image: jenkins_setup_step6,
          link: {
            title: "http://<VM_ADDRESS>:8080",
            url: "http://<VM_ADDRESS>:8080",
          },
        },
        {
          nb: 6,
          title: "Name the API token",
          instructions: [
            "In the API Token section, enter a clear name for Jenkins' api token",
          ],
          image_visible: true,
          image: jenkins_setup_step7,
          link: {
            title: "http://<VM_ADDRESS>:8080",
            url: "http://<VM_ADDRESS>:8080",
          },
        },
        {
          nb: 7,
          title: "Generate Jenkins' API Token",
          instructions: [
            "Click 'Generate'",
            "Select and copy the token",
            "Paste the token in the API token field at the top of this page",
          ],
          image_visible: true,
          image: jenkins_setup_step8,
          link: {
            title: "http://<VM_ADDRESS>:8080",
            url: "http://<VM_ADDRESS>:8080",
          },
        },
      ],
    },
  },
  {
    id: "azure_login",
    nb: 1,
    label: "Azure Login",
    api_endpoint: "azure-login",
    inputs: [
      {id: "AZURE_CLIENT_ID", label: "Client ID", type: "text"},
      {id: "AZURE_CLIENT_SECRET", label: "Client Secret", type: "password"},
      {id: "AZURE_TENANT_ID", label: "Tenant ID", type: "text"},
      {id: "SUBSCRIPTION_ID", label: "Subscription ID", type: "text"},
    ],
    tutorial: {
      visible: true,
      title: "App Registration Step",
      steps: [
        {
          nb: 0,
          title: "Open Azure Portal",
          instructions: [
            "Search for 'app registrations'",
            "Click on App registrations",
          ],
          image_visible: true,
          image: azure_login_step1,
          link: {
            title: "https://portal.azure.com/#home",
            url: "https://portal.azure.com/#home",
          },
        },
        {
          nb: 1,
          title: "Create new app registration",
          instructions: ["Click New registration"],
          image_visible: true,
          image: azure_login_step2,
        },
      ],
    },
  },
  {
    id: "terraform-vars",
    nb: 2,
    label: "Infrastructure",
    api_endpoint: "terraform-vars",
    inputs: [
      {id: "RESOURCE_GROUP", label: "Resource Group Name", type: "text"},
      {
        id: "CONTAINER_REGISTRY",
        label: "Container Registry Name",
        type: "text",
      },
    ],
    tutorial: {
      visible: false,
      title: "",
      steps: [],
    },
  },
  {
    id: "github_setup",
    nb: 3,
    label: "Github SSH Key",
    api_endpoint: "github-setup",
    inputs: [
      {id: "GITHUB_USERNAME", label: "Github Username", type: "text"},
      {id: "GITHUB_TOKEN", label: "Github Token", type: "password"},
    ],
    tutorial: {
      visible: true,
      title: "App Registration Step",
      steps: [
        {
          nb: 0,
          title: "Open github token page",
          instructions: [],
          image_visible: true,
          image: github_setup_step1,
          link: {
            title: "https://github.com/settings/tokens/new",
            url: "https://github.com/settings/tokens/new",
          },
        },
        {
          nb: 1,
          title: "Generate token",
          instructions: [],
          image_visible: true,
          image: github_setup_step2,
        },
      ],
    },
  },
  {
    id: "github_oauth",
    nb: 4,
    label: "Github Oauth",
    api_endpoint: "github-oauth",
    inputs: [
      {id: "GITHUB_CLIENT_ID", label: "Github Client Id", type: "text"},
      {id: "GITHUB_CLIENT_SECRET", label: "Github Secret", type: "password"},
    ],
    tutorial: {
      visible: true,
      title: "OAuth App Registration",
      steps: [
        {
          nb: 0,
          title: "Open the Register a new OAuth application page",
          instructions: [
            "Enter http://<VM_ADDRESS>:7007/ into the Homepage URL* field",
            "Enter http://<VM_ADDRESS>:7007/api/auth/github/handler/frame into the Authorization callback URL* field",
          ],
          image_visible: true,
          image: github_oauth_step1,
          link: {
            title: "https://github.com/settings/applications/new",
            url: "https://github.com/settings/applications/new",
          },
        },
        {
          nb: 1,
          title: "Copy Client ID",
          instructions: [
            "Copy the Client ID and paste it in the installation guide",
          ],
          image_visible: true,
          image: github_oauth_step2,
          input_link: "GITHUB_CLIENT_ID",
        },
        {
          nb: 2,
          title: "Generate a new client secret",
          instructions: [
            "Click on 'Generate a new client secret'",
            "Copy the generated client secret and paste it in the installation guide",
          ],
          image_visible: true,
          image: github_oauth_step3,
          input_link: "GITHUB_CLIENT_SECRET",
        },
      ],
    },
  },
  {
    id: "database-creds",
    nb: 5,
    label: "Database Credentials",
    api_endpoint: "database-creds",
    inputs: [
      {id: "POSTGRES_USER", label: "Postgres User", type: "text"},
      {id: "POSTGRES_PASSWORD", label: "Postgres Password", type: "password"},
    ],
    tutorial: {
      visible: false,
      title: "",
      steps: [],
    },
  },
  {
    id: "automation-setup",
    nb: 6,
    label: "Automation Setup",
    api_endpoint: "automation-setup",
    inputs: [],
    tutorial: {
      visible: false,
      title: "",
      steps: [],
    },
  },
  {
    id: "adding-cred-to-jenkins",
    nb: 7,
    label: "Adding Credentials to Jenkins",
    api_endpoint: "adding-cred-to-jenkins",
    inputs: [],
    tutorial: {
      visible: false,
      title: "",
      steps: [],
    },
  },
  {
    id: "docker-compose",
    nb: 8,
    label: "Starting the Docker Containers",
    api_endpoint: "docker-compose",
    inputs: [],
    tutorial: {
      visible: false,
      title: "",
      steps: [],
    },
  },
];

export default steps;
