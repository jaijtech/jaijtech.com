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
        Última actualización: 13 de abril de 2026
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
            Administración Tributaria (AEAT) de España. El Servicio incluye:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              SDK @jaijtech/verifactu: firma electrónica XAdES-EPES,
              generación de cadenas hash SHA-256, envío de registros de
              facturación y generación de códigos QR normativos
            </li>
            <li>
              Sidecar Docker REST como puente de integración entre el ERP del
              integrador y el SDK
            </li>
            <li>
              Adapters oficiales para Java, .NET, PHP y Python
            </li>
            <li>
              Suite de pruebas y entorno sandbox de la AEAT
            </li>
          </ul>
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
          <p>El Servicio ofrece los siguientes planes:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              <strong>Developer</strong> (gratuito): acceso al entorno de
              pruebas de la AEAT. Sin tarjeta de crédito. No autorizado para
              producción.
            </li>
            <li>
              <strong>Starter</strong> (19&nbsp;&euro;/mes o
              205&nbsp;&euro;/año): 1-3 NIFs en entorno de producción AEAT.
              Incluye 1 adapter oficial a elegir.
            </li>
            <li>
              <strong>Studio</strong>: precio a medida según volumen de NIFs
              (4-50 NIFs). Contacto directo con jaijtech para configuración y
              presupuesto.
            </li>
            <li>
              <strong>Enterprise</strong>: precio a medida para 50+ NIFs.
              Contacto directo con jaijtech. SLA negociado individualmente.
            </li>
          </ul>
          <p className="mt-2">
            Los precios se publican en la página de precios y pueden
            actualizarse con un preaviso mínimo de 30 días. Las suscripciones
            de los planes Starter se facturan de forma recurrente (mensual o
            anualmente). Puedes cancelar tu suscripción en cualquier momento;
            la cancelación será efectiva al final del periodo de facturación
            en curso.
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
            6. Modelo de licencias y NIFs autorizados
          </h2>
          <p>
            El uso del SDK en entorno de producción requiere una licencia
            activa con los NIFs emisores autorizados. El SDK valida que el NIF
            emisor de cada factura esté incluido en la licencia contratada. El
            uso del SDK con NIFs no incluidos en la licencia constituye un
            incumplimiento de estos términos y puede resultar en el bloqueo
            del envío de registros a la AEAT.
          </p>
          <p className="mt-2">
            Tras la caducidad de la licencia, existe un periodo de gracia de
            72 horas durante el cual el SDK emite advertencias pero permite el
            envío. Transcurrido dicho periodo, el envío a producción queda
            bloqueado hasta la renovación.
          </p>
          <p className="mt-2">
            El plan Developer es gratuito y opera exclusivamente en el entorno
            de pruebas de la AEAT. No está autorizado su uso en entorno de
            producción.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            7. Propiedad intelectual
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
            8. Disponibilidad y SLA
          </h2>
          <p>
            jaijtech se esfuerza por mantener una alta disponibilidad del
            Servicio. Los acuerdos de nivel de servicio (SLA) son negociados
            individualmente para los planes Studio y Enterprise. jaijtech no
            será responsable de interrupciones causadas por la AEAT,
            proveedores de infraestructura o eventos de fuerza mayor.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            9. Limitación de responsabilidad
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
            10. Protección de datos
          </h2>
          <p>
            El tratamiento de datos personales se rige por nuestra Política de
            Privacidad. El SDK @jaijtech/verifactu opera en modo local-first:
            los datos fiscales, certificados digitales y registros de
            facturación nunca abandonan la infraestructura del integrador ni
            son procesados por los servidores de jaijtech.
          </p>
          <p className="mt-2">
            El integrador actúa en todo momento como responsable del
            tratamiento de los datos de sus clientes finales conforme al RGPD.
            jaijtech únicamente procesa los datos de registro y facturación
            del integrador (nombre, email, empresa) necesarios para la gestión
            de la suscripción.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            11. Modificaciones
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
            12. Ley aplicable y jurisdicción
          </h2>
          <p>
            Estos términos se rigen por la legislación española. Para la
            resolución de cualquier controversia, las partes se someten a los
            juzgados y tribunales de Madrid, España.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            13. Contacto
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
