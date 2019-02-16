const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 查询当前对象在数组中的位置
 * 返回索引值
 */
function indexOf_(arr,obj){
  for(var i=0;i<arr.length;i++){
    if(arr[i].id==obj){
      return i
    }
  }
}

module.exports = {
  formatTime: formatTime,
  indexOf_: indexOf_
}


