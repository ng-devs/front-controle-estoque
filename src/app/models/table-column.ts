export type TableColumn<T> = {
  [Key in keyof T]: string;
} & { actions?: string };
