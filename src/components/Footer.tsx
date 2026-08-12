export default function Footer() {
  return (
    <footer className="border-t border-ink/10 px-6 py-8 md:px-12">
      <div className="flex flex-col gap-2 text-xs text-muted md:flex-row md:items-center md:justify-between">
        <p>Designed &amp; built by Paola Cejoco</p>
        <p>Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
