/* eslint-disable @next/next/no-img-element */
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import useAuthStore from "@/src/store/authStore";
import logo from "../../img/logo.png";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { OwnAvatar } from "../home/OwnAvatar";
const items = [
  {
    title: "Copywriting best practices with another copywriter",
  },
  {
    title: "Copywriting best practices with another copywriter",
  },
  {
    title: "Calendar",
  },
  {
    title: "Search",
  },
  {
    title: "Settings",
  },
];
export function AppSidebar() {
  const router = useRouter();
  const { userInfo, clearTokens } = useAuthStore();
  function logOutHandler() {
    clearTokens();
    return router.push("/auth");
  }
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu className="flex flex-row items-center gap-3">
          <img src={logo.src} alt="" className="size-10" />
          <p className="text-stone-900 font-semibold text-lg">AKMC</p>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <button className="bg-[#C8FABB] py-3 rounded-xl text-xs text-stone-800 font-semibold uppercase">
                New Chat
              </button>
            </SidebarMenu>
            <SidebarMenu className="mt-6 mb-2 flex flex-row items-center justify-between">
              <p className="text-xs uppercase font-semibold text-stone-500">
                Conversations
              </p>
              <button className="text-red-600 text-[10px] rounded-md uppercase font-semibold px-2 hover:bg-red-100">
                Clear All
              </button>
            </SidebarMenu>
            <SidebarSeparator />
            <SidebarMenu className="mt-3">
              {items.map((item, id) => (
                <SidebarMenuItem
                  key={item.title + id}
                  className="whitespace-nowrap overflow-hidden text-xs cursor-pointer"
                >
                  <SidebarMenuButton asChild>
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="flex flex-row items-center gap-3">
          <OwnAvatar />
          <p className="text-xs text-stone-700 font-medium">
            {userInfo?.email}
          </p>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuButton asChild onClick={logOutHandler}>
            <button>
              <LogOut />
              <span>Logout</span>
            </button>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
