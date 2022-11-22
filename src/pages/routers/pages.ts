import Home from "@/pages/home";
import Profile from "@/pages/profile";
import ManagementArticle from "@/pages/managementArticle";
import Article from "@/pages/article";
import Auth from "@/pages/auth";
import Settings from "@/pages/settings";
interface PageInfo {
  path: string;
  component: (props?: any) => JSX.Element;
}

const pages: Array<Readonly<PageInfo>> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/managementArticle",
    component: ManagementArticle,
  },
  {
    path: "/article",
    component: Article,
  },
  {
    path: "/sign-up",
    component: Auth,
  },
  {
    path: "/sign-in",
    component: Auth,
  },
  {
    path: "/settings",
    component: Settings,
  },
];

export default pages;
