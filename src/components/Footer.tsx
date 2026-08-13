export default function Footer() {
  return (
    <footer className="bg-teal px-6 pb-10 text-center text-white/70 md:px-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-1 text-xs">
        <p>Designed with Figma, built with Next.js</p>
        <p>Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
