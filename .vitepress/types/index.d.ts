import { type DefaultTheme } from "vitepress";

export type NavItemWithLink = DefaultTheme.NavItemWithLink & {
  icon?: string;
};

export type NavItemChildren = Omit<DefaultTheme.NavItemChildren, "items"> & {
  items: NavItemWithLink[];
};

export type NavItemWithChildren = Omit<DefaultTheme.NavItemWithChildren, "items"> & {
  items: (DefaultTheme.NavItemComponent | NavItemChildren | NavItemWithLink)[];
};

export type NavItem = DefaultTheme.NavItemComponent | NavItemWithLink | NavItemWithChildren;

export type ThemeConfig = Omit<DefaultTheme.Config, "nav"> & {
  nav: NavItem[];
};
