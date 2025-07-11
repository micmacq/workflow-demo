import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  FileBarChart2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "浩力森",
    email: "haolisen@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "浩力森化学科技有限公司",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    // {
    //   name: "Acme Corp.",
    //   logo: AudioWaveform,
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: Command,
    //   plan: "Free",
    // },
  ],
  navMain: [
    // {
    //   title: "Playground",
    //   url: "#",
    //   icon: SquareTerminal,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "History",
    //       url: "#",
    //     },
    //     {
    //       title: "Starred",
    //       url: "#",
    //     },
    //     {
    //       title: "Settings",
    //       url: "#",
    //     },
    //   ],
    // },
    {
      title: "模型",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "模型列表",
          url: "#",
        },
        {
          title: "自动训练",
          url: "#",
        },
        {
          title: "参数调整",
          url: "#",
        },
      ],
    },
    {
      title: "文档",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "介绍",
          url: "#",
        },
        {
          title: "如何开始",
          url: "#",
        },
      ],
    },
    {
      title: "设置",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "通用",
          url: "#",
        },
        {
          title: "团队（部门）",
          url: "#",
        },
        {
          title: "用户",
          url: "#",
        }
      ],
    },
  ],
  projects: [
    {
      name: "项目管理",
      url: "/",
      icon: FileBarChart2,
    },
    {
      name: "流程管理",
      url: "/flow",
      icon: PieChart,
    },
    {
      name: "器材管理",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
