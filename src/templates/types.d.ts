import { PageProps } from "gatsby";


export interface TemplateProps<T> extends PageProps {
  pageContext: {
    prev: T | null;
    next: T | null;
    node: T;
  }
}
