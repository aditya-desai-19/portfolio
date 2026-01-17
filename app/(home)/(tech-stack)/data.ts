import { StaticImageData } from "next/image"
import AwsLogo from "../../../public/aws.png"
import CssLogo from "../../../public/css.png"
import DockerLogo from "../../../public/docker.png"
import ExpressLogo from "../../../public/express.png"
import ExpressDarkBgLogo from "../../../public/express-dark-bg.png"
import GitLogo from "../../../public/git.png"
import HtmlLogo from "../../../public/html.png"
import JavaLogo from "../../../public/java.png"
import JavaScriptLogo from "../../../public/javascript-logo.png"
import JestLogo from "../../../public/jest-logo.png"
import MaterialUILogo from "../../../public/material-ui.png"
import NextJsLogo from "../../../public/next-js.png"
import NextJsDarkBgLogo from "../../../public/nextjs-dark-bg.png"
import NodeJsLogo from "../../../public/node-js.png"
import OpenApiLogo from "../../../public/open-api.png"
import PostgresLogo from "../../../public/postgres.png"
import PostmanLogo from "../../../public/postman-logo.png"
import ReactLogo from "../../../public/react.png"
import ReduxLogo from "../../../public/redux.png"
import ShadCnLogo from "../../../public/shadcn-ui.png"
import ShadCnDarkBgLogo from "../../../public/shadcn-dark-bg.png"
import SpringLogo from "../../../public/spring.png"
import TailwindCssLogo from "../../../public/tailwind-css.png"
import TypeScriptLogo from "../../../public/typescript.png"
import ZustandLogo from "../../../public/zustand.png"

interface TechStackProps {
  logo: StaticImageData
  name: string
}

export const getTechStackData = (isDarkTheme: boolean): TechStackProps[] => [
  { logo: JavaScriptLogo, name: "JavaScript" },
  { logo: TypeScriptLogo, name: "TypeScript" },
  { logo: JavaLogo, name: "Java" },
  { logo: HtmlLogo, name: "Html" },
  { logo: CssLogo, name: "Css" },
  { logo: TailwindCssLogo, name: "Tailwind Css" },
  { logo: ReactLogo, name: "React" },
  { logo: isDarkTheme ? NextJsDarkBgLogo : NextJsLogo, name: "Next.js" },
  { logo: ReduxLogo, name: "Redux" },
  { logo: ZustandLogo, name: "Zustand" },
  { logo: MaterialUILogo, name: "Material UI" },
  { logo: isDarkTheme ? ShadCnDarkBgLogo : ShadCnLogo, name: "Shadcn UI" },
  { logo: NodeJsLogo, name: "Node.js" },
  { logo: isDarkTheme ? ExpressDarkBgLogo : ExpressLogo, name: "Express.js" },
  { logo: JestLogo, name: "Jest" },
  { logo: SpringLogo, name: "Spring Boot" },
  { logo: PostgresLogo, name: "Postgres" },
  { logo: PostmanLogo, name: "Postman" },
  { logo: DockerLogo, name: "Docker" },
  { logo: GitLogo, name: "Git" },
  { logo: OpenApiLogo, name: "OpenApi" },
  { logo: AwsLogo, name: "AWS" },
]
