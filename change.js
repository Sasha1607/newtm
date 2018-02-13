app.controller("changeCtrl", function () {
    var vm = this;
    vm.changes = [
        {
            body1: "body1",
            column1_3_1: "column1_3_1",
            column2_2_1: "column2_2_1"
        },
        {
            body2: "body2",
            column1_3_2: "column1_3_2",
            column2_2_2: "column2_2_2"
        },
        {
            body3: "body3",
            column1_3_3: "column1_3_3",
            column2_2_3: "column2_2_3"
        }

    ];
    vm.changeStyle = vm.changes[0];
    vm.but1 = function(){
        vm.changeStyle = vm.changes[0];
        console.log("1");
    }
    vm.but2 = function(){
        vm.changeStyle = vm.changes[1];
        console.log("2");
    }
    vm.but3 = function(){
        vm.changeStyle = vm.changes[2];
        console.log("3");
    }
})
