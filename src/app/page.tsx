import Link from "next/link"
import Image from "next/image"
import { Button } from "~/components/ui/button"
import {
  Layers,
  Users,
  VideoIcon as Vector,
  Shapes,
  History,
  TabletsIcon as Devices,
  ChevronRight,
  Github,
  Instagram,
  Linkedin,
  Palette,
  Gamepad2,
  Layout,
  Lightbulb,
  UsersRound,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a] text-white">
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a0a0a]/60">
        <div className="container flex h-16 items-center justify-between p-4">
          <div className="flex justify-around items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-400">
                <span className="font-bold text-white">P</span>
              </div>
              <span className="inline-block font-bold text-white">Pixora</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                Features
              </Link>
              <Link
                href="#demo"
                className="flex items-center text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                Demo
              </Link>
              <Link
                href="#use-cases"
                className="flex items-center text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                Use Cases
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="flex items-center space-x-7">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-zinc-300 hover:text-white hover:bg-zinc-800">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="bg-violet-600 text-white hover:bg-violet-500">
                  Sign up
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-[#0a0a0a] to-[#111827]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400">
                    Create, Collaborate, and Imagine — Together with Pixora
                  </h1>
                  <p className="max-w-[600px] text-zinc-300 md:text-xl">
                    Real-time collaborative drawing for artists, designers, and creators.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:opacity-90 transition-opacity">
                    Start Drawing
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-zinc-700 text-black hover:bg-blend-color transition-colors">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.15)] transform transition-transform duration-300 hover:scale-[1.01]">
                  <Image
                    src="/placeholder.svg?height=500&width=700"
                    alt="Pixora collaborative drawing platform"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 via-purple-500/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-[#0a0a0a]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Everything you need to create amazing artwork
                </h2>
                <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pixora combines powerful drawing tools with seamless collaboration features to help you bring your
                  creative vision to life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10">
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-violet-500/20 to-transparent rounded-bl-full"></div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
                  <Users className="h-6 w-6 text-violet-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Real-time Collaboration</h3>
                <p className="text-zinc-300">
                  Draw and edit together with others — see their live cursors and changes instantly.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full"></div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
                  <Vector className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Vector-based Drawing</h3>
                <p className="text-zinc-300">
                  Create infinitely scalable, smooth artwork using pixel-perfect vector tools.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-bl-full"></div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
                  <Shapes className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Component System</h3>
                <p className="text-zinc-300">Reusable shapes and design elements to speed up your creative flow.</p>
              </div>

              {/* Feature 4 */}
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10">
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-violet-500/20 to-transparent rounded-bl-full"></div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
                  <Layers className="h-6 w-6 text-violet-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Advanced Layer Management</h3>
                <p className="text-zinc-300">Organize your drawings with powerful layer controls and groups.</p>
              </div>

              {/* Feature 5 */}
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full"></div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
                  <History className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Version History</h3>
                <p className="text-zinc-300">
                  See and restore previous versions of your artwork easily, perfect for experimenting.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-bl-full"></div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
                  <Devices className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Cross-platform Access</h3>
                <p className="text-zinc-300">
                  Work seamlessly across web browsers, tablets, and mobile devices without loss of quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="w-full py-12 md:py-24 lg:py-32 bg-[#111827]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">Demo</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  See Pixora in action
                </h2>
                <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Watch how multiple users collaborate in real-time to create beautiful artwork together.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="relative aspect-video overflow-hidden rounded-xl border border-zinc-800 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Pixora collaborative drawing demo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="bg-violet-600 hover:bg-violet-500 text-white transition-colors">
                    Watch Demo
                  </Button>
                </div>
                {/* Cursor indicators to simulate collaboration */}
                <div
                  className="absolute h-6 w-6 rounded-full border-2 border-violet-500 animate-pulse"
                  style={{ top: "30%", left: "40%" }}
                ></div>
                <div
                  className="absolute h-6 w-6 rounded-full border-2 border-purple-500 animate-pulse"
                  style={{ top: "50%", left: "60%" }}
                ></div>
                <div
                  className="absolute h-6 w-6 rounded-full border-2 border-cyan-500 animate-pulse"
                  style={{ top: "70%", left: "30%" }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section id="use-cases" className="w-full py-12 md:py-24 lg:py-32 bg-[#0a0a0a]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">Use Cases</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Endless possibilities for creators
                </h2>
                <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how Pixora can transform your creative workflow across different disciplines.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Use Case 1 */}
              <div className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent z-10"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Collaborative Sketching"
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="relative z-20 p-5 bg-zinc-900/90 border-t border-zinc-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600/20">
                      <Palette className="h-5 w-5 text-violet-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Collaborative Sketching</h3>
                  </div>
                  <p className="text-zinc-300">
                    Work together on sketches in real-time, perfect for remote design teams and creative brainstorming.
                  </p>
                </div>
              </div>

              {/* Use Case 2 */}
              <div className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent z-10"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Concept Art for Games"
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="relative z-20 p-5 bg-zinc-900/90 border-t border-zinc-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600/20">
                      <Gamepad2 className="h-5 w-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Concept Art for Games</h3>
                  </div>
                  <p className="text-zinc-300">
                    Create and iterate on game assets with your team, with specialized tools for digital art and
                    illustration.
                  </p>
                </div>
              </div>

              {/* Use Case 3 */}
              <div className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-transparent z-10"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="UI Wireframing"
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="relative z-20 p-5 bg-zinc-900/90 border-t border-zinc-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600/20">
                      <Layout className="h-5 w-5 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">UI Wireframing</h3>
                  </div>
                  <p className="text-zinc-300">
                    Design interfaces and user experiences with precision tools and component libraries for rapid
                    prototyping.
                  </p>
                </div>
              </div>

              {/* Use Case 4 */}
              <div className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent z-10"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Live Brainstorming Sessions"
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="relative z-20 p-5 bg-zinc-900/90 border-t border-zinc-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600/20">
                      <Lightbulb className="h-5 w-5 text-violet-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Live Brainstorming Sessions</h3>
                  </div>
                  <p className="text-zinc-300">
                    Visualize ideas in real-time with your team, combining drawing, notes, and references in one
                    collaborative space.
                  </p>
                </div>
              </div>

              {/* Use Case 5 */}
              <div className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent z-10"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Art Communities"
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="relative z-20 p-5 bg-zinc-900/90 border-t border-zinc-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600/20">
                      <UsersRound className="h-5 w-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Art Communities</h3>
                  </div>
                  <p className="text-zinc-300">
                    Build and engage with creative communities through shared canvases, live events, and collaborative
                    projects.
                  </p>
                </div>
              </div>

              {/* Use Case 6 - Placeholder for layout balance */}
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#111827] to-[#0a0a0a] border border-zinc-800 flex items-center justify-center p-6">
                <div className="text-center space-y-3">
                  <h3 className="text-lg font-bold text-white">Discover More</h3>
                  <p className="text-zinc-300 mb-4">Explore all the ways Pixora can enhance your creative workflow.</p>
                  <Link href="/login">
                    <Button className="bg-cyan-600 hover:bg-cyan-500 text-white transition-colors">
                      Try Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#111827] to-[#0a0a0a]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Join the Collaborative Drawing Revolution
                </h2>
                <p className="max-w-[600px] text-zinc-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start creating beautiful artwork together with your team today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  Start Creating for Free
                </Button>
                
              </div>
              <p className="text-xs text-zinc-500">No credit card or hidden costs. Includes up to 3 projects.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-zinc-800 bg-[#0a0a0a]">
        <div className="container flex flex-col items-center justify-around gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-400">
                <span className="text-xs font-bold text-white">P</span>
              </div>
              <span className="inline-block text-sm font-bold text-white">Pixora</span>
            </Link>
            <p className="text-center text-sm leading-loose text-zinc-500 md:text-left">
              &copy; {new Date().getFullYear()} {" "} Made with ❤️ by Saket Singh
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <nav className="flex gap-4 md:gap-6">
              <Link href="#" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
                About
              </Link>
              <Link href="#features" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
                Features
              </Link>
              <Link href="mailto:saket6198@gmail.com" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
                Contact Us
              </Link>

            </nav>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="github.com/saket6198/pixora" className="text-zinc-400 hover:text-white transition-colors">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="instagram.com/saket6198" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
