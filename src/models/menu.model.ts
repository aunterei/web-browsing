export interface MenuItemModel {
  label: string;
  icon: string;
  to?: string;
  caption?: string;
  pages?: PageItemModel[];
}

export interface PageItemModel {
  label: string;
  icon: string;
  caption: string;
  to: string;
}

export const menuItems: MenuItemModel[] = [
  {
    label: 'Homepage',
    icon: 'home',
    to: '/',
  },
  {
    label: 'Cards',
    icon: 'feed',
    pages: [
      {
        label: 'Club Pale',
        caption: 'Product card inspired by Pepsi',
        icon: 'sports_bar',
        to: '/cards/club-pale',
      },
      {
        label: 'Earthstone Cards',
        caption: 'Rotation animation on mouse move',
        icon: 'auto_fix_normal',
        to: '/cards/earthstone',
      },
    ],
  },
  {
    label: 'Grids',
    icon: 'dashboard',
    pages: [
      {
        label: 'Image Gallery',
        caption: 'Images with info on hover',
        icon: 'image',
        to: '/grid/image-gallery',
      },
    ],
  },
  {
    label: 'Forms',
    icon: 'contact_mail',
    pages: [
      {
        label: 'Sliding Form',
        caption: 'Sliding Login/Sign Up transition',
        icon: 'arrow_downward',
        to: '/forms/sliding-form',
      },
    ],
  },
];
