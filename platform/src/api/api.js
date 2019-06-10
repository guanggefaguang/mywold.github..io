import req from './index'

export const getBairon = (params) => {
  return req.http('get', '/brdata/getdata', params)
}

export const getInformationq53 = (params) => {
  return req.http('get', '/q53', params)
}
//法院公告
export const getInformationq49 = (params) => {
  return req.http('get', '/q49', params)
}
//商标
export const getInformationq43 = (params) => {
  return req.http('get', '/q43', params)
}
//失信被执行人
export const getInformationq55 = (params) => {
  return req.http('get', '/q55', params)
}
//专利
export const getInformationq41 = (params) => {
  return req.http('get', '/q41', params)
}
//著作权
export const getInformationq62 = (params) => {
  return req.http('get', '/q62', params)
}
//新闻
export const getInformationq34 = (params) => {
  return req.http('get', '/q34', params)
}
export const getData = (params) => {
  return req.http('get', '/tydata/getdata', params)
}
//获取基本信息
export const getDatat64 = (params) => {
  return req.http('get', '/t64', params)
}

export const getDatat18 = (params) => {
  return req.http('get', '/t18', params)
}
//抽查检查
export const getDatat59 = (params) => {
  return req.http('get', '/t59', params)
}
//法律诉讼
export const getDatat28 = (params) => {
  return req.http('get', '/t28', params)
}
//行政处罚
export const getDatat58 = (params) => {
  return req.http('get', '/t58', params)
}
//重大违规
export const getDatat48 = (params) => {
  return req.http('get', '/t48', params)
}
//动产抵押
export const getDatat57 = (params) => {
  return req.http('get', '/t57', params)
}
//股权出质
export const getDatat56 = (params) => {
  return req.http('get', '/t56', params)
}
//招聘信息
export const getDatat42 = (params) => {
  return req.http('get', '/t42', params)
}
//招投标
export const getDatat45 = (params) => {
  return req.http('get', '/t45', params)
}
//ICP备案
export const getDatat32 = (params) => {
  return req.http('get', '/t32', params)
}
//债券
export const getDatat50 = (params) => {
  return req.http('get', '/t50', params)
}
//ICP备案
export const getDatat54 = (params) => {
  return req.http('get', '/t54', params)
}


//获取全部选项
export const getSetting = (params) => {
  return req.http('get', '/interlist', params)
}
//获取选中选项
export const getAddBase = (params) => {
  return req.http('get', '/baseinfo', params)
}
//提交选中选项
export const postAddBaseInfo = (params) => {
  return req.http('post', '/addbaseinfo', params)
}
//提交舆情设置
export const postAddNews = (params) => {
  return req.http('post', '/addnews', params)
}
//获取舆情设置
export const getAddNews = (params) => {
  return req.http('get', '/news', params)
}

//提交企业推送设置
export const postAddData = (params) => {
  return req.http('post', '/adddatapush', params)
}
//获取企业推送设置
export const getAddData = (params) => {
  return req.http('post', '/datapush', params)
}
//获取监控列表
export const getListData = (params) => {
  return req.http('get', '/getmonitorobj', params)
}
//添加监控对象
export const PostListData = (params) => {
  return req.http('post', '/addmonitorobj', params)
}
//暂停或启用
export const ChangeData = (params) => {
  return req.http('post', '/stopmonitorobj', params)
}
//暂停或启用
export const DeleteData = (params) => {
  return req.http('post', '/delmonitorobj', params)
}
//是否启用舆情
export const getOfData = (params) => {
  return req.http('get', '/newsrole', params)
}


//获取所有个人配置接口
export const getperinterlist = (params) => {
  return req.http('get', '/perinterlist', params)
}
//获取个人配置
export const getpersonalinfo = (params) => {
  return req.http('get', '/personalinfo', params)
}
//修改个人配置
export const getaddpersonalinfo = (params) => {
  return req.http('post', '/addpersonalinfo', params)
}

//费用管理
export const getfeedetail = (params) => {
  return req.http('get', '/feedetail', params)
}
//费用管理获取子集
export const getorgchildren = (params) => {
  return req.http('get', '/orgchildren', params)
}

//登录接口
export const Login = (params) => {
  return req.http('post', '/userlogin', params)
}
