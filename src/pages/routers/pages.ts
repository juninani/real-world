import Home from "@/pages/home";
import Profile from "@/pages/profile";
import ManagementArticle from "@/pages/management-article";
import Article from "@/pages/article";
import signIn from "@/pages/auth/sign-in";
import signUp from "@/pages/auth/sign-up";
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
    component: signUp,
  },
  {
    path: "/sign-in",
    component: signIn,
  },
  {
    path: "/settings",
    component: Settings,
  },
];

export default pages;
