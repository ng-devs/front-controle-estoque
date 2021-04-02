type AvailablePipes = 'currency' | 'date';

interface GenericPipe {
  name: AvailablePipes;
  args?: string[] | string;
}

interface Column {
  pipe?: GenericPipe;
  label: string;
}

type TableColumns<T> = {
  [Key in keyof T]: Column;
} & { actions?: string };

export { TableColumns, AvailablePipes };
