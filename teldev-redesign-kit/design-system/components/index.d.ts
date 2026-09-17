// TELDEV design system — component types, as documentation.
// These describe the props each component accepts; they are not type-checked
// against bundle.js and exist purely so a consuming app (or another agent)
// can see each component's contract without opening its preview or guidelines.

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";
export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string; // a lucide-react icon name
  iconPosition?: "leading" | "trailing";
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  as?: "button" | "a";
  href?: string; // required when as="a"
  children: React.ReactNode;
}

export interface TextLinkProps {
  href: string;
  inline?: boolean; // set true only when the link sits inside a sentence of body copy
  external?: boolean;
  children: React.ReactNode;
}

export interface FieldCommonProps {
  id: string;
  label?: string;
  required?: boolean;
  helper?: string;
  error?: string; // presence implies aria-invalid
  success?: string;
  disabled?: boolean;
}
export interface InputProps extends FieldCommonProps {
  type?: "text" | "email" | "tel" | "url" | "password";
  placeholder?: string;
  defaultValue?: string;
}
export interface TextareaProps extends FieldCommonProps {
  rows?: number;
  placeholder?: string;
  defaultValue?: string;
}
export interface SelectOption { value: string; label: string; }
export interface SelectProps extends FieldCommonProps {
  options: SelectOption[];
  defaultValue?: string;
}
export interface CheckboxProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  children: React.ReactNode; // the label text
}
export interface RadioSegmentedOption { value: string; label: string; }
export interface RadioSegmentedProps {
  label?: string;
  options: RadioSegmentedOption[];
  defaultValue?: string;
  helper?: string;
  onChange?: (value: string) => void;
}

export type BadgeTone = "neutral" | "brand" | "success" | "warning" | "danger";
export interface BadgeProps { tone?: BadgeTone; icon?: string; children: React.ReactNode; }

export type ImageRatio = "16x9" | "4x3" | "1x1" | "3x4";
export interface ImagePlaceholderProps { ratio?: ImageRatio; label?: string; note?: string; }

export interface ServiceCardProps { icon: string; title: string; description: string; href?: string; }

export interface SectionHeaderProps { overline?: string; heading: string; lead?: string; center?: boolean; }

export interface TestimonialProps { quote?: string; name?: string; role?: string; }
export interface CaseStudyProps { title?: string; summary?: string; }
export interface EventHighlightProps { date?: { mon: string; day: string }; tag?: string; title?: string; description?: string; }
export interface BlogCardProps { category?: string; title?: string; excerpt?: string; date?: string; }
export interface TeamCardProps { name?: string; role?: string; bio?: string; }
export interface StatBlockProps { stats: { n: string; l: string }[]; }
export interface CTABannerProps { heading?: string; body?: string; cta?: string; }

export interface BreadcrumbItem { label: string; href?: string; } // last item has no href
export interface BreadcrumbsProps { items: BreadcrumbItem[]; }
export interface PaginationProps { page: number; count: number; onChange?: (page: number) => void; }
export interface EmptyStateProps { icon?: string; title?: string; description?: string; action?: string; }
