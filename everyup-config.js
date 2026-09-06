/* 에브리업 7앱 공통 설정
 * 통합 자동백업 Apps Script를 배포한 뒤 backupApi 한 줄만 배포 URL로 바꾸면 됩니다.
 */
window.EVERYUP_CONFIG = {
  backupApi: "https://script.google.com/macros/s/AKfycbxgMAYdU-hIF5EZtAeIvouSujA9cSFTd744MVOFnHf0mFSZa6hWZHcINm1EcEbj5pRlBA/exec",
  backupToken: "EU26_BACKUP_20260906",
  sessionMs: 60 * 60 * 1000,
  loginUrl: "로그인.html"
};
