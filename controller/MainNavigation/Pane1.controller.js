sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
    "use strict";

    var Controller = Controller.extend("DemoUXapp.controller.MainNavigation.Pane1", {
        onInit: function () {
            var oModel = new JSONModel(sap.ui.require.toUrl("DemoUXapp/localService/mockdata") + "/Employees.json");
            this.getView().setModel(oModel);
        },
        onUpdateFinished: function (oEvent) {
            var sTitle = "Sales people",
                oTable = this.getView().byId("objectlist");

            if (oTable.getBinding("items").isLengthFinal()) {
                var iCount = oEvent.getParameter("total"),
                    iItems = oTable.getItems().length;
                sTitle += " (" + iCount + ")";
            }
            this.getView().byId("title").setText(sTitle);
        }
    });

    return Controller;
});