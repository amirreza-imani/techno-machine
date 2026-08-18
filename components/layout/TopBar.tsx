import Container from "@/components/Container";

export default function TopBar() {
  return (
    <div className="hidden bg-brand-black text-white md:block">
      <Container>
        <div className="flex min-h-10 items-center justify-between text-xs text-gray-300">
          <div className="flex items-center gap-6">
            <a
              href="tel:+982100000000"
              className="transition-colors hover:text-brand-gold"
            >
              ۰۲۱-۰۰۰۰۰۰۰۰
            </a>

            <a
              href="mailto:info@technomachine.ir"
              className="transition-colors hover:text-brand-gold"
            >
              info@technomachine.ir
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-brand-gold">●</span>
            تهران، ایران
          </div>
        </div>
      </Container>
    </div>
  );
}
