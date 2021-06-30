sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
    "use strict";

    var Controller = Controller.extend("DemoUXapp.controller.MainNavigation.Pane2", {
        onInit: function () {
            var oModel = new JSONModel(sap.ui.require.toUrl("DemoUXapp/localService/mockdata") + "/Suppliers.json");
            this.getView().setModel(oModel);
        },
        onUpdateFinished: function (oEvent) {
            var sTitle = "Connected suppliers",
                oTable = this.getView().byId("standardlist");

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