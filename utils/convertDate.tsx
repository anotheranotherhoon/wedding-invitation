export const isoToTimeStamp = (time : any) => {
  const date = new Date(time);
  let convertedDate = date.getFullYear()+'년 ' + (date.getMonth()+1) + '월 '+date.getDate()+'일 ';
  return convertedDate
}

export const diffDate = (date : string) => {
  const diffDate = new Date(date).valueOf()
  const Today = new Date().valueOf()
  const diff = (diffDate - Today) / 1000
  const Dday = Math.floor(diff/( 60*60*24))
  return Dday
}