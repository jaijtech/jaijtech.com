import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight">
        Política de privacidad
      </h1>
      <p className="mt-2 text-sm text-muted">
        Última actualización: 28 de marzo de 2026
      </p>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted">
        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            1. Responsable del tratamiento
          </h2>
          <p>
            El responsable del tratamiento de tus datos personales es jaijtech.
            Puedes contactar con nosotros en{" "}
            <a
              href="mailto:info@jaijtech.com"
              className="text-accent hover:underline"
            >
              info@jaijtech.com
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            2. Datos que recopilamos
          </h2>
          <p>Recopilamos los siguientes tipos de datos:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              <strong className="text-foreground">Datos de registro:</strong>{" "}
              nombre, email, empresa y NIF/CIF proporcionados al crear una
              cuenta.
            </li>
            <li>
              <strong className="text-foreground">Datos de facturación:</strong>{" "}
              información de pago procesada a través de Stripe. No almacenamos
              datos de tarjetas de crédito en nuestros servidores.
            </li>
            <li>
              <strong className="text-foreground">Datos de uso:</strong>{" "}
              información técnica sobre el uso del SDK, incluyendo llamadas a la
              API, errores y métricas de rendimiento.
            </li>
            <li>
              <strong className="text-foreground">
                Datos de comunicaciones:
              </strong>{" "}
              mensajes enviados a través de nuestros canales de soporte.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            3. Finalidad del tratamiento
          </h2>
          <p>Utilizamos tus datos para:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Proporcionar y gestionar el acceso al Servicio</li>
            <li>Procesar pagos y gestionar suscripciones</li>
            <li>Enviarte comunicaciones relacionadas con el Servicio</li>
            <li>Mejorar y optimizar el rendimiento del SDK</li>
            <li>Cumplir con obligaciones legales y fiscales</li>
            <li>Atender solicitudes de soporte técnico</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            4. Base legal
          </h2>
          <p>El tratamiento de tus datos se basa en:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              <strong className="text-foreground">
                Ejecución del contrato:
              </strong>{" "}
              para proporcionarte el Servicio contratado.
            </li>
            <li>
              <strong className="text-foreground">Interés legítimo:</strong>{" "}
              para mejorar el Servicio y prevenir fraudes.
            </li>
            <li>
              <strong className="text-foreground">Obligación legal:</strong>{" "}
              para cumplir con la normativa fiscal y tributaria.
            </li>
            <li>
              <strong className="text-foreground">Consentimiento:</strong> para
              el envío de comunicaciones comerciales.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            5. Encargados del tratamiento
          </h2>
          <p>
            Compartimos tus datos con los siguientes proveedores que actúan como
            encargados del tratamiento:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              <strong className="text-foreground">Stripe:</strong> procesamiento
              de pagos (EE.UU., con cláusulas contractuales tipo).
            </li>
            <li>
              <strong className="text-foreground">Resend:</strong> envío de
              emails transaccionales.
            </li>
          </ul>
          <p className="mt-2">
            No vendemos ni compartimos tus datos personales con terceros para
            fines publicitarios.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            6. Datos fiscales
          </h2>
          <p>
            Respecto a los datos fiscales (facturas, NIFs, importes) que envías
            a través del SDK al sistema Verifactu de la AEAT, jaijtech actúa
            como encargado del tratamiento. Estos datos se transmiten
            directamente a la AEAT y no se almacenan en nuestros sistemas más
            allá del tiempo necesario para completar la transmisión y
            proporcionar los logs de confirmación.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            7. Conservación de datos
          </h2>
          <p>
            Conservamos tus datos personales mientras mantengas una cuenta
            activa o mientras sea necesario para proporcionarte el Servicio. Los
            datos de facturación se conservan durante el plazo legalmente
            exigido (mínimo 5 años conforme a la normativa fiscal española).
            Tras la cancelación de tu cuenta, eliminaremos tus datos personales
            en un plazo máximo de 30 días, salvo obligación legal de
            conservación.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            8. Tus derechos
          </h2>
          <p>
            Conforme al Reglamento General de Protección de Datos (RGPD),
            tienes derecho a:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Acceder a tus datos personales</li>
            <li>Rectificar datos inexactos</li>
            <li>Solicitar la supresión de tus datos</li>
            <li>Oponerte al tratamiento</li>
            <li>Solicitar la portabilidad de tus datos</li>
            <li>Limitar el tratamiento</li>
          </ul>
          <p className="mt-2">
            Para ejercer estos derechos, contacta con nosotros en{" "}
            <a
              href="mailto:info@jaijtech.com"
              className="text-accent hover:underline"
            >
              info@jaijtech.com
            </a>
            . Responderemos en un plazo máximo de 30 días. También tienes
            derecho a presentar una reclamación ante la Agencia Española de
            Protección de Datos (AEPD).
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            9. Seguridad
          </h2>
          <p>
            Implementamos medidas técnicas y organizativas apropiadas para
            proteger tus datos personales, incluyendo cifrado en tránsito
            (TLS), cifrado en reposo, control de accesos y monitorización de
            seguridad.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            10. Cookies
          </h2>
          <p>
            Este sitio web utiliza únicamente cookies técnicas necesarias para
            el funcionamiento del Servicio. No utilizamos cookies de seguimiento
            ni de publicidad.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            11. Modificaciones
          </h2>
          <p>
            Podemos actualizar esta política de privacidad periódicamente. Los
            cambios sustanciales se notificarán por email con al menos 30 días
            de antelación. La versión vigente estará siempre disponible en esta
            página.
          </p>
        </div>
      </div>
    </section>
  );
}
