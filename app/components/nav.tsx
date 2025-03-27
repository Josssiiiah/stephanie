import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";

const navigation = [
  { name: "Home", sectionId: "top" },
  { name: "Services", sectionId: "services" },
  { name: "About", sectionId: "about" },
];

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="sticky top-0 z-50 mx-auto border-b bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-md"
    >
      <nav className="px-4 flex h-14 items-center justify-between">
        <motion.div
          className="flex items-center"
          custom={0}
          variants={linkVariants}
        >
          <Link to="#top" className="flex items-center space-x-2">
            <span className="text-xl font-serif">
              Stephanie Haywood, MA, LPC
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex sm:items-center sm:gap-20">
          {navigation.map((item, i) => (
            <motion.div key={item.name} custom={i + 1} variants={linkVariants}>
              <Link
                to={`#${item.sectionId}`}
                className="flex items-center text-xl font-medium font-serif text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={navigation.length + 1}
          variants={linkVariants}
          className="hidden sm:block"
        >
          <Button
            asChild
            variant="default"
            className="bg-emerald-700 hover:bg-emerald-800"
          >
            <a
              href="https://care.headway.co/providers/stephanie-haywood#cost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Talk
            </a>
          </Button>
        </motion.div>

        {/* Mobile Navigation */}
        <div className="sm:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0"
                onClick={() => setOpen(true)}
              >
                <Menu className="h-8 w-8" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0 w-full sm:max-w-full">
              <SheetHeader className="px-4">
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <motion.div
                className="my-24 flex flex-col items-center justify-center space-y-8 px-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      },
                    }}
                  >
                    <Link
                      to={`#${item.sectionId}`}
                      className="flex items-center text-2xl font-medium text-muted-foreground transition-colors hover:text-primary"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  <Button
                    asChild
                    variant="default"
                    className="bg-emerald-700 hover:bg-emerald-800 text-lg py-6 px-8"
                  >
                    <a
                      href="https://care.headway.co/providers/stephanie-haywood#cost"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Let's Talk
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
