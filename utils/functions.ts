import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { MenuType } from "./../types";
export const changeNavigationCurrent = (
  href: string,
  menu: MenuType[],
  setMenu: Function
) => {
  const navigation = menu.map((item) =>
    item.href === href
      ? { ...item, current: true }
      : { ...item, current: false }
  );
  setMenu(navigation);
};
export const getIdFromPath = (path: string): number => {
  const parts = path.split("/");
  const id = parts[parts.length - 1];
  return parseInt(id);
};
export const getCategoryIdFromPath = (path: string): number => {
  const parts = path.split("/");
  const id = parts[parts.length - 2];
  return parseInt(id);
};

export const handleClick = (name: string) => {
  if (name === "Sign out") {
    supabaseClient.auth.signOut();
  }
};


