import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de servicio",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight">
        Términos de servicio
      </h1>
      <p className="mt-2 text-sm text-muted">
        Última actualización: 28 de marzo de 2026
      </p>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted">
        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            1. Aceptación de los términos
          </h2>
          <p>
            Al acceder y utilizar los servicios de jaijtech (&ldquo;el
            Servicio&rdquo;), incluyendo el SDK @jaijtech/verifactu, aceptas
            quedar vinculado por estos términos de servicio. Si no estás de
            acuerdo con alguno de estos términos, no utilices el Servicio.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            2. Descripción del servicio
          </h2>
          <p>
            jaijtech proporciona un SDK (Software Development Kit) para la
            integración con el sistema Verifactu de la Agencia Estatal de
            Administración Tributaria (AEAT) de España. El SDK facilita la
            firma electrónica XAdES-EPES, la generación de cadenas hash
            SHA-256, el envío de registros de facturación y la generación de
            códigos QR normativos.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            3. Cuentas y registro
          </h2>
          <p>
            Para utilizar determinadas funcionalidades del Servicio, deberás
            crear una cuenta proporcionando información veraz, completa y
            actualizada. Eres responsable de mantener la confidencialidad de
            tus credenciales de acceso y de todas las actividades que se
            realicen bajo tu cuenta.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            4. Planes y facturación
          </h2>
          <p>
            El Servicio ofrece distintos planes de suscripción. Los precios se
            publican en la página de precios y pueden actualizarse con un
            preaviso mínimo de 30 días. Las suscripciones se facturan de forma
            recurrente (mensual o anualmente) según el plan contratado. Puedes
            cancelar tu suscripción en cualquier momento; la cancelación será
            efectiva al final del periodo de facturación en curso.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            5. Uso aceptable
          </h2>
          <p>Te comprometes a no utilizar el Servicio para:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Actividades ilegales o fraudulentas</li>
            <li>
              Interferir con el funcionamiento del Servicio o de los sistemas de
              la AEAT
            </li>
            <li>
              Enviar datos falsos o manipulados al sistema Verifactu
            </li>
            <li>
              Realizar ingeniería inversa, descompilar o desensamblar el SDK
              más allá de lo permitido por la ley
            </li>
            <li>
              Revender o redistribuir el acceso al Servicio sin autorización
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            6. Propiedad intelectual
          </h2>
          <p>
            El SDK, la documentación, el código fuente y todos los materiales
            relacionados son propiedad de jaijtech y están protegidos por las
            leyes de propiedad intelectual. Se te concede una licencia
            limitada, no exclusiva, no transferible y revocable para usar el
            SDK conforme a estos términos y al plan contratado.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            7. Disponibilidad y SLA
          </h2>
          <p>
            jaijtech se esfuerza por mantener una alta disponibilidad del
            Servicio. Los planes Studio y superiores incluyen acuerdos de nivel
            de servicio (SLA) específicos. jaijtech no será responsable de
            interrupciones causadas por la AEAT, proveedores de
            infraestructura o eventos de fuerza mayor.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            8. Limitación de responsabilidad
          </h2>
          <p>
            En la máxima medida permitida por la ley, jaijtech no será
            responsable de daños indirectos, incidentales, especiales,
            consecuentes o punitivos, ni de pérdida de beneficios, datos o
            negocio. La responsabilidad total de jaijtech se limitará al
            importe pagado por el usuario durante los 12 meses anteriores al
            evento que dio lugar a la reclamación.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            9. Protección de datos
          </h2>
          <p>
            El tratamiento de datos personales se rige por nuestra Política de
            Privacidad. jaijtech actúa como encargado del tratamiento respecto
            a los datos fiscales que el usuario envía a través del SDK, siendo
            el usuario el responsable del tratamiento.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            10. Modificaciones
          </h2>
          <p>
            jaijtech se reserva el derecho de modificar estos términos en
            cualquier momento. Los cambios sustanciales se notificarán con al
            menos 30 días de antelación por email. El uso continuado del
            Servicio tras la notificación constituye la aceptación de los
            nuevos términos.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            11. Ley aplicable y jurisdicción
          </h2>
          <p>
            Estos términos se rigen por la legislación española. Para la
            resolución de cualquier controversia, las partes se someten a los
            juzgados y tribunales de Madrid, España.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            12. Contacto
          </h2>
          <p>
            Para cualquier consulta sobre estos términos, contacta con nosotros
            en{" "}
            <a
              href="mailto:info@jaijtech.com"
              className="text-accent hover:underline"
            >
              info@jaijtech.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
