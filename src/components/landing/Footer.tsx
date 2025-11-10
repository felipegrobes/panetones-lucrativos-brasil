"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary/5 py-8">
      <div className="container text-center text-sm text-foreground/60">
        <p>&copy; {year} @recetasrentables_ofc Todos os direitos reservados.</p>
        <p className="mt-2">
            Uma empresa dedicada ao seu sucesso culinário e financeiro.
        </p>
        <p className="mt-2">Imagens meramente ilustrativas.</p>
      </div>
    </footer>
  );
}
