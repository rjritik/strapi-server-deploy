"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[7556],{

/***/ 97556:
/***/ ((module) => {

module.exports = JSON.parse('{"Plugin.name":"Plugin SEO","SEOPage.header.button.edit-component":"Editer le composant SEO","SEOPage.header.title":"SEO","SEOPage.header.subtitle":"Optimisez votre contenu pour le référencement","SEOPage.empty-component-layout.github-error":"Cette repository GitHub ne contient pas de composant shared.seo ou shared.meta-social","SEOPage.empty-component-layout.regexp-error":"Veuillez fournir une URL de repository GitHub valide","SEOPage.empty-component-layout.no-component":"Vous n\'avez pas encore de composant SEO","SEOPage.empty-component-layout.input.tooltip":"Le repository GitHub strapi/components contient le composant SEO par défaut","SEOPage.info.information":"Assurez-vous d\'utiliser le composant importé shared.seo, de le nommer \'seo\' et de l\'inclure à la racine de votre Content-Type.","SEOPage.info.no-collection-types":"Vous n\'avez pas encore de collection-types...","SEOPage.info.no-single-types":"Vous n\'avez pas enore de single-types...","SEOPage.info.create-collection-type":"Créer votre premier collection-type","SEOPage.info.create-single-type":"Créer votre premier single-type","SEOPage.info.added":"Ajouté","SEOPage.info.add":"Ajouter le composant","SEOPage.info.settings":"Paramètres","SEOPage.info.settings.meta-title-check":"Meta Titre","SEOPage.info.settings.meta-description-check":"Meta Description","SEOPage.info.settings.meta-robots-check":"Meta Robots","SEOPage.info.settings.meta-social-check":"Meta Social","SEOPage.info.settings.word-count-check":"Compteur de mots","SEOPage.info.settings.canonical-url-check":"URL Canonique","SEOPage.info.settings.keyword-density-check":"Densité de mots-clés","SEOPage.info.settings.structured-data-check":"Données Structurées","SEOPage.info.settings.alternative-text-check":"Alt text","SEOPage.info.settings.last-updated-at-check":"Date de dernière mise à jour","SEOPage.info.settings.cancel.button":"Annuler","SEOPage.info.settings.save.button":"Enregistrer","SEOPage.info.settings.information":"Désactiver des verifications SEO pour ce content-type.","SEOPage.tab.collection-type-title":"Types de collections","SEOPage.tab.single-type-title":"Types simples","SEOPage.tab-panel.column-name":"Nom","SEORightLinks.summary-title":"Résumé du SEO","SEOSocialPreview.website-url":"url-of-your-website.io","SEOModal.summary-title.meta-title":"Meta Titre","SEOModal.summary-title.meta-description":"Meta Description","SEOModal.summary-title.word-counter":"Word Counter","SEOModal.summary-title.word-densisty":"Densité des mots-clés","SEOModal.summary-title.meta-social":"Balise Meta Social","SEOModal.summary-title.canonical-url":"URL canonique","SEOModal.summary-title.structured-data":"Données Structurées JSON","SEOModal.summary-title.meta-robots":"Meta Robots","SEOModal.summary-title.alt-attributes":"Texte d\'images","SEOModal.summary-title.last-updated-at":"Dernière mise à jour","SEOChecks.keywordsDensityCheck.default":"Chaque mot-clé est utilisé plus de 2 fois.","SEOChecks.keywordsDensityCheck.no-keywords":"Aucun mot-clé n\'a été trouvé dans votre composant SEO.","SEOChecks.keywordsDensityCheck.one-not-used":"Un mot-clé n\'est pas utilisé dans votre contenu.","SEOChecks.keywordsDensityCheck.one-used-once":"Un mot-clé n\'est utilisé qu\'une seule fois dans votre contenu.","SEOChecks.keywordsDensityCheck.label":"Définissez les mots clés pour lesquels vous souhaitez vous ranker dans votre composant SEO. Cela analysera la densité de vos mots-clés dans vos éditeurs de texte enrichi.","SEOChecks.alternativeTextCheck.default":"Toutes vos images contiennent un attribut alt ! Félicitations!","SEOChecks.alternativeTextCheck.intersection-zero":"Le nom et le texte alternatif de vos images sont identiques. Strapi génère automatiquement l\'attribut alt à partir du nom par défaut si le champ était vide lors du téléchargement du média. Avoir un attribut alt décrivant clairement l\'image est une très bonne pratique.","SEOChecks.alternativeTextCheck.intersection-negative":"images ne dispose(nt) pas d\'attribut alt.","SEOChecks.alternativeTextCheck.richtext-missing-one":"Il manque un attribut alt à au moins une image dans n\'importe quel éditeur de texte enrichi de 1er niveau.","SEOChecks.alternativeTextCheck.label":"Cela vérifiera s\'il vous manque du texte alternatif pour vos images (champ média) et dans vos éditeurs de texte enrichi de 1er niveau.","SEOChecks.alternativeTextCheck.missing-text":"alt manquant dans le champ de texte enrichi suivant :","SEOChecks.canonicalUrlCheck.default":"Aucune URL canonique n\'a été trouvée.","SEOChecks.canonicalUrlCheck.found":"Une URL canonique a été trouvée !","SEOChecks.canonicalUrlCheck.label":"Cela vérifiera si vous avez une URL canonique.","SEOChecks.canonicalUrlCheck.url":"URL canonique:","SEOChecks.lastUpdatedAtCheck.default":"Ce contenu a été modifié il y a plus d\'un an ! Les moteurs de recherche aiment le contenu récent.","SEOChecks.lastUpdatedAtCheck.save-content":"Vous devez d\'abord enregistrer cette entité.","SEOChecks.lastUpdatedAtCheck.success":"Super! Ce contenu a été modifié pour la dernière fois il y a moins d\'un an !","SEOChecks.lastUpdatedAtCheck.label":"Les moteurs de recherche aiment le contenu récent. Cela vérifiera si votre contenu a été modifié pour la dernière fois il y a moins d\'un an.","SEOChecks.lastUpdatedAtCheck.last":"Dernière mise à jour :","SEOChecks.metaDescriptionCheck.default":"Une meta description a été trouvée !","SEOChecks.metaDescriptionCheck.not-found":"Aucune meta description n\'a été trouvée.","SEOChecks.metaRobotsCheck.default":"Des balises meta robot ont été trouvées !","SEOChecks.metaRobotsCheck.label":"La balise meta du robot informe les moteurs de recherche des pages de votre site qui doivent être indexées et plus encore.","SEOChecks.metaSocialCheck.not-found":"Aucune balise meta Social n\'a été trouvée.","SEOChecks.metaSocialCheck.one":"Une seule balise Meta Social est utilisée.","SEOChecks.metaSocialCheck.configured":"Les balises Meta Social sont configurées.","SEOChecks.metaSocialCheck.label":"Les balises meta sociales vous permettent de gérer le titre, la description et l\'image de vos publications.","SEOChecks.metaTitleCheck.default":"Un Meta Title a été trouvé !","SEOChecks.metaTitleCheck.not-found":"Aucune meta title n\'a été trouvée.","SEOChecks.structuredDataCheck.default":"Un JSON de données structurées a été trouvé ! Cependant, nous pouvons valider l\'exactitude de son contenu.","SEOChecks.structuredDataCheck.not-found":"Aucun JSON de données structurées n\'a été trouvé.","SEOChecks.structuredDataCheck.label":"Les données structurées sont un format standardisé pour fournir des informations sur une page et classer le contenu de la page.","SEOChecks.wordCountCheck.default":"Vous avez plus de 300 mots dans vos editeurs de texte enrichi. Le nombre de mots n\'est pas un facteur de classement direct. Mais votre contenu doit être de la plus haute qualité possible, avec des informations pertinentes et uniques. Pour répondre à ces conditions, votre contenu nécessite un minimum de paragraphes, et donc de mots","SEOChecks.wordCountCheck.not-found":"Aucun contenu Richtext n\'a été trouvé.","SEOChecks.wordCountCheck.300":"Votre contenu Richtext de 1er niveau contient moins de 300 mots.","SEOChecks.wordCountCheck.label":"Votre contenu doit être de la plus haute qualité possible, avec des informations pertinentes et uniques. Votre contenu nécessite un minimum de paragraphes, et donc de mots.","SEOChecks.wordCountCheck.words":"Mots:","Modal.seo-component-empy":"Votre composant SEO est vide...","Tabs.title-settings":"Paramètres de titres","Tabs.social-network":"Réseaux sociaux","Tabs.seo-analyse":"Analyse SEO","Title-settings.metaTitle-too-long":"La balise meta title est trop long","Title-settings.metaTitle-tooltip":"La balise de titre est l\'une des premières choses que les utilisateurs remarquent dans le SERP. C\'est le titre de votre page qui offre un aperçu de ce dont parle votre contenu.","Title-settings.metaDescription-too-long":"La balise meta description est trop longue","Title-settings.metaDescription-too-short":"La balise meta description est trop courte","Title-settings.metaDescription-tooltip":"La méta description est d\'une importance égale à la balise de titre. Si la balise de titre est le titre qui apparaît en haut d\'un résultat de recherche, la méta description est l\'extrait qui s\'affiche en dessous.","Title-settings.metaTitle-hint":"/60 caractères (limite maximale recommandée)","Title-settings.metaDescription-hint":"/160 caractères (limite maximale recommandée)","Social-network.metaTitle-hint":"/60 caractères (limite maximale recommandée)","Social-network.metaDescription-hint":"/65 caractères (limite maximale recommandée)","Social-network.accordion.description":"Voyez à quoi ressemblera votre contenu posté sur","Social-network.no-tags":"Vous n\'avez pas encore de balises meta sociales.","Modal.cancel":"Annulez","Button.see-details":"PLUS DE DETAILS","Button.social-preview":"Aperçu Social","Button.browser-preview":"Aperçu Navigateurs","Button.seo-analyze":"Analyse SEO","Good":"Bien","Improvements":"Améliorations","Bad":"Problèmes","Social-preview.alert":"Complétez votre composant afin d\'obtenir un aperçu","Information":"Information"}');

/***/ })

}]);