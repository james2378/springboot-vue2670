const base = {
    get() {
        return {
            url : "http://localhost:8080/xueshengsushemenjinguanli/",
            name: "xueshengsushemenjinguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xueshengsushemenjinguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学生宿舍门禁信息管理系统"
        } 
    }
}
export default base
