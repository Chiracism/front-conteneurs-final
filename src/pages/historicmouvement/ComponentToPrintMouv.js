import React from 'react';
import './Historic.css';

class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toDateString()
    };
  }

  render() {
    const { rows } = this.props;
    const { date } = this.state;

    return (
      <div>
        <div
          className="print-source"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'center'
          }}
        >
          <img
            className="print-source"
            src="/static/DIRPROKC.png"
            alt="Logo"
            justifyContent="center"
            position="center"
            alignItems="center"
            style={{ width: 350, height: 150, justifyContent: 'center', position: 'center' }}
          />
          <img
            className="print-source"
            src="/static/filigrane.png"
            alt="Logo"
            style={{
              position: 'absolute',
              zIndex: -1,
              opacity: 0.1,
              left: 75,
              top: 250,
              width: 600,
              height: 600
            }}
          />
          {/* <div className="print-source" style={{ textAlign: 'center', color: 'blue', flexGrow: 1 }}>
            <p style={{ fontWeight: 700, fontSize: '22px' }}>République Démocratique du Congo</p>
            <p style={{ fontWeight: 700, fontSize: '22px' }}>LIGNES MARITIMES CONGOLAISES, SA</p>
            <p style={{ fontWeight: 600, fontSize: '22px' }}>Armement National</p>
            <hr style={{ opacity: 1, color: 'blue', backgroundColor: 'blue', height: '3px' }} />
          </div> */}
        </div>
        <br />
        <br />
        <h3 className="print-source" style={{ textAlign: 'center' }}>
          HISTORIQUE DES MOUVEMENTS
        </h3>
        <div
          className="print-source"
          style={{
            display: 'block',
            marginTop: '2rem',
            marginBottom: '2rem',
            width: '100%'
          }}
        >
          <table className="print-source" style={{ width: '100%', marginBottom: '2rem' }}>
            <thead>
              <th>N° Conteneur</th>
              <th>Type</th>
              <th>Taille</th>
              <th>B/L</th>
              <th>Navire</th>
              <th>ETA</th>
              <th>Contenu</th>
              <th>Poids</th>
              <th>Client</th>
              <th>Numéro Memo</th>
              <th>Agence</th>
              <th>Caution</th>
              <th>Destination</th>
              <th>Date</th>
            </thead>
            <tbody style={{ width: '100%' }}>
              {rows.map((value, key) => {
                const {
                  numero,
                  taille,
                  type,
                  bl,
                  navire,
                  eta,
                  contenu,
                  poids,
                  client,
                  numeromemo,
                  agence,
                  caution,
                  destination,
                  // name,
                  dates
                } = value;

                // const numeroFiche = value.numero_fiche;
                // const dollarTaux = value.dollar_taux;
                // const euroTaux = value.euro_taux;
                // const tvaDgrkc = value.tva_dgrkc;
                // const qteAuthentificationConnaissement = value.qte_authentification_connaissement;
                // const qteConventionnel50tCconsignation = value.qte_conventionnel_50t_consignation;
                // const qteConventionnelMilieuConsignation =
                //   value.qte_conventionnel_milieu_consignation;
                // const qteConventionnel500tConsignation = value.qte_conventionnel_500t_consignation;
                // const qteVehiculeConsignation = value.qte_vehicule_consignation;
                // const qteConteneur20Consignation = value.qte_conteneur_20_consignation;
                // const qteConteneur40Consignation = value.qte_conteneur_40_consignation;
                // const qteConteneur20Tracking = value.qte_conteneur_20_tracking;
                // const qteConteneur40Tracking = value.qte_conteneur_40_tracking;
                // const qteConteneur20Equipement = value.qte_conteneur_20_equipement;
                // const qteConteneur40Equipement = value.qte_conteneur_40_equipement;
                // const qteFraisCorrectionManifesteEquipement =
                //   value.qte_frais_correction_manifeste_equipement;
                // const qteFraisLettreGarantieSimpleEquipement =
                //   value.qte_frais_lettre_garantie_simple_equipement;
                // const qteConventionnelNavigation = value.qte_conventionnel_navigation;
                // const qteVehiculeNavigation = value.qte_vehicule_navigation;
                // const qteConteneur20Navigation = value.qte_conteneur_20_navigation;
                // const qteConteneur40Navigation = value.qte_conteneur_40_navigation;

                return (
                  <tr key={key} style={{ textAlign: 'center' }}>
                    <td>{numero}</td>
                    <td>{taille}</td>
                    <td>{type}</td>
                    <td>{bl}</td>
                    <td>{navire}</td>
                    <td>{eta}</td>
                    <td>{contenu}</td>
                    <td>{poids}</td>
                    <td>{client}</td>
                    <td>{numeromemo}</td>
                    <td>{agence}</td>
                    <td>{caution}</td>
                    <td>{destination}</td>
                    <td>{dates}</td>
                    {/* <td>{name}</td>
                    <td>{date}</td>
                    <td>{qteConteneur20Tracking}</td>
                    <td>{qteConteneur40Tracking}</td>
                    <td>{qteConteneur20Equipement}</td>
                    <td>{qteConteneur40Equipement}</td>
                    <td>{qteFraisCorrectionManifesteEquipement}</td>
                    <td>{qteFraisLettreGarantieSimpleEquipement}</td>
                    <td>{qteConventionnelNavigation}</td>
                    <td>{qteVehiculeNavigation}</td>
                    <td>{qteConteneur20Navigation}</td>
                    <td>{qteConteneur40Equipement}</td>
                    <td>{qteConteneur40Navigation}</td>
                    <td>{numeroFiche}</td>
                    <td>{dollarTaux}</td>
                    <td>{euroTaux}</td>
                    <td>{tva}</td>
                    <td>{tvaDgrkc}</td>
                    <td>{date}</td>
                    <td>{total}</td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ComponentToPrint;
