function recordMailQuota() {
  Browser.msgBox("MailApp Daily Quota Remaining", MailApp.getRemainingDailyQuota(), Browser.Buttons.OK);
  var sheet = SpreadsheetApp.getActiveSheet();
  if (sheet.getRange(1,1).getValue() != 'Timestamp') {
    sheet.getRange(1,1).setValue("Timestamp");
    sheet.getRange(1,2).setValue("Quotas");
  }
  row = sheet.getLastRow()+1;
  sheet.getRange(row,2).setValue(MailApp.getRemainingDailyQuota());
  sheet.getRange(row,1).setValue(new Date()).setNumberFormat("M/dd/yyyy hh:mm");
}
