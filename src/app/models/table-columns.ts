export type TableColumns<T> = {
  [Key in keyof T]: string;
} & { actions?: string };
