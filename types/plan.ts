export type Plan = {
  id: number;
  name: string;
  name_color: string;
  icon: string;
  description: string;
  price: string;
  alt_price: string;
  call_to_action: string;
  call_to_action_variant: 'outline' | 'solid';
  call_to_action_color: 'primary' | 'neutral';
  featureList: string[];
};
