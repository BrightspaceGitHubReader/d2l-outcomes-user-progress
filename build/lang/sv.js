import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};

/*
 * Sv lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangSvBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangSvBehavior = {
	sv: {
		'a11yCollapsed': 'komprimerat',
		'a11yExpanded': 'expanderat',
		'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, =1 {försök {attemptNames}} other {försök {attemptNames} and {lastAttemptName}}}',
		'bigTrendAttemptsTooltipString': '{numAttempts, plural, =1 {försök} other {försök}} {attemptNames}',
		'close': 'Stäng',
		'evidence': 'Spåra',
		'headingDate': 'Datum',
		'headingEvidence': 'Bevisnamn',
		'headingLoa': 'Uppnådd nivå',
		'miniTrendAttemptsTooltipString': '{numAttempts, plural, =1 {försök} other {försök}} {attemptNames}',
		'miniTrendScreenReaderText': 'Utvärderade {numAssessed} {numAssessed, plural, =1 {gång} other {gånger}}: {levelNames}',
		'noEvidence': 'De här {outcome, select, competencies {kompetenserna} expectations {förväntningarna} objectives {målen} outcomes {resultaten} standards {standarderna} other {standarderna}} har inte utvärderats än',
		'noOutcomesInstructor': 'För att börja spåra uppnådda {outcome, select, competencies {kompetenser} expectations {förväntningar} objectives {mål} outcomes {resultat} standards {standarder} other {standarder}} justerar du kursens {outcome, select, competencies {kompetenser} expectations {förväntningar} objectives {mål} outcomes {resultat} standards {standarder} other {standarder}} mot utvärderade aktiviteter.',
		'noOutcomesStudent': 'Inga {outcome, select, competencies {kompetenser} expectations {förväntningar} objectives {mål} outcomes {resultat} standards {standarder} other {standarder}} har utvärderats.',
		'noScaleInstructor': 'För att se elevens framsteg mot dessa {outcome, select, competencies {kompetenser} expectations {förväntningar} objectives {mål} outcomes {resultat} standards {standarder} other {standarder}} skapar du och väljer en nivåskala.',
		'noScaleStudent': 'Ingen skala har angetts för mätning av uppnådda {outcome, select, competencies {kompetenser} expectations {förväntningar} objectives {mål} outcomes {resultat} standards {standarder} other {standarder}}.',
		'noSearchResults': 'Det gick inte att hitta några resultat för "{searchTerm}"',
		'nodeAriaTextGroup': 'Group {state}',
		'nodeAriaTextLevel': 'Level {level}',
		'nodeAriaTextPosition': '{position} of {count}',
		'notAssessed': 'Ej bedömt',
		'numSearchResults': '{numResults} {numResults, plural, =1 {sökresultat} other {sökresultat}} för "{searchTerm}"',
		'outcomesListDescription': '{outcome, select, competencies {Kompetenslista} expectations {Förväntningslista} objectives {Mållista} outcomes {Resultatlista} standards {Standardlista} other {Standardlista}}',
		'outcomesListLoading': 'Laddar',
		'outcomesListLoadingComplete': 'Inläsning slutförd',
		'searchCleared': 'Sökresultatet har rensats',
		'searchHint': 'Sök ...',
		'searchLabel': 'Sökning',
		'trend': 'Trend',
		'untitled': 'Namnlös'
	}
};
