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
        <Image
          alt="GHELLA Logo"
          className="mr-2"
          height="40"
          src="data:image/jpeg;base64,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"
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
            <Image
              alt="Carousel Image 1"
              className="object-cover w-full rounded-lg"
              height="400"
              src="data:image/jpeg;base64,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"
              style={{
                aspectRatio: "800/400",
                objectFit: "cover",
              }}
              width="800"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="Carousel Image 2"
              className="object-cover w-full rounded-lg"
              height="200"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0PG5l5_YzWzi0E9dDw9P_WQVWE6ndU191Q&s"
              style={{
              aspectRatio: "800/400",
                objectFit: "cover",
              }}
              width="400"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="Carousel Image 3"
              className="object-cover w-full rounded-lg"
              height="400"
              src="data:image/jpeg;base64,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"
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
            <h3 className="text-lg font-bold mb-4"> GHELLA 2024</h3>
            <p className="text-gray-500 dark:text-gray-400">جميع الحقوق محفوظة  .</p>
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
function ArrowUpIcon(props: React.SVGProps<SVGSVGElement>) {
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


function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
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


function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
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


function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
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


function LogInIcon(props: React.SVGProps<SVGSVGElement>) {
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


function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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


function NewspaperIcon(props: React.SVGProps<SVGSVGElement>) {
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
