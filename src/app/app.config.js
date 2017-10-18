angular.module("app.config", [])
.service("config", [function () {
    return {
        api: { baseURL: "http://localhost/EduApi.Web/api/" },

    };
}]);