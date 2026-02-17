declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      "givebutter-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        id: string;
      };
      "givebutter-form": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        campaign: string;
      };
    }
  }
}
