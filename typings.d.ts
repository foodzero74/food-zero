export interface Category {
  name: string
  description: string
  disabled: boolean
  image: string
  products: Product[]
}

export interface Product {
  name: string
  description: string
  disabled: boolean
  id: string
  image: string
  price: number
  priority: number
}

export interface CategoryQuery {
  categories: Category[]
}

export interface StaffMember {
  name: string
  description: string
  role: string
  image: string
}

export interface StaffQuery {
  staff: StaffMember[]
}

export interface MeatProcess {
  name: string
  description: string
  order: number
  image: string
}

export interface MeatProcessQuery {
  getAllMeatProcess: MeatProcess[]
}

export interface Params {
  address: string
  backgroundAbout: string
  backgroundBlog: string
  backgroundBlogDetail: string
  backgroundContact: string
  backgroundCover: string
  backgroundMenu: string
  blogDetailCommentTitle: string
  blogSectionSubtitle: string
  blogSectionTitle: string
  contactSectionSubtitle: string
  contactSectionTitle: string
  email: string
  facebook: string
  homeSection1Images: []
  homeSection1ImagesText1: string
  homeSection1ImagesText2: string
  homeSection1Paragraph1: string
  homeSection1Paragraph2: string
  homeSection1Subtitle: string
  homeSection1Title: string
  homeSection2ButtonText: string
  homeSection2Subtitle: string
  homeSection2Title: string
  homeSection3Images: []
  homeSection3Paragraph: string
  homeSection3Title: string
  homeSectionMenuSubtitle: string
  homeSectionMenuTitle: string
  id: string
  instagram: string
  menuSectionSubtitle: string
  menuSectionTitle: string
  phone: string
  titleCommentsHome: string
  twitter: string
  youtube: string
}

export interface ParamsQuery {
  getParams: Params
}

export interface IHome {
  titleCommentsHome: string
  homeSection1Title: string
  homeSection1Subtitle: string
  homeSection1Paragraph1: string
  homeSection1Paragraph2: string
  homeSection1Images: string[]
  homeSection1ImagesText1: string
  homeSection1ImagesText2: string
  homeSection2Title: string
  homeSection2Subtitle: string
  homeSection2ButtonText: string
  homeSection3Title: string
  homeSection3Paragraph: string
  homeSection3Images: string[]
  homeSectionMenuTitle: string
  homeSectionMenuSubtitle: string
}

export interface IGeneral {
  address: string
  email: string
  facebook: string
  instagram: string
  phone: string
  twitter: string
  youtube: string
}

export interface IMenu {
  menuSectionSubtitle: string
  menuSectionTitle: string
}
