# Exercice technique

## Environnement technique :

Projet simple, créé avec CRA (Create-React-App). Importer le code source, install & start.
Le projet se lancera à l'url [http://localhost:3000](http://localhost:3000).

Environnement :
- SE Windows 10
- node v14.15.0

Dépendances ajoutées : 
- prop-types
- node-sass
- moment

## Projet :

:memo: **Sujet :**

L'interface liste des messages. Chaque liste est associée à une annonce fictive. On peut donc changer la liste en changeant l'annonce.
Sur la même interface, il est possible de remplir un message en précisant à l'aide d'un toggle s'il doit être privé ou public.
Les messages privés sont affichés sous condition (utilisateur connecté = auteur de l'annonce, on peut modifier l'utilisateur connecté), et le rendu est différent d'un message public. 
L'approche API centrique a été faite en simulant une API (MOCK_API/mock_api) qui retourne des données statiques (MOCK_API/DATABASE) pour dialoguer avec le front.

:dart: **Dans cet exercice :**
- Atomic design
- Class components
- Responsive css
- css avec SaSS
- Utilisation du local storage

## Documentation du code source :

Le composant App principal est un composant fonctionnel utilisant les hooks.
Dans la suite du projet, pour varier le code les sous-composants sont des class components hiérarchisés selon l'atomic design, et développés comme composants contrôlés.

### Atoms

#### :electron: **Icon**
##### *Description :*
Utilisé pour rendre des svg dans le code à partir du fichier de ressource Assets/icons.svg
##### *Props :*
| nom | type | default | description |
|-----|------|---------|-------------|
| id | string | "" | `requis` id du svg dans le fichier de ressource à afficher dans le code |
| fill | string | "white" | couleur à appliquer au svg |
| width | string | "25px" | largeur à appliquer au svg |
| height | string | "25px" | hauteur à appliquer au svg |

#### :electron: **Select**
##### *Description :*
Composant contrôlé permettant de choisir un élément dans un menu déroulant.
Chaque élément doit être un objet au format : 
````javascript
{id: "string", label: "string"}
````
##### *Props :*
| nom | type | default | description |
|-----|------|---------|-------------|
| menu | array | [] | tableau contenant tous les éléments possibles |
| selected | string | null | id de l'élément sélectionné |
| onChange | func | null | fonction appelée au changement de sélection |

#### :electron: **Toggle**
##### *Description :*
Composant contrôlé permettant d'alterner une valeur booléenne.
##### *Props :*
| nom | type | default | description |
|-----|------|---------|-------------|
|  value | bool | false | valeur déterminée par le toggle |
|  label | string | "" | Description de l'élément affecté par la valeur du toggle, affichée dans l'UI |
| onClick | func | null | Comportement du toggle au moment du clic. Le label, lorsqu'il est présent, propage aussi ce comportement |

### Molecules

#### :electron: **Annonce**
##### *Description :*
Composant d'affichage permettant d'afficher une annonce statique.
Requiert le composant `Icon` pour afficher une image par défaut.
##### *Props :*
| nom | type | default | description |
|-----|------|---------|-------------|
| id | string | "" | `requis` id unique de l'annonce |
| author | string | "" | auteur de l'annonce |
| title | string | "" | titre de l'annonce |
| date | string | "" | date de publication au format YYYY-MM-DD HH:MM:SS |
| text | string | "" | description de l'annonce à afficher |

#### :electron: **User**
##### *Description :*
Composant d'affichage pour les informations de profil d'un utilisateur.
Requiert le composant `Icon` pour afficher une image par défaut.
##### *Props :*
| nom | type | default | description |
|-----|------|---------|-------------|
| icon | element | null | photo de profil. par défaut : fallback sur le composant Icon appelant le svg USER |
| contact | string | "" | nom de l'utilisateur à afficher |

#### :electron: **Message**
##### *Description :*
Composant d'affichage pour mettre en forme un message laissé par un utilisateur.
Il y a deux designs disponibles : un pour les messages publics et un pour les messages privés.
Requiert `User` pour afficher les informations de l'auteur du messge.
Requiert `Icon` pour afficher le svg LOCK (logo verrou) sur un message privé.
##### *Props :*
| nom | type | default | description |
|-----|------|---------|-------------|
| id | string | "" | `requis` id unique du message |
| sender | string | "" | nom de l'auteur du message à afficher |
| private | string | false | caractère public/privé du message |
| date | string |"" | date d'envoi du message au format YYYY-MM-DD HH:MM:SS |
| text | string | "" | contenu du message |

#### :electron: **NewMessage**
##### *Description :*
Composant UX permettant de rédiger un message, le déclarer en privé/public et le poster.
Requiert `Icon` utilisé pour l'UI du bouton de submit.
Requirt `Toggle` utilisé pour gérer le mode privé/public. 
##### *Props :*
| nom | type | default | description |
|-----|------|---------|-------------|
| contact | string | "" | id du destinataire du message |
| maxSize | number | 300 | nombre maximum de caractères d'un message |
| postFunction | func | null | fonction(text : string, private : bool) permettant de poster le message |

### Organisms

#### :electron: **MessageViewer**
##### *Description :*
Composant UX pour afficher une liste de messages.
Requiert `Message`.
Requiert `NewMessage` pour la réponse.
##### *Props :*
| nom | type | default | description |
|-----|------|---------|-------------|
| contact | string | "" | id du destinataire des messages |
| echange | array | [] | liste des messages à afficher contenant des éléments structurés pour répondre aux pré-requis du composant Message |
| sendMessage | func | null | fonction pour poster le message passée au composant NewMessage |

#### :electron: **Header**
##### *Description :*
Composant UX pour la navigation dans le projet.
Requiert `Icon` pour les icônes USER (logo utilisateur), BUILD (logo annonce), et REFRESH (logo reset).
Requiert `Select` pour les select d'utilisateur et d'annonce.
##### *Props :*
| nom | type | default | description |
|-----|------|---------|-------------|
| user | string | "" | utilisateur sélectionné |
| users | array | [] | liste des utilisateurs disponibles |
| annonce | string | "" | annonce sélectionnée |
| annonces | array | [] | liste des annonces disponibles |
| selectUser | func | null | fonction du comportement souhaité au changement d'utilisateur  |
| selectAnnonce | func | null | fonction du comportement souhaité au changement d'annonce |
| reset | func | null | fonction de remise à zéro de la BDD de test |

#### :electron: **Page**
##### *Description :*
Composant UX pour afficher en même temps l'annonce sélectionnée et la liste de message correspondante.
Requiert `Annonce` pour mettre en forme l'annonce.
Requiert `MessageViewer` pour afficher la liste de messages.
##### *Props :*
| nom | type | default | description |
|-----|------|---------|-------------|
| user | string | "" | utilisateur connecté |
| annonce | object | null | annonce à afficher, objet dont la structure répond aux pré-requis du composant Annonce |
| messages | array | [] | liste des messages à afficher, chaque item répod aux pré-requis du composant Message  |
| postMessage | func| null | fonction pour poster un message |

## Merci !
