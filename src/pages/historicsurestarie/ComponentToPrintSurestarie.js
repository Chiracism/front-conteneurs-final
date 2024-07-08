import React from 'react';
import './HistoricSurestarie.css';

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
          HISTORIQUE DES OPERATIONS DES RESTITUTIONS AVEC OU SANS SURESTARIE
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
              <th>Taille</th>
              <th>B/L</th>
              <th>Voyage</th>
              {/* <th>Type</th>
              <th>Navire</th>
              <th>Port</th>
              <th>Type Transport</th> */}
              <th>ETA</th>
              <th>Date Retour CTNR</th>
              {/* <th>Client</th> */}
              <th>Caution Versée</th>
              <th>Détention</th>
              {/* <th>Durée Inf.</th>
              <th>DUrée Sup.</th> */}
              <th>Montant à Rembourser</th>
              <th>Montant</th>
              <th>Total</th>
              {/* <th>Inséré par</th> */}
              {/* <th>Série</th>
              <th>Agence</th>
              <th>Envoi</th>
              <th>Port Chargement</th>
              <th>Port Dechargement</th>
              <th>Vessel</th>
              <th>Qté Authentification Connaissement</th>
              <th>Qté Conventionnel 50T Consignation</th>
              <th>Qté Conventionnel Milieu Consignation</th>
              <th>Qté Conventionnel 500T Consignation</th>
              <th>Qté Vehicule Consignation</th>
              <th>Qté Conteneur 20 Consignation</th>
              <th>Qté Conteneur 40 Consignation</th>
              <th>Qté Conteneur 20 Tracking</th>
              <th>Qté Conteneur 40 Tracking</th>
              <th>Qté Conteneur 20 Equipement</th>
              <th>Qté Conteneur 40 Equipement</th>
              <th>Qté Frais Correction Manifeste Equipement</th>
              <th>Qté Frais Lettre Garantie Simple Equipement</th>
              <th>Qté Conventionnel Navigation}</th>
              <th>Qté Vehicule Navigation}</th>
              <th>Qté Conteneur 20 Navigation</th>
              <th>Qté Conteneur 40 Equipement</th>
              <th>Qté Conteneur 40 Navigation</th>
              <th>Numéro Fiche</th>
              <th>Taux Dollar</th>
              <th>Taux Euro</th>
              <th>TVA</th>
              <th>TVA DGRKC</th>
              <th>Date</th>
              <th>Total</th> */}
            </thead>
            <tbody style={{ width: '100%' }}>
              {rows.map((value, key) => {
                // const { serie, agence, envoi, pol, pod, vessel, tva, total, date } = value;
                const {
                  numero,
                  taille,
                  bl,
                  voyage,
                  // type,
                  // navire,
                  // port,
                  // typeofchoix,
                  datearrivee,
                  // client,
                  caution,
                  daterestitution,
                  detention,
                  // duree,
                  // durees,
                  rembourser,
                  montantafacture,
                  total
                  // name
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
                    <td>{bl}</td>
                    <td>{voyage}</td>
                    {/* <td>{type}</td>
                    <td>{navire}</td>
                    <td>{port}</td>
                    <td>{typeofchoix}</td> */}
                    <td>{datearrivee}</td>
                    <td>{daterestitution}</td>
                    {/* <td>{client}</td> */}
                    <td>{caution}</td>
                    <td>{detention}</td>
                    {/* <td>{duree}</td>
                    <td>{durees}</td> */}
                    <td>{rembourser}</td>
                    <td>{montantafacture}</td>
                    <td>{total}</td>
                    {/* <td>{name}</td> */}
                    {/* <td>{serie}</td>
                    <td>{agence}</td>
                    <td>{envoi}</td>
                    <td>{pol}</td>
                    <td>{pod}</td>
                    <td>{vessel}</td>
                    <td>{qteAuthentificationConnaissement}</td>
                    <td>{qteConventionnel50tCconsignation}</td>
                    <td>{qteConventionnelMilieuConsignation}</td>
                    <td>{qteConventionnel500tConsignation}</td>
                    <td>{qteVehiculeConsignation}</td>
                    <td>{qteConteneur20Consignation}</td>
                    <td>{qteConteneur40Consignation}</td>
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
        <br />
        <br />
        {/* <div
          className="print-source"
          style={{
            position: 'absolute',
            bottom: '35%',
            right: 0,
            textAlign: 'right',
            margin: '1rem 1rem 1rem 0'
          }}
        >
          <p>
            <strong>Date </strong> : {date}
          </p> 
        </div> */}
        <br />
        <br />
        <p className="print-source" style={{ textAlign: 'right', margin: '0rem 1rem 0rem 1rem' }}>
          {/* <strong>NGUNGA WAMPILUKULA</strong> */}
          <strong>{date}</strong>
        </p>
        <div>
          <div>
            <p
              className="print-source"
              style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}
            >
              {/* <strong>NGUNGA WAMPILUKULA</strong> */}
              <strong>Chef de Sce Multimodal & Stockage </strong>
            </p>
          </div>
          <div>
            <p
              className="print-source"
              style={{ textAlign: 'right', margin: '0rem 1rem 0rem 1rem' }}
            >
              {/* <strong>NGUNGA WAMPILUKULA</strong> */}
              <strong>Chef de Sce. Multimodal</strong>
            </p>
          </div>
          {/* <div
            className="print-source"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 60,
              textAlign: 'center',
              margin: '1rem 1',
              fontSize: 10
            }}
          >
            <img className="print-source" src="/static/Basdepage.JPG" alt="Logo" />
          </div> */}
        </div>
      </div>
    );
  }
}

export default ComponentToPrint;
