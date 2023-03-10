import type{ DefineComponent } from "vue";

declare module '*.vue' {
  const component: DefineComponent
  return component
}