export interface PropAlert {
  variant: "error" | "warning" | "info" | "success";
  visible: boolean;
  title: string;
  description: string;
  actionClose: () => void;
}
