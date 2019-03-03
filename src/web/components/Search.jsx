import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import axios from 'axios';
// function Search() {
//   return (
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//       Où allons-nous ?
//       </Typography>
//       <Grid container spacing={24}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="departure"
//             name="departure"
//             label="Departure"
//             fullWidth
//             autoComplete="departure"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="arrival"
//             name="arrival"
//             label="Arrival"
//             fullWidth
//             autoComplete="arrival"
//           />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default Search;

const suggestions = [
  {label:   
      'Abbesses'
   },
   {label:   
      'Alexandre-Dumas'
   },
   {label:   
      'Alma-Marceau'
   },
   {label:   
      'Alésia'
   },
   {label:   
      'Anatole-France'
   },
   {label:   
      'Anvers'
   },
   {label:   
      'Argentine'
   },
   {label:   
      'Arts-et-Métiers'
   },
   {label:   
      'Arts-et-Métiers'
   },
   {label:   
      'Asnières-Gennevilliers les Courtilles'
   },
   {label:   
      'Assemblée Nationale'
   },
   {label:   
      'Aubervilliers Pantin (4 Chemins)'
   },
   {label:   
      'Avenue Emile-Zola'
   },
   {label:   
      'Avron'
   },
   {label:   
      'Balard'
   },
   {label:   
      'Barbès-Rochechouart'
   },
   {label:   
      'Barbès-Rochechouart'
   },
   {label:   
      'Basilique de Saint-Denis'
   },
   {label:   
      'Bastille'
   },
   {label:   
      'Bastille'
   },
   {label:   
      'Bastille'
   },
   {label:   
      'Bel-Air'
   },
   {label:   
      'Belleville'
   },
   {label:   
      'Belleville'
   },
   {label:   
      'Bercy'
   },
   {label:   
      'Bercy'
   },
   {label:   
      'Bibliothèque-François Mitterrand'
   },
   {label:   
      'Billancourt'
   },
   {label:   
      'Bir-Hakeim (Grenelle)'
   },
   {label:   
      'Blanche'
   },
   {label:   
      'Bobigny-Pablo-Picasso'
   },
   {label:   
      'Bobigny-Pantin (Raymond Queneau)'
   },
   {label:   
      'Boissière'
   },
   {label:   
      'Bolivar'
   },
   {label:   
      'Bonne Nouvelle'
   },
   {label:   
      'Bonne Nouvelle'
   },
   {label:   
      'Botzaris'
   },
   {label:   
      'Boucicaut'
   },
   {label:   
      'Boulogne Pont de Saint-Cloud'
   },
   {label:   
      'Boulogne-Jean-Jaurès'
   },
   {label:   
      'Bourse'
   },
   {label:   
      'Brochant'
   },
   {label:   
      'Bréguet-Sabin'
   },
   {label:   
      'Buttes-Chaumont'
   },
   {label:   
      'Buzenval'
   },
   {label:   
      'Bérault'
   },
   {label:   
      'Cadet'
   },
   {label:   
      'Cambronne'
   },
   {label:   
      'Campo-Formio'
   },
   {label:   
      'Cardinal-Lemoine'
   },
   {label:   
      'Carrefour-Pleyel'
   },
   {label:   
      'Censier-Daubenton'
   },
   {label:   
      'Champs-Elysées-Clémenceau'
   },
   {label:   
      'Champs-Elysées-Clémenceau'
   },
   {label:   
      'Chardon-Lagache'
   },
   {label:   
      'Charenton-Écoles'
   },
   {label:   
      'Charles Michels'
   },
   {label:   
      'Charles de Gaulle-Etoile'
   },
   {label:   
      'Charles de Gaulle-Etoile'
   },
   {label:   
      'Charles de Gaulle-Etoile'
   },
   {label:   
      'Charonne'
   },
   {label:   
      "Chaussée d'Antin (la Fayette)"
   },
   {label:   
    "Chaussée d'Antin (la Fayette)"
   },
   {label:   
      'Chemin Vert'
   },
   {label:   
      'Chevaleret'
   },
   {label:   
      'Château Landon'
   },
   {label:   
      'Château Rouge'
   },
   {label:   
      "Château d'Eau"
   },
   {label:   
      'Château de Vincennes'
   },
   {label:   
      'Châtelet'
   },
   {label:   
      'Châtelet'
   },
   {label:   
      'Châtelet'
   },
   {label:   
      'Châtelet'
   },
   {label:   
      'Châtelet'
   },
   {label:   
      'Châtillon Montrouge'
   },
   {label:   
      'Cité'
   },
   {label:   
      'Cluny-la Sorbonne'
   },
   {label:   
      'Colonel Fabien'
   },
   {label:   
      'Commerce'
   },
   {label:   
      'Concorde'
   },
   {label:   
      'Concorde'
   },
   {label:   
      'Concorde'
   },
   {label:   
      'Convention'
   },
   {label:   
      'Corentin-Cariou'
   },
   {label:   
      'Corentin-Celton'
   },
   {label:   
      'Corvisart'
   },
   {label:   
      'Cour Saint-Émilion'
   },
   {label:   
      'Courcelles'
   },
   {label:   
      'Couronnes'
   },
   {label:   
      'Crimée'
   },
   {label:   
      'Croix-de-Chavaux (Jacques Duclos)'
   },
   {label:   
      'Créteil-Préfecture (Hôtel de Ville)'
   },
   {label:   
      'Créteil-Université'
   },
   {label:   
      "Créteil-l'Echat (Hôpital Henri Mondor)"
   },
   {label:   
      'Danube'
   },
   {label:   
      'Daumesnil (Félix Eboué)'
   },
   {label:   
      'Daumesnil (Félix Eboué)'
   },
   {label:   
      'Denfert-Rochereau'
   },
   {label:   
      'Denfert-Rochereau'
   },
   {label:   
      'Dugommier'
   },
   {label:   
      'Dupleix'
   },
   {label:   
      'Duroc'
   },
   {label:   
      'Duroc'
   },
   {label:   
      'Edgar-Quinet'
   },
   {label:   
      'Esplanade de la Défense'
   },
   {label:   
      'Etienne Marcel'
   },
   {label:   
      'Europe'
   },
   {label:   
      'Exelmans'
   },
   {label:   
      'Faidherbe-Chaligny'
   },
   {label:   
      'Falguière'
   },
   {label:   
      'Filles du Calvaire'
   },
   {label:   
      "Fort dAubervilliers"
   },
   {label:   
      'Franklin-Roosevelt'
   },
   {label:   
      'Franklin-Roosevelt'
   },
   {label:   
      'Front Populaire'
   },
   {label:   
      'Félix Faure'
   },
   {label:   
      'Gabriel-Péri'
   },
   {label:   
      'Gallieni (Parc de Bagnolet)'
   },
   {label:   
      'Gambetta'
   },
   {label:   
      'Gambetta'
   },
   {label:   
      "Gare d'Austerlitz"
   },
   {label:   
      "Gare dAusterlitz"
   },
   {label:   
      'Gare de Lyon'
   },
   {label:   
      'Gare de Lyon'
   },
   {label:   
      "Gare de l'Est (Verdun)"
   },
   {label:   
      "Gare de l'Est (Verdun)"
   },
   {label:   
      "Gare de l'Est (Verdun)"
   },
   {label:   
      'Gare du Nord'
   },
   {label:   
      'Gare du Nord'
   },
   {label:   
      'Garibaldi'
   },
   {label:   
      'Gaîté'
   },
   {label:   
      'George V'
   },
   {label:   
      'Glacière'
   },
   {label:   
      'Goncourt (Hôpital Saint-Louis)'
   },
   {label:   
      'Grands Boulevards'
   },
   {label:   
      'Grands Boulevards'
   },
   {label:   
      'Guy-Môquet'
   },
   {label:   
      'Havre-Caumartin'
   },
   {label:   
      'Havre-Caumartin'
   },
   {label:   
      'Hoche'
   },
   {label:   
      'Hôtel de Ville'
   },
   {label:   
      'Hôtel de Ville'
   },
   {label:   
      'Invalides'
   },
   {label:   
      'Invalides'
   },
   {label:   
      'Iéna'
   },
   {label:   
      'Jacques-Bonsergent'
   },
   {label:   
      'Jasmin'
   },
   {label:   
      'Jaurès'
   },
   {label:   
      'Jaurès'
   },
   {label:   
      'Jaurès'
   },
   {label:   
      'Javel-André-Citroen'
   },
   {label:   
      'Jourdain'
   },
   {label:   
      'Jules Joffrin'
   },
   {label:   
      'Jussieu'
   },
   {label:   
      'Jussieu'
   },
   {label:   
      'Kléber'
   },
   {label:   
      'La Chapelle'
   },
   {label:   
      'La Courneuve-8-Mai-1945'
   },
   {label:   
      'La Défense (Grande Arche)'
   },
   {label:   
      'La Fourche'
   },
   {label:   
      'La Motte-Picquet-Grenelle'
   },
   {label:   
      'La Motte-Picquet-Grenelle'
   },
   {label:   
      'La Motte-Picquet-Grenelle'
   },
   {label:   
      'La Muette'
   },
   {label:   
      'La Tour-Maubourg'
   },
   {label:   
      'Lamarck-Caulaincourt'
   },
   {label:   
      'Laumière'
   },
   {label:   
      'Le Kremlin-Bicêtre'
   },
   {label:   
      'Le Peletier'
   },
   {label:   
      'Ledru-Rollin'
   },
   {label:   
      'Les Agnettes'
   },
   {label:   
      'Les Gobelins'
   },
   {label:   
      'Les Halles'
   },
   {label:   
      "Les Sablons (Jardin d'Acclimatation)"
   },
   {label:   
      'Liberté'
   },
   {label:   
      'Liège'
   },
   {label:   
      'Louis Blanc'
   },
   {label:   
      'Louis Blanc'
   },
   {label:   
      'Louise Michel'
   },
   {label:   
      'Lourmel'
   },
   {label:   
      'Louvre-Rivoli'
   },
   {label:   
      'Mabillon'
   },
   {label:   
      'Madeleine'
   },
   {label:   
      'Madeleine'
   },
   {label:   
      'Madeleine'
   },
   {label:   
      "Mairie d'Issy"
   },
   {label:   
      "Mairie d'Ivry"
   },
   {label:   
      'Mairie de Clichy'
   },
   {label:   
      'Mairie de Montreuil'
   },
   {label:   
      'Mairie de Montrouge'
   },
   {label:   
      'Mairie de Saint-Ouen'
   },
   {label:   
      'Mairie des Lilas'
   },
   {label:   
      'Maison Blanche'
   },
   {label:   
      'Maisons-Alfort-Stade'
   },
   {label:   
      'Maisons-Alfort-les Juilliottes'
   },
   {label:   
      'Malakoff-Plateau de Vanves'
   },
   {label:   
      'Malakoff-Rue Etienne Dolet'
   },
   {label:   
      'Malesherbes'
   },
   {label:   
      'Maraîchers'
   },
   {label:   
      'Marcadet-Poissonniers'
   },
   {label:   
      'Marcadet-Poissonniers'
   },
   {label:   
      'Marcel Sembat'
   },
   {label:   
      'Marx-Dormoy'
   },
   {label:   
      'Maubert-Mutualité'
   },
   {label:   
      'Michel Bizot'
   },
   {label:   
      'Michel-Ange-Auteuil'
   },
   {label:   
      'Michel-Ange-Auteuil'
   },
   {label:   
      'Michel-Ange-Molitor'
   },
   {label:   
      'Michel-Ange-Molitor'
   },
   {label:   
      'Mirabeau'
   },
   {label:   
      'Miromesnil'
   },
   {label:   
      'Miromesnil'
   },
   {label:   
      'Monceau'
   },
   {label:   
      'Montgallet'
   },
   {label:   
      'Montparnasse-Bienvenue'
   },
   {label:   
      'Montparnasse-Bienvenue'
   },
   {label:   
      'Montparnasse-Bienvenue'
   },
   {label:   
      'Montparnasse-Bienvenue'
   },
   {label:   
      'Mouton-Duvernet'
   },
   {label:   
      'Ménilmontant'
   },
   {label:   
      'Nation'
   },
   {label:   
      'Nation'
   },
   {label:   
      'Nation'
   },
   {label:   
      'Nation'
   },
   {label:   
      'Nationale'
   },
   {label:   
      'Notre-Dame de Lorette'
   },
   {label:   
      'Notre-Dame des Champs'
   },
   {label:   
      'Oberkampf'
   },
   {label:   
      'Oberkampf'
   },
   {label:   
      'Odéon'
   },
   {label:   
      'Odéon'
   },
   {label:   
      'Olympiades'
   },
   {label:   
      'Opéra'
   },
   {label:   
      'Opéra'
   },
   {label:   
      'Opéra'
   },
   {label:   
      'Ourcq'
   },
   {label:   
      'Palais-Royal (Musée du Louvre)'
   },
   {label:   
      'Palais-Royal (Musée du Louvre)'
   },
   {label:   
      'Parmentier'
   },
   {label:   
      'Passy'
   },
   {label:   
      'Pasteur'
   },
   {label:   
      'Pasteur'
   },
   {label:   
      'Pelleport'
   },
   {label:   
      'Pereire'
   },
   {label:   
      'Pernety'
   },
   {label:   
      'Philippe Auguste'
   },
   {label:   
      'Picpus'
   },
   {label:   
      'Pierre et Marie Curie'
   },
   {label:   
      'Pigalle'
   },
   {label:   
      'Pigalle'
   },
   {label:   
      'Place Monge (Jardin des Plantes)'
   },
   {label:   
      "Place d'Italie"
   },
   {label:   
      "Place d'Italie"
   },
   {label:   
      "Place d'Italie"
   },
   {label:   
      'Place de Clichy'
   },
   {label:   
      'Place de Clichy'
   },
   {label:   
      'Place des Fêtes'
   },
   {label:   
      'Place des Fêtes'
   },
   {label:   
      'Plaisance'
   },
   {label:   
      'Pointe du Lac'
   },
   {label:   
      'Poissonnière'
   },
   {label:   
      'Pont Marie (Cité des Arts)'
   },
   {label:   
      'Pont Neuf'
   },
   {label:   
      'Pont de Levallois-Bécon'
   },
   {label:   
      'Pont de Neuilly'
   },
   {label:   
      'Pont de Sèvres'
   },
   {label:   
      'Porte Dauphine (Maréchal de Lattre de Tassigny)'
   },
   {label:   
      'Porte Dorée'
   },
   {label:   
      'Porte Maillot'
   },
   {label:   
      "Porte d'Auteuil"
   },
   {label:   
      "Porte d'Italie"
   },
   {label:   
      "Porte d'Ivry"
   },
   {label:   
      "Porte d'Orléans (Général Leclerc)"
   },
   {label:   
      'Porte de Bagnolet'
   },
   {label:   
      'Porte de Champerret'
   },
   {label:   
      'Porte de Charenton'
   },
   {label:   
      'Porte de Choisy'
   },
   {label:   
      'Porte de Clichy'
   },
   {label:   
      'Porte de Clignancourt'
   },
   {label:   
      'Porte de Montreuil'
   },
   {label:   
      'Porte de Pantin'
   },
   {label:   
      'Porte de Saint-Cloud'
   },
   {label:   
      'Porte de Saint-Ouen'
   },
   {label:   
      'Porte de Vanves'
   },
   {label:   
      'Porte de Versailles'
   },
   {label:   
      'Porte de Vincennes'
   },
   {label:   
      'Porte de la Chapelle'
   },
   {label:   
      'Porte de la Villette'
   },
   {label:   
      'Porte des Lilas'
   },
   {label:   
      'Porte des Lilas'
   },
   {label:   
      'Pré-Saint-Gervais'
   },
   {label:   
      'Pyramides'
   },
   {label:   
      'Pyramides'
   },
   {label:   
      'Pyrénées'
   },
   {label:   
      'Père-Lachaise'
   },
   {label:   
      'Père-Lachaise'
   },
   {label:   
      'Quai de la Gare'
   },
   {label:   
      'Quai de la Rapée'
   },
   {label:   
      'Quatre Septembre'
   },
   {label:   
      'Rambuteau'
   },
   {label:   
      'Ranelagh'
   },
   {label:   
      'Raspail'
   },
   {label:   
      'Raspail'
   },
   {label:   
      'Rennes'
   },
   {label:   
      'Reuilly-Diderot'
   },
   {label:   
      'Reuilly-Diderot'
   },
   {label:   
      'Richard-Lenoir'
   },
   {label:   
      'Richelieu-Drouot'
   },
   {label:   
      'Richelieu-Drouot'
   },
   {label:   
      'Riquet'
   },
   {label:   
      'Robespierre'
   },
   {label:   
      'Rome'
   },
   {label:   
      'Rue Saint-Maur'
   },
   {label:   
      'Rue de la Pompe (Avenue Georges Mandel)'
   },
   {label:   
      'Rue des Boulets'
   },
   {label:   
      'Rue du Bac'
   },
   {label:   
      'Réaumur-Sébastopol'
   },
   {label:   
      'Réaumur-Sébastopol'
   },
   {label:   
      'République'
   },
   {label:   
      'République'
   },
   {label:   
      'République'
   },
   {label:   
      'République'
   },
   {label:   
      'République'
   },
   {label:   
      'Saint-Ambroise'
   },
   {label:   
      'Saint-Augustin'
   },
   {label:   
      'Saint-Denis - Porte de Paris'
   },
   {label:   
      'Saint-Denis-Université'
   },
   {label:   
      'Saint-Fargeau'
   },
   {label:   
      'Saint-François-Xavier'
   },
   {label:   
      'Saint-Georges'
   },
   {label:   
      'Saint-Germain des Prés'
   },
   {label:   
      'Saint-Jacques'
   },
   {label:   
      'Saint-Lazare'
   },
   {label:   
      'Saint-Lazare'
   },
   {label:   
      'Saint-Lazare'
   },
   {label:   
      'Saint-Lazare'
   },
   {label:   
      'Saint-Mandé'
   },
   {label:   
      'Saint-Marcel'
   },
   {label:   
      'Saint-Michel'
   },
   {label:   
      'Saint-Paul (le Marais)'
   },
   {label:   
      'Saint-Philippe du Roule'
   },
   {label:   
      'Saint-Placide'
   },
   {label:   
      'Saint-Sulpice'
   },
   {label:   
      'Saint-Sébastien-Froissart'
   },
   {label:   
      'Sentier'
   },
   {label:   
      'Simplon'
   },
   {label:   
      'Solférino'
   },
   {label:   
      'Stalingrad'
   },
   {label:   
      'Stalingrad'
   },
   {label:   
      'Stalingrad'
   },
   {label:   
      'Strasbourg-Saint-Denis'
   },
   {label:   
      'Strasbourg-Saint-Denis'
   },
   {label:   
      'Strasbourg-Saint-Denis'
   },
   {label:   
      'Sully-Morland'
   },
   {label:   
      'Sèvres-Babylone'
   },
   {label:   
      'Sèvres-Babylone'
   },
   {label:   
      'Sèvres-Lecourbe'
   },
   {label:   
      'Ségur'
   },
   {label:   
      'Temple'
   },
   {label:   
      'Ternes'
   },
   {label:   
      'Tolbiac'
   },
   {label:   
      "Trinité-d'Estienne d'Orves"
   },
   {label:   
      'Trocadéro'
   },
   {label:   
      'Trocadéro'
   },
   {label:   
      'Tuileries'
   },
   {label:   
      'Télégraphe'
   },
   {label:   
      'Vaneau'
   },
   {label:   
      'Varenne'
   },
   {label:   
      'Vaugirard (Adolphe Chérioux)'
   },
   {label:   
      'Vavin'
   },
   {label:   
      'Victor Hugo'
   },
   {label:   
      'Villejuif-Louis Aragon'
   },
   {label:   
      'Villejuif-Léo Lagrange'
   },
   {label:   
      'Villejuif-Paul Vaillant Couturier (Hôpital Paul Brousse)'
   },
   {label:   
      'Villiers'
   },
   {label:   
      'Villiers'
   },
   {label:   
      'Volontaires'
   },
   {label:   
      'Voltaire (Léon Blum)'
   },
   {label:   
      'Wagram'
   },
   {label:   
      'École Militaire'
   },
   {label:   
      'École Vétérinaire de Maisons-Alfort'
   },
   {label:   
      "Église d'Auteuil"
   },
   {label:   
      'Église de Pantin'
   }
  ].map(suggestion => ({
      value: suggestion.label,
      label: suggestion.label
  }));

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props)
    this.state = {
      type : this.props.type,
      departure: null,
      arrival: null,
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = name => async value => {
    await this.setState({
      [name]: value,
    }, () => {
      console.log(this.state.departure.value, "departure");
    }, () => {
      console.log(this.state.arrival.value, "arival");
    });
    console.log(this.state.departure);
    console.log(this.state.type);
   // console.log(this.state.arrival);
    if (!!this.state.departure && this.state.type == "arrival")
    {
      alert("eqw");
      await axios.get("http://localhost:3000/merde").then(res => {
          alert("eqw");
          console.log(res);
        });   
    }
  };

  handleSubmit(event) {
 
    event.preventDefault();
  }

  render() {
    const { classes, theme } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };

    return (
      <div className={classes.root}>
        <NoSsr>
			<div className={classes.divider} />
          <Select
            classes={classes}
            styles={selectStyles}
            options={suggestions}
            components={components}
            value={this.state.departure}
            onChange={this.handleChange('departure')}
            placeholder={this.props.placeholderText}
            isClearable
          />
          <div className={classes.divider} />
        </NoSsr>
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Search);