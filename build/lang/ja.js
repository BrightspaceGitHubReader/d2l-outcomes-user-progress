import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};

/*
 * Ja lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangJaBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangJaBehavior = {
	ja: {
		'a11yCollapsed': '折りたたむ',
		'a11yExpanded': '展開',
		'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, =1 {試行 {attemptNames}} other {試行 {attemptNames} と {lastAttemptName}}}',
		'bigTrendAttemptsTooltipString': '{numAttempts, plural, =1 {回の試行} other {回の試行}} {attemptNames}',
		'close': '閉じる',
		'evidence': '証明',
		'headingDate': '日付',
		'headingEvidence': '証明の名前',
		'headingLoa': '達成レベル',
		'miniTrendAttemptsTooltipString': '{numAttempts, plural, =1 {回の試行} other {回の試行}} {attemptNames}',
		'miniTrendScreenReaderText': '{numAssessed} {numAssessed, plural, =1 {回} other {回}}評価済み: {levelNames}',
		'noEvidence': 'この{outcome, select, competencies {コンピテンシ} expectations {期待} objectives {目的} outcomes {結果} standards {標準} other {標準}} は、まだ評価されていません',
		'noOutcomesInstructor': '{outcome, select, competencies {コンピテンシ} expectations {期待} objectives {目的} outcomes {結果} standards {標準} other {標準}} の達成の追跡を開始するには、コースの {outcome, select, competencies {コンピテンシ} expectations {期待} objectives {目的} outcomes {結果} standards {標準} other {標準}}と評価済みアクティビティの整合を行います。',
		'noOutcomesStudent': '評価した{outcome, select, competencies {コンピテンシ} expectations {期待} objectives {目的} outcomes {結果} standards {標準} other {標準}}はありません。',
		'noScaleInstructor': 'この{outcome, select, competencies {コンピテンシ} expectations {期待} objectives {目的} outcomes {結果} standards {標準} other {標準}}の受講者の達成度を表示するには、達成スケールを作成して選択します。',
		'noScaleStudent': '{outcome, select, competencies {コンピテンシ} expectations {期待} objectives {目的} outcomes {結果} standards {標準} other {標準}}の達成を測定するためのスケールが設定されていません。',
		'noSearchResults': '「{searchTerm}」の検索結果なし',
		'nodeAriaTextGroup': 'Group {state}',
		'nodeAriaTextLevel': 'Level {level}',
		'nodeAriaTextPosition': '{position} of {count}',
		'notAssessed': '未評価',
		'numSearchResults': '「{searchTerm}」の検索{numResults, plural, =1 {結果} other {結果}} {numResults} 件',
		'outcomesListDescription': '{outcome, select, competencies {コンピテンシ} expectations {期待} objectives {目的} outcomes {結果} standards {標準} other {標準}}リスト',
		'outcomesListLoading': '読み込み中',
		'outcomesListLoadingComplete': '読み込みが完了しました',
		'searchCleared': '検索結果がクリアされました',
		'searchHint': '検索...',
		'searchLabel': '検索',
		'trend': '傾向',
		'untitled': '無題'
	}
};
