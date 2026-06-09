import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad",
  description:
    "Política de privacidad de JaijTech: solo tratamos datos de contacto y de solicitud de piloto. Nexus es local-first y no envía datos fiscales ni telemetría a JaijTech.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight">
        Política de privacidad
      </h1>
      <p className="mt-2 text-sm text-muted">
        Última actualización: 9 de junio de 2026
      </p>

      <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-5 text-sm leading-relaxed text-muted">
        <span className="font-medium text-foreground">En una línea.</span>{" "}
        JaijTech solo trata los datos de contacto que nos envías por los
        formularios del sitio. El software Nexus es local-first: los datos
        fiscales de tus clientes y los certificados{" "}
        <span className="font-medium text-foreground">nunca</span> llegan a
        JaijTech, y Nexus no envía telemetría ni hace llamadas a JaijTech.
      </div>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted">
        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            1. Responsable del tratamiento
          </h2>
          <p>
            El responsable del tratamiento de tus datos personales es JaijTech.
            Puedes contactar con nosotros en{" "}
            <a href="mailto:info@jaijtech.com" className="text-accent hover:underline">
              info@jaijtech.com
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            2. Qué datos tratamos
          </h2>
          <p>Únicamente los datos que nos facilitas voluntariamente:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              <strong className="text-foreground">Solicitudes de piloto y
              contacto:</strong> nombre, email, empresa, rol, datos sobre tu
              producto y stack, y el contenido del mensaje.
            </li>
            <li>
              <strong className="text-foreground">Comunicaciones:</strong>{" "}
              los mensajes que intercambiamos por email o por nuestros canales de
              soporte.
            </li>
          </ul>
          <p className="mt-2">
            No creamos cuentas de usuario ni procesamos pagos en este sitio, por
            lo que no tratamos credenciales de acceso ni datos de tarjeta.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            3. Datos fiscales: nunca llegan a JaijTech
          </h2>
          <p>
            Nexus opera en modo <span className="font-medium text-foreground">local-first</span>.
            Las facturas, NIFs, importes, certificados y registros de
            facturación que el integrador procesa con Nexus{" "}
            <span className="font-medium text-foreground">no</span> se transmiten
            ni se almacenan en servidores de JaijTech: la firma, el encadenamiento
            y el envío a la AEAT ocurren íntegramente en la infraestructura del
            integrador o de su cliente. El integrador (y, en su caso, su cliente)
            es el único responsable del tratamiento de esos datos conforme al
            RGPD y a la normativa fiscal española.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            4. Sin telemetría ni phone-home del producto
          </h2>
          <p>
            Nexus no emite telemetría, no hace &ldquo;phone-home&rdquo; ni envía
            pings de licencia a JaijTech por defecto. No recibimos datos de uso
            del software desde la infraestructura del integrador. El entitlement
            de licencia se verifica en local, sin conexión saliente hacia
            JaijTech.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            5. Finalidad y base legal
          </h2>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              Atender tu solicitud de piloto o consulta y mantener la
              conversación comercial — base:{" "}
              <span className="font-medium text-foreground">medidas
              precontractuales</span> y{" "}
              <span className="font-medium text-foreground">interés legítimo</span>.
            </li>
            <li>
              Enviarte comunicaciones relacionadas con tu solicitud — base:{" "}
              interés legítimo o{" "}
              <span className="font-medium text-foreground">consentimiento</span>{" "}
              para comunicaciones comerciales.
            </li>
            <li>
              Cumplir obligaciones legales aplicables — base:{" "}
              <span className="font-medium text-foreground">obligación legal</span>.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            6. Encargados del tratamiento
          </h2>
          <p>
            Para gestionar los formularios y el correo nos apoyamos en{" "}
            <strong className="text-foreground">Resend</strong> (envío de emails
            transaccionales / notificaciones de solicitudes). Comparte los datos
            estrictamente necesarios para esa finalidad. No vendemos ni
            compartimos tus datos personales con terceros con fines publicitarios.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            7. Cookies y analítica
          </h2>
          <p>
            Este sitio utiliza únicamente{" "}
            <span className="font-medium text-foreground">cookies técnicas</span>{" "}
            necesarias para su funcionamiento. No utilizamos cookies de
            seguimiento ni de publicidad, y{" "}
            <span className="font-medium text-foreground">no empleamos
            herramientas de analítica de terceros</span> (como Google Analytics)
            que rastreen tu navegación.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            8. Conservación
          </h2>
          <p>
            Conservamos los datos de contacto mientras dure la conversación
            comercial y, después, durante el plazo necesario para atender
            posibles responsabilidades. Atenderemos las solicitudes de supresión
            conforme a la ley, salvo obligación legal de conservación.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            9. Tus derechos
          </h2>
          <p>
            Conforme al RGPD tienes derecho a acceder, rectificar, suprimir,
            oponerte, limitar el tratamiento y a la portabilidad de tus datos.
            Para ejercerlos, escríbenos a{" "}
            <a href="mailto:info@jaijtech.com" className="text-accent hover:underline">
              info@jaijtech.com
            </a>
            . También puedes reclamar ante la Agencia Española de Protección de
            Datos (AEPD).
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            10. Seguridad
          </h2>
          <p>
            Aplicamos medidas técnicas y organizativas razonables para proteger
            los datos de contacto que tratamos, incluyendo cifrado en tránsito.
            Los datos fiscales procesados por Nexus no están sujetos a estas
            medidas porque nunca abandonan la infraestructura del integrador.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            11. Modificaciones
          </h2>
          <p>
            Podemos actualizar esta política periódicamente. La versión vigente
            estará siempre disponible en esta página.
          </p>
        </div>
      </div>
    </section>
  );
}
