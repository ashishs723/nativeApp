"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var page_1 = require("ui/page");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var ApplicationSettings = require("application-settings");
var LoginComponent = (function () {
    function LoginComponent(page, userService, router) {
        this.page = page;
        this.userService = userService;
        this.router = router;
        page.backgroundImage = "res://bg_inner";
        this.user = new user_1.User();
    }
    ;
    LoginComponent.prototype.ngOnInit = function () {
        console.dir(ApplicationSettings);
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.email || !this.user.password) {
            alert("All fields required!");
        }
        else {
            this.getRegister();
        }
    };
    ;
    LoginComponent.prototype.fetch = function () {
        console.log('login function gets call');
        this.userService.getData()
            .subscribe(function (res) { return console.dir(res.json()); }, function (err) { return console.log("Unfortunately we were unable to get data."); });
    };
    ;
    LoginComponent.prototype.getRegister = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function (res) {
            console.log('registered', res.text());
            //alert(res.text());
            _this.router.navigate(["/list"]);
        }, function (err) {
            console.log("Unfortunately we were unable to create your account.");
            alert(err.text());
        });
    };
    ;
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "./pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, user_service_1.UserService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELCtDQUE4QztBQUM5QyxnQ0FBK0I7QUFDL0IsK0RBQTZEO0FBRTdELDBDQUF5QztBQUN6QywwREFBNEQ7QUFlNUQsSUFBYSxjQUFjO0lBR3ZCLHdCQUFvQixJQUFTLEVBQVMsV0FBdUIsRUFBVSxNQUFjO1FBQWpFLFNBQUksR0FBSixJQUFJLENBQUs7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDakYsSUFBSSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksV0FBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUFBLENBQUM7SUFDRixpQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0YsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUyxDQUFDLENBQUEsQ0FBQztZQUM1QyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUM5QixDQUFDO1FBQ0ssSUFBSSxDQUFBLENBQUM7WUFDTCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDeEIsQ0FBQztJQUNDLENBQUM7SUFBQSxDQUFDO0lBRUYsOEJBQUssR0FBTDtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtRQUV2QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTthQUN6QixTQUFTLENBQ1QsVUFBQyxHQUFHLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF2QixDQUF1QixFQUNoQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsRUFBeEQsQ0FBd0QsQ0FDakUsQ0FBQTtJQUVDLENBQUM7SUFBQSxDQUFDO0lBRUYsb0NBQVcsR0FBWDtRQUFBLGlCQVlDO1FBWEgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuQyxTQUFTLENBQ1QsVUFBQyxHQUFHO1lBQ1MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckMsb0JBQW9CO1lBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUMsVUFBQyxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1lBQ3BFLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFBQSxDQUFDO0lBaUJOLHFCQUFDO0FBQUQsQ0FBQyxBQTVERCxJQTREQztBQTVEWSxjQUFjO0lBUDFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUMsdUJBQXVCLENBQUM7S0FDcEUsQ0FBQztxQ0FLMkIsV0FBSSxFQUFxQiwwQkFBVyxFQUFrQixlQUFNO0dBSDVFLGNBQWMsQ0E0RDFCO0FBNURZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbmltcG9ydCB7XG4gICAgRm9ybUJ1aWxkZXIsXG4gICAgVmFsaWRhdG9yc1xufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIixcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIHVzZXI6VXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTpQYWdlLHByaXZhdGUgdXNlclNlcnZpY2U6VXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgcGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2lubmVyXCI7XG4gICAgICAgIHRoaXMudXNlcj1uZXcgVXNlcigpO1xuICAgIH07XG4gICAgbmdPbkluaXQoKXtcbiAgICAgIGNvbnNvbGUuZGlyKEFwcGxpY2F0aW9uU2V0dGluZ3MpXG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuXHRcdGlmKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCApe1xuXHRcdFx0YWxlcnQoXCJBbGwgZmllbGRzIHJlcXVpcmVkIVwiKVxuXHRcdH1cbiAgICAgICAgZWxzZXtcblx0ICAgICAgIHRoaXMuZ2V0UmVnaXN0ZXIoKVx0ICAgICAgICBcblx0XHR9XG4gICAgfTtcblxuICAgIGZldGNoKCl7XG5cdFx0Y29uc29sZS5sb2coJ2xvZ2luIGZ1bmN0aW9uIGdldHMgY2FsbCcpXG5cblx0XHR0aGlzLnVzZXJTZXJ2aWNlLmdldERhdGEoKVxuXHRcdC5zdWJzY3JpYmUoXG5cdFx0XHQocmVzKSA9PiBjb25zb2xlLmRpcihyZXMuanNvbigpKSxcblx0XHRcdChlcnIpID0+IGNvbnNvbGUubG9nKFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBnZXQgZGF0YS5cIilcblx0XHQpXG5cbiAgICB9O1xuXG4gICAgZ2V0UmVnaXN0ZXIoKXtcblx0XHR0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcblx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0KHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWdpc3RlcmVkJyxyZXMudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KHJlcy50ZXh0KCkpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKTtcbiAgICAgICAgICAgIH0sKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiKTtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIudGV4dCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH07XG5cbiAgICAvL2xvZ0luKCl7XG4gICAgICAgIC8vdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAgIC8vLnN1YnNjcmliZShcbiAgICAgICAgLy8gICAocmVzKSA9PiB7XG4gICAgICAgICAgLy8gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSk7XG4gICAgICAgICAgLy8gICAgICBjb25zb2xlLmRpcihyZXMpO1xuXG4gICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgIC8vIChlcnIpID0+IHtcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBsb2dpbi5cIik7XG4gICAgICAgICAgICAvLyAgICBhbGVydChlcnIudGV4dCgpKTtcbiAgICAgICAgICAgLy8gfVxuICAgICAgICAvLylcbiAgICAvL307XG5cbn1cbiJdfQ==