"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var user_service_1 = require("../../shared/user/user.service");
var ListComponent = (function () {
    function ListComponent(page, userService) {
        this.page = page;
        this.userService = userService;
        page.backgroundImage = "res://bg_inner";
    }
    ;
    ListComponent.prototype.ngOnInit = function () {
        this.fetch();
    };
    ;
    ListComponent.prototype.fetch = function () {
        var self = this;
        console.log('login function gets call');
        self.userService.getData()
            .subscribe(function (res) { return console.dir(res.json()); }, function (err) { return console.log("Unfortunately we were unable to get data."); });
    };
    ;
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        providers: [user_service_1.UserService],
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, user_service_1.UserService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUNqRCxnQ0FBK0I7QUFHL0IsK0RBQTZEO0FBVTdELElBQWEsYUFBYTtJQUV0Qix1QkFBb0IsSUFBUyxFQUFVLFdBQXVCO1FBQTFDLFNBQUksR0FBSixJQUFJLENBQUs7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUMxRCxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO0lBQzVDLENBQUM7SUFBQSxDQUFDO0lBQ0YsZ0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFBQSxDQUFDO0lBRUYsNkJBQUssR0FBTDtRQUNBLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUE7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7YUFDekIsU0FBUyxDQUNULFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBdkIsQ0FBdUIsRUFDaEMsVUFBQyxHQUFHLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLEVBQXhELENBQXdELENBQ2xFLENBQUE7SUFBQSxDQUFDO0lBQUEsQ0FBQztJQUNKLG9CQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxhQUFhO0lBUHpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7S0FDakUsQ0FBQztxQ0FJMkIsV0FBSSxFQUFzQiwwQkFBVztHQUZyRCxhQUFhLENBaUJ6QjtBQWpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0eyBcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTpQYWdlLCBwcml2YXRlIHVzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlKSB7XG4gICAgICAgIHBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19pbm5lclwiO1xuICAgIH07XG4gICAgbmdPbkluaXQoKXtcbiAgICBcdHRoaXMuZmV0Y2goKTtcbiAgICB9O1xuXG4gICAgZmV0Y2goKXtcbiAgICB2YXIgc2VsZj10aGlzO1xuXHRcdGNvbnNvbGUubG9nKCdsb2dpbiBmdW5jdGlvbiBnZXRzIGNhbGwnKVxuXHRcdHNlbGYudXNlclNlcnZpY2UuZ2V0RGF0YSgpXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdChyZXMpID0+IGNvbnNvbGUuZGlyKHJlcy5qc29uKCkpLFxuXHRcdFx0KGVycikgPT4gY29uc29sZS5sb2coXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGdldCBkYXRhLlwiKVxuXHQpfTtcbn1cbiJdfQ==