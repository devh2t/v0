import Image from "next/image";
import { Button } from "../components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "../components/ui/sheet"
import Link from "next/link"
import { CarouselItem, CarouselContent, Carousel } from "../components/ui/carousel"
import { PopoverTrigger, PopoverContent, Popover } from "../components/ui/popover"
import { Calendar } from "../components/ui/calendar"
import { DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu } from "../components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../components/ui/table"
export default function Home() {
  return (
    <>
    <div className="border-t border-green-500 border-b flex items-center justify-between px-4 py-2 bg-green-500">
      <div className="flex items-center">
        <img
          alt="GHELLA Logo"
          className="mr-2"
          height="40"
          src="/placeholder.svg"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width="40"
        />
        <h1 className="text-2xl font-bold text-white">GHELLA</h1>
        <PanelBottomCloseIcon className="ml-4 h-6 w-6 text-white cursor-pointer hover:text-gray-300" />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden border-l border-green-500" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6 text-white" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col items-start p-6 space-y-4">
            <Link className="text-lg font-medium text-black rounded-md px-2 py-1" href="#">
              <HomeIcon className="w-5 h-5 mr-2 text-black" />
              الرئيسية
            </Link>
            <Link className="text-lg font-medium text-black rounded-md px-2 py-1" href="#">
              <TagIcon className="w-5 h-5 mr-2 text-black" />
              الأسعار
            </Link>
            <Link className="text-lg font-medium text-black rounded-md px-2 py-1" href="#">
              <NewspaperIcon className="w-5 h-5 mr-2 text-black" />
              الأخبار
            </Link>
            <Link className="text-lg font-medium text-black rounded-md px-2 py-1" href="#">
              <UserIcon className="w-5 h-5 mr-2 text-black" />
              من نحن
            </Link>
            <Link className="text-lg font-medium text-black rounded-md px-2 py-1" href="#">
              <LogInIcon className="w-5 h-5 mr-2 text-black" />
              تسجيل الدخول
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
    <div className="mx-4 md:mx-8 lg:mx-12 my-4">
      <Carousel className="w-full max-w-7xl mx-auto">
        <CarouselContent>
          <CarouselItem>
            <img
              alt="Carousel Image 1"
              className="object-cover w-full rounded-lg"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "800/400",
                objectFit: "cover",
              }}
              width="800"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              alt="Carousel Image 2"
              className="object-cover w-full rounded-lg"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "800/400",
                objectFit: "cover",
              }}
              width="800"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              alt="Carousel Image 3"
              className="object-cover w-full rounded-lg"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "800/400",
                objectFit: "cover",
              }}
              width="800"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="mt-4 text-center">
        <p className="text-2xl font-bold text-green-500">أسعار الجملة اليوم</p>
        <div className="flex items-center justify-center space-x-2 mt-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="flex items-center gap-2 border-l border-green-500" variant="ghost">
                <CalendarIcon className="h-5 w-5 text-green-500 cursor-pointer hover:text-green-700" />
                <span className="text-2xl font-bold">التاريخ: 5/2/2024</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 max-w-[276px]">
              <Calendar />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
    <div className="mx-4 md:mx-8 lg:mx-12 my-4">
      <div className="flex justify-center space-x-4 mb-4">
        <div className="flex flex-col items-center space-y-2 bg-green-100 rounded-md p-4 w-full max-w-[200px]">
          <div className="w-12 h-12 rounded-full bg-green-500 cursor-pointer" />
          <span className="text-black font-medium text-lg">الدار البيضاء</span>
        </div>
        <div className="flex flex-col items-center space-y-2 bg-green-100 rounded-md p-4 w-full max-w-[200px]">
          <div className="w-12 h-12 rounded-full bg-green-500 cursor-pointer" />
          <span className="text-black font-medium text-lg">إنزكان</span>
        </div>
      </div>
    </div>
    <main>
      <section className="text-center p-4 mt-8">
        <div className="flex justify-center space-x-4 mb-4">
          <Button className="bg-gray-500 text-white w-full max-w-[200px]" size="sm" variant="outline">
            جميع الفئات
          </Button>
          <Button className="bg-orange-500 text-white w-full max-w-[200px]" size="sm" variant="outline">
            الفواكه
          </Button>
          <Button className="bg-green-700 text-white w-full max-w-[200px]" size="sm" variant="outline">
            الخضروات
          </Button>
        </div>
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="outline">
                  <ChevronDownIcon className="w-4 h-4 mr-2 text-black" />
                  المنتجات
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuCheckboxItem checked className="rounded-md px-2 py-1 text-black">
                  الخضروات
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="rounded-md px-2 py-1 text-black">
                  الفواكه
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="rounded-md px-2 py-1 text-black">
                  الحبوب
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="rounded-md px-2 py-1 text-black">الجزر</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="rounded-md px-2 py-1 text-black">
                  الطماطم
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="rounded-md px-2 py-1 text-black">
                  البطاطس
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="ml-2">الفرز حسب:</span>
          </div>
        </div>
      </section>
      <section className="p-4">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-lg font-bold border-r border-gray-300 pr-4 text-center">التغيير</TableHead>
                <TableHead className="text-lg font-bold border-r border-gray-300 pr-4 text-center">
                  أعلى سعر
                </TableHead>
                <TableHead className="text-lg font-bold border-r border-gray-300 pr-4 text-center">أقل سعر</TableHead>
                <TableHead className="text-lg font-bold border-gray-300 text-center">المنتج</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border-r border-gray-300 pr-4 text-center">
                  <div className="flex items-center justify-center">
                    <ArrowUpIcon className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-green-500">3 دراهم</span>
                  </div>
                </TableCell>
                <TableCell className="border-r border-gray-300 pr-4 text-center">8 دراهم</TableCell>
                <TableCell className="border-r border-gray-300 pr-4 text-center">5 دراهم</TableCell>
                <TableCell className="border-gray-300 text-center">الخيار</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-r border-gray-300 pr-4 text-center">
                  <div className="flex items-center justify-center">
                    <ArrowUpIcon className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-green-500">3 دراهم</span>
                  </div>
                </TableCell>
                <TableCell className="border-r border-gray-300 pr-4 text-center">8 دراهم</TableCell>
                <TableCell className="border-r border-gray-300 pr-4 text-center">5 دراهم</TableCell>
                <TableCell className="border-gray-300 text-center">البصل</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-r border-gray-300 pr-4 text-center">
                  <div className="flex items-center justify-center">
                    <ArrowUpIcon className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-green-500">3 دراهم</span>
                  </div>
                </TableCell>
                <TableCell className="border-r border-gray-300 pr-4 text-center">8 دراهم</TableCell>
                <TableCell className="border-r border-gray-300 pr-4 text-center">5 دراهم</TableCell>
                <TableCell className="border-gray-300 text-center">البطاطس</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-r border-gray-300 pr-4 text-center">
                  <div className="flex items-center justify-center">
                    <ArrowUpIcon className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-green-500">3 دراهم</span>
                  </div>
                </TableCell>
                <TableCell className="border-r border-gray-300 pr-4 text-center">8 دراهم</TableCell>
                <TableCell className="border-r border-gray-300 pr-4 text-center">5 دراهم</TableCell>
                <TableCell className="border-gray-300 text-center">الطماطم</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-r border-gray-300 pr-4 text-center">
                  <div className="flex items-center justify-center">
                    <ArrowUpIcon className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-green-500">3 دراهم</span>
                  </div>
                </TableCell>
                <TableCell className="border-r border-gray-300 pr-4 text-center">8 دراهم</TableCell>
                <TableCell className="border-r border-gray-300 pr-4 text-center">5 دراهم</TableCell>
                <TableCell className="border-gray-300 text-center">الجزر</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-r border-gray-300 pr-4 text-center">
                  <div className="flex items-center justify-center">
                    <ArrowUpIcon className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-green-500">3 دراهم</span>
                  </div>
                </TableCell>
                <TableCell className="border-r border-gray-300 pr-4 text-center">8 دراهم</TableCell>
                <TableCell className="border-r border-gray-300 pr-4 text-center">5 دراهم</TableCell>
                <TableCell className="border-gray-300 text-center">الباذنجان</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-r border-gray-300 pr-4 text-center">
                  <div className="flex items-center justify-center">
                    <ArrowUpIcon className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-green-500">3 دراهم</span>
                  </div>
                </TableCell>
                <TableCell className="border-r border-gray-300 pr-4 text-center">8 دراهم</TableCell>
                <TableCell className="border-r border-gray-300 pr-4 text-center">5 دراهم</TableCell>
                <TableCell className="border-gray-300 text-center">الفلفل</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
    <div className="bg-gray-100 py-8 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-500 dark:text-gray-400">Learn more about our company and our mission.</p>
            <Link className="text-green-500 hover:underline" href="#">
              Read More
            </Link>
          </div>
          <div />
        </div>
      </div>
    </div>
  </>
  );
  
}
function ArrowUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LogInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function NewspaperIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  )
}


function PanelBottomCloseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 15h18" />
      <path d="m15 8-3 3-3-3" />
    </svg>
  )
}


function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
