import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos",
  description:
    "Términos de uso del sitio web de JaijTech y resumen del modelo de licenciamiento de Nexus: source-available comercial, evaluación → piloto → acuerdo OEM. No es una venta de autoservicio ni una suscripción SaaS.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight">Términos</h1>
      <p className="mt-2 text-sm text-muted">
        Última actualización: 9 de junio de 2026
      </p>

      {/* Provisional / counsel-review notice */}
      <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-5 text-sm leading-relaxed text-muted">
        <span className="font-medium text-foreground">
          Naturaleza de este documento.
        </span>{" "}
        Esta página regula el uso del <span className="font-medium text-foreground">sitio web</span>{" "}
        de JaijTech y resume el modelo de licenciamiento del software Nexus. El
        software <span className="font-medium text-foreground">no</span> se
        licencia desde esta web: cualquier derecho de uso, evaluación,
        producción o redistribución nace exclusivamente de un{" "}
        <span className="font-medium text-foreground">acuerdo escrito y firmado</span>{" "}
        (Acuerdo de Evaluación o Acuerdo de Licencia OEM), que prevalece sobre
        este resumen. Este texto es una versión operativa y está{" "}
        <span className="font-medium text-foreground">pendiente de revisión por asesoría legal</span>;
        no constituye asesoramiento jurídico ni una representación de certeza
        legal.
      </div>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted">
        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            1. Objeto y aceptación
          </h2>
          <p>
            Estos términos regulan el acceso y uso del sitio web de JaijTech
            (&ldquo;el Sitio&rdquo;) y describen, a título informativo, el modelo
            de licenciamiento de su software. Al utilizar el Sitio aceptas estos
            términos. Si no estás de acuerdo, no utilices el Sitio.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            2. Qué es Nexus
          </h2>
          <p>
            Nexus es un <span className="font-medium text-foreground">componente
            fiscal que se ejecuta en local</span> que los fabricantes de ERP, TPV
            y software de gestión integran en su propio producto para emitir
            registros VeriFactu. Se ejecuta dentro de la infraestructura del
            cliente del integrador: la emisión, la firma y el encadenamiento
            ocurren en local. JaijTech es un{" "}
            <span className="font-medium text-foreground">proveedor de
            software</span>; no es un servicio fiscal gestionado, ni una API
            cloud a la que se envíen facturas, ni un intermediario ante la AEAT.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            3. Modelo de licenciamiento (source-available comercial)
          </h2>
          <p>
            Nexus se distribuye bajo un modelo{" "}
            <span className="font-medium text-foreground">source-available
            comercial</span>: el código puede ponerse a disposición de un
            evaluador o partner para inspección y auditoría, pero{" "}
            <span className="font-medium text-foreground">la visibilidad del
            código no concede derechos</span>. Todos los derechos sobre el
            software derivan únicamente del acuerdo escrito aplicable. No se trata
            de software de código abierto.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            4. Cómo se accede a Nexus: evaluación → piloto → OEM
          </h2>
          <p>El acceso al software sigue un camino por etapas:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              <strong className="text-foreground">Evaluación.</strong> Bajo un
              Acuerdo de Evaluación, derecho limitado, no exclusivo, no
              transferible y revocable a usar el software{" "}
              <span className="font-medium text-foreground">solo en un entorno
              de prueba / sandbox</span> y solo para evaluación técnica y
              preparación de un piloto. No autoriza producción ni redistribución.
            </li>
            <li>
              <strong className="text-foreground">Piloto.</strong> Integración
              de alcance fijo, acompañada por el equipo de JaijTech, contra el
              entorno de pruebas de la AEAT, con criterios de éxito definidos.
            </li>
            <li>
              <strong className="text-foreground">Acuerdo de Licencia OEM.</strong>{" "}
              Único título que habilita el uso en{" "}
              <span className="font-medium text-foreground">producción</span> y
              los derechos de <span className="font-medium text-foreground">embeber
              y redistribuir</span> Nexus dentro del producto del partner. Es de
              término anual e incluye el mantenimiento de adaptación normativa.
            </li>
          </ul>
          <p className="mt-2">
            <span className="font-medium text-foreground">No hay uso en
            producción ni redistribución sin un Acuerdo de Licencia OEM
            firmado.</span>
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            5. Sin venta de autoservicio ni suscripción
          </h2>
          <p>
            El Sitio <span className="font-medium text-foreground">no</span>{" "}
            comercializa el software mediante compra online, suscripción
            recurrente, planes mensuales, niveles gratuitos ni pago con tarjeta.
            Los formularios del Sitio sirven para solicitar un piloto o
            contactar; la relación comercial se formaliza por acuerdo escrito. El
            licenciamiento se estructura como tarifa de piloto, licencia OEM
            anual y, opcionalmente, un nivel de soporte, conforme al marco
            comercial de JaijTech.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            6. Entitlement y NIFs autorizados
          </h2>
          <p>
            El uso en producción se habilita mediante un{" "}
            <span className="font-medium text-foreground">entitlement local</span>{" "}
            (basado en fichero, sin llamadas a JaijTech) que vincula la licencia
            a los NIFs emisores acordados. El mecanismo es{" "}
            <span className="font-medium text-foreground">advisory</span> respecto
            a la firma —nunca impide al obligado tributario cumplir su obligación
            legal— y solo pasa a estado de bloqueo de emisión a producción tras un
            periodo de gracia, conforme al acuerdo aplicable. El detalle vinculante
            vive en el Acuerdo de Licencia OEM.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            7. Límites de responsabilidad de JaijTech
          </h2>
          <p>JaijTech, por diseño y por contrato:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              <strong className="text-foreground">No presta asesoramiento
              fiscal, contable ni legal.</strong> El soporte y la documentación
              responden a cuestiones técnicas del runtime y del protocolo, nunca
              a la interpretación fiscal de una operación.
            </li>
            <li>
              <strong className="text-foreground">No es colaborador social ni
              representante ante la AEAT.</strong> La emisión la realiza el propio
              obligado tributario desde su infraestructura, con su certificado.
            </li>
            <li>
              <strong className="text-foreground">No opera un servicio fiscal
              gestionado.</strong> Ningún servicio de JaijTech almacena, transporta
              ni envía las facturas del cliente.
            </li>
            <li>
              <strong className="text-foreground">No ofrece un SLA de servicio
              alojado</strong>, porque no aloja el software. Los compromisos de
              respuesta de soporte, cuando existan, se pactan en el acuerdo
              aplicable y se refieren a tiempos de respuesta, no a disponibilidad
              de un servicio operado por JaijTech.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            8. Propiedad intelectual
          </h2>
          <p>
            El software, su código fuente, la documentación y los materiales
            relacionados son y seguirán siendo propiedad exclusiva de JaijTech.
            Todos los derechos no concedidos expresamente por escrito quedan
            reservados (visibilidad ≠ derechos). Los componentes de terceros se
            rigen por sus propias licencias, según las notas de atribución
            correspondientes. Nada en el Sitio concede derecho alguno sobre el
            producto o la propiedad intelectual del integrador.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            9. Uso del Sitio
          </h2>
          <p>
            Te comprometes a no utilizar el Sitio para actividades ilegales,
            para interferir con su funcionamiento, ni para realizar ingeniería
            inversa sobre materiales más allá de lo permitido por la ley o por un
            acuerdo escrito. Los contenidos del Sitio se ofrecen{" "}
            &ldquo;tal cual&rdquo;, con fines informativos, y pueden cambiar sin
            previo aviso.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            10. Sin certificación ni garantía de cumplimiento
          </h2>
          <p>
            La evidencia de validación publicada por JaijTech corresponde a
            validación técnica interna y no constituye una certificación ni
            homologación oficial de la AEAT ni de terceros. JaijTech provee
            software que implementa las especificaciones técnicas publicadas de
            VeriFactu; no garantiza el cumplimiento tributario global del
            integrador ni de ningún contribuyente.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            11. Protección de datos
          </h2>
          <p>
            El tratamiento de datos personales se rige por la{" "}
            <a href="/privacy" className="text-accent hover:underline">
              Política de Privacidad
            </a>
            . Por diseño local-first, los datos fiscales, certificados y
            registros de facturación que se procesan con Nexus{" "}
            <span className="font-medium text-foreground">nunca</span> abandonan
            la infraestructura del integrador ni se transmiten a JaijTech.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            12. Modificaciones
          </h2>
          <p>
            JaijTech puede modificar estos términos del Sitio en cualquier
            momento; la versión vigente estará siempre disponible en esta página.
            Los términos contractuales del software se modifican únicamente por
            acuerdo escrito entre las partes.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            13. Ley aplicable y contacto
          </h2>
          <p>
            Estos términos se rigen por la legislación española (jurisdicción
            concreta a confirmar en el acuerdo aplicable, pendiente de revisión
            por asesoría legal). Para cualquier consulta, escríbenos a{" "}
            <a href="mailto:info@jaijtech.com" className="text-accent hover:underline">
              info@jaijtech.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
