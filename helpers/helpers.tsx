import CoursesIcon from "../utils/img/courses.svg";
import ServicesIcon from "../utils/img/services.svg";
import BooksIcon from "../utils/img/books.svg";
import ProductsIcon from "../utils/img/products.svg";
import { TopLevelCategory } from "@/app/interfaces/page.interface";
import { FirstLevelMenuItem } from "@/app/interfaces/menu.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: "courses", name: "Курсы", icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: "services", name: "Сервисы", icon: <ServicesIcon />, id: TopLevelCategory.Services },
    { route: "books", name: "Книги", icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: "products", name: "Продукты", icon: <ProductsIcon />, id: TopLevelCategory.Products },
];
