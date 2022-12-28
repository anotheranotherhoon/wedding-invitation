export const isoToTimeStamp = (time : any) => {
  const date = new Date(time);
  let convertedDate = date.getFullYear()+'년 ' + (date.getMonth()+1) + '월 '+date.getDate()+'일 ';
  return convertedDate
}