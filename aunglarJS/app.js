// app.js

var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope, $http) {
  $scope.fullName = "";
  $scope.dob = "";
  $scope.phoneNumber = "";
  $scope.role = "STAFF";
  $scope.address = "";
  $scope.showError = false;
  $scope.showError1 = false;
  $scope.showError2 = false;
  $scope.showError3 = false;
  $scope.showError4 = false;

  $scope.showClassName = "";
  $scope.showClassName1 = "";
  $scope.showClassName2 = "";
  $scope.showClassName3 = "";
  $scope.showClassName4 = "";

  $scope.addUser = function (event) {
    if (event) {
      event.preventDefault();
    }
    if (!$scope.fullName) {
      $scope.showError = true;
      $scope.showClassName = " Họ và Tên không được để trống.";
    } else {
      $scope.showError = false;
      $scope.showClassName = "";
    }
    if (!$scope.dob) {
      $scope.showError1 = true;
      $scope.showClassName1 = " Ngày Sinh không được để trống.";
    } else {
      $scope.showError1 = false;
      $scope.showClassName1 = " ";
    }
    if (!$scope.phoneNumber) {
      $scope.showError2 = true;
      $scope.showClassName2 = "Số Điện Thoại không được để trống.";
    } else {
      $scope.showClassName2 = "";

      $scope.showError2 = false;
    }
    if (!$scope.address) {
      $scope.showError3 = true;
      $scope.showClassName4 = " Địa Chỉ không được để trống.";
    } else {
      $scope.showError3 = false;
      $scope.showClassName4 = "";
    }
    if (
      !$scope.fullName ||
      !$scope.dob ||
      !$scope.phoneNumber ||
      !$scope.role ||
      !$scope.address
    ) {
      $scope.showError = true;
      return;
    }

    var newUser = {
      fullName: $scope.fullName,
      dob: $scope.dob,
      phoneNumber: $scope.phoneNumber,
      role: $scope.role,
      address: $scope.address,
    };

    $http
      .post("http://localhost:4444/users", newUser)
      .then(function (response) {
        console.log("User added successfully:", response.data);
        $scope.fullName = "";
        $scope.dob = "";
        $scope.phoneNumber = "";
        $scope.role = "STAFF";
        $scope.address = "";
        $scope.showClassName = false;
        $scope.showClassName1 = false;
        $scope.showClassName2 = false;
        $scope.showClassName3 = false;
        $scope.showClassName4 = false;
        $scope.addUserForm.$setPristine();
        $scope.addUserForm.$setUntouched();
        alert("User added successfully");
      })
      .catch(function (error) {
        console.error("Error adding user:", error);
      });
  };
});

var app2 = angular.module("myApp2", []);
app2.controller("myCtrl", function ($scope, $http, $window) {
  $scope.arrUser = [];

  function loadUsers() {
    $http
      .get("http://localhost:4444/users")
      .then(function (response) {
        $scope.arrUser = response.data;
        console.log(response);
      })
      .catch(function (error) {
        console.error("Error loading users:", error);
      });
  }

  loadUsers();

  $scope.deleteUser = function (userId) {
    $http
      .delete("http://localhost:4444/users/" + userId)
      .then(function (response) {
        console.log("User deleted successfully:", response.data);
        loadUsers();
      })
      .catch(function (error) {
        console.error("Error deleting user:", error);
      });
  };
  $scope.goUSERId = function (usserId) {
    sessionStorage.setItem("usserId", usserId);
    $window.location.href =
      "http://127.0.0.1:5500/aunglar-JS/admin/user/edit.html?id=" + usserId;
  };
});

var app3 = angular.module("myApp3", []);
app3.controller("myCtrl", function ($scope, $http) {
  $scope.userAdd = "";
  $scope.cakeName = "";
  $scope.price = "";
  $scope.cakeSize = "";
  $scope.cakeImage = "";
  $scope.productionDate = "";
  $scope.endDate = "";
  $scope.showError = false;
  $scope.showError1 = false;
  $scope.showError2 = false;
  $scope.showError3 = false;
  $scope.showError4 = false;
  $scope.showClassName = "";
  $scope.showClassName1 = "";
  $scope.showClassName2 = "";
  $scope.showClassName3 = "";
  $scope.showClassName4 = "";

  $scope.addProduct = function (event) {
    if (event) {
      event.preventDefault();
    }
    if (!$scope.userAdd) {
      $scope.showError = true;
      $scope.showClassName = "  không được để trống.";
    } else {
      $scope.showError = false;
      $scope.showClassName = "";
    }
    if (!$scope.cakeName) {
      $scope.showError1 = true;
      $scope.showClassName1 = "  không được để trống.";
    } else {
      $scope.showError1 = false;
      $scope.showClassName1 = " ";
    }
    if (!$scope.price) {
      $scope.showError2 = true;
      $scope.showClassName2 = "không được để trống.";
    } else {
      $scope.showClassName2 = "";
      $scope.showError2 = false;
    }
    if (!$scope.cakeSize) {
      $scope.showError3 = true;
      $scope.showClassName4 = "  không được để trống.";
    } else {
      $scope.showError3 = false;
      $scope.showClassName4 = "";
    }
    if (!$scope.cakeImage) {
      $scope.showError3 = true;
      $scope.showClassName4 = "  không được để trống.";
    } else {
      $scope.showError3 = false;
      $scope.showClassName4 = "";
    }
    if (!$scope.productionDate) {
      $scope.showError3 = true;
      $scope.showClassName4 = "  không được để trống.";
    } else {
      $scope.showError3 = false;
      $scope.showClassName4 = "";
    }
    if (!$scope.endDate) {
      $scope.showError3 = true;
      $scope.showClassName4 = "  không được để trống.";
    } else {
      $scope.showError3 = false;
      $scope.showClassName4 = "";
    }
    if (
      !$scope.userAdd ||
      !$scope.cakeName ||
      !$scope.price ||
      !$scope.cakeSize ||
      !$scope.cakeImage ||
      !$scope.productionDate ||
      !$scope.endDate
    ) {
      console.log("2");
      $scope.showError = true;
      return;
    }
    var newProduct = {
      poster: $scope.userAdd,
      name: $scope.cakeName,
      price: $scope.price,
      size: $scope.cakeSize,
      image: $scope.cakeImage,
      "start-date": $scope.productionDate,
      "end-date": $scope.endDate,
    };
    $http
      .post("http://localhost:4444/products", newProduct)
      .then(function (response) {
        console.log(response.data);
        alert("successfully added product");
      })
      .catch(function (error) {
        console.error("Error adding product:", error);
      });
  };
});

var app4 = angular.module("myApp4", []);
app4.controller("myCtrl", function ($scope, $http, $window) {
  $scope.arrProds = [];

  function loadProducts() {
    $http
      .get("http://localhost:4444/products")
      .then(function (response) {
        $scope.arrProds = response.data;
        console.log(response);
      })
      .catch(function (error) {
        console.error("Error loading products:", error);
      });
  }

  loadProducts();

  $scope.deleteProduct = function (productId) {
    $http
      .delete("http://localhost:4444/products/" + productId)
      .then(function (response) {
        console.log("Product deleted successfully:", response.data);
        loadProducts(); // Reload products after deletion
      })
      .catch(function (error) {
        console.error("Error deleting product:", error);
      });
  };
  $scope.goToProductDetails = function (productId) {
    sessionStorage.setItem("productId", productId);
    $window.location.href =
      "http://127.0.0.1:5500/aunglar-JS/admin/products/edit.html?id=" +
      productId;
  };
});

var app5 = angular.module("myApp5", []);
app5.controller("myCtrl", function ($scope, $http) {
  var productId = sessionStorage.getItem("productId");
  $scope.userAdd = "";
  $scope.cakeName = "";
  $scope.price = "";
  $scope.cakeSize = "";
  $scope.cakeImage = "";
  $scope.productionDate = "";
  $scope.endDate = "";
  $scope.showError = false;
  $scope.showError1 = false;
  $scope.showError2 = false;
  $scope.showError3 = false;
  $scope.showError4 = false;
  $scope.showClassName = "";
  $scope.showClassName1 = "";
  $scope.showClassName2 = "";
  $scope.showClassName3 = "";
  $scope.showClassName4 = "";
  function loadProducts() {
    $http
      .get("http://localhost:4444/products/" + productId)
      .then(function (response) {
        console.log(response);
        var startDate = new Date(response.data["start-date"]);
        var endDate = new Date(response.data["end-date"]);
        $scope.userAdd = response.data.poster;
        $scope.cakeName = response.data.name;
        $scope.price = response.data.price;
        $scope.cakeSize = response.data.size;
        $scope.cakeImage = response.data.image;
        $scope.productionDate = startDate;
        $scope.endDate = endDate;
      })
      .catch(function (error) {
        console.error("Error loading products:", error);
      });
  }

  loadProducts();
  $scope.updateProduct = function (event) {
    if (event) {
      event.preventDefault();
    }
    if (!$scope.userAdd) {
      $scope.showError = true;
      $scope.showClassName = "  không được để trống.";
    } else {
      $scope.showError = false;
      $scope.showClassName = "";
    }
    if (!$scope.cakeName) {
      $scope.showError1 = true;
      $scope.showClassName1 = "  không được để trống.";
    } else {
      $scope.showError1 = false;
      $scope.showClassName1 = " ";
    }
    if (!$scope.price) {
      $scope.showError2 = true;
      $scope.showClassName2 = "không được để trống.";
    } else {
      $scope.showClassName2 = "";
      $scope.showError2 = false;
    }
    if (!$scope.cakeSize) {
      $scope.showError3 = true;
      $scope.showClassName4 = "  không được để trống.";
    } else {
      $scope.showError3 = false;
      $scope.showClassName4 = "";
    }
    if (!$scope.cakeImage) {
      $scope.showError3 = true;
      $scope.showClassName4 = "  không được để trống.";
    } else {
      $scope.showError3 = false;
      $scope.showClassName4 = "";
    }
    if (!$scope.productionDate) {
      $scope.showError3 = true;
      $scope.showClassName4 = "  không được để trống.";
    } else {
      $scope.showError3 = false;
      $scope.showClassName4 = "";
    }
    if (!$scope.endDate) {
      $scope.showError3 = true;
      $scope.showClassName4 = "  không được để trống.";
    } else {
      $scope.showError3 = false;
      $scope.showClassName4 = "";
    }
    if (
      !$scope.userAdd ||
      !$scope.cakeName ||
      !$scope.price ||
      !$scope.cakeSize ||
      !$scope.cakeImage ||
      !$scope.productionDate ||
      !$scope.endDate
    ) {
      console.log("2");
      $scope.showError = true;
      alert("vui long nhap du");
      return;
    }
    var newProduct = {
      poster: $scope.userAdd,
      name: $scope.cakeName,
      price: $scope.price,
      size: $scope.cakeSize,
      image: $scope.cakeImage,
      "start-date": $scope.productionDate,
      "end-date": $scope.endDate,
    };
    $http
      .put("http://localhost:4444/products/" + productId, newProduct)
      .then(function (response) {
        console.log(response.data);
        alert("successfully update product");
      })
      .catch(function (error) {
        console.error("Error update product:", error);
      });
  };
});
var app6 = angular.module("myApp6", []);

app6.controller("myCtrl", function ($scope, $http) {
  var userID = sessionStorage.getItem("usserId");

  $scope.fullName = "";
  $scope.dob = "";
  $scope.phoneNumber = "";
  $scope.role = "STAFF";
  $scope.address = "";
  $scope.showError = false;
  $scope.showError1 = false;
  $scope.showError2 = false;
  $scope.showError3 = false;
  $scope.showError4 = false;

  $scope.showClassName = "";
  $scope.showClassName1 = "";
  $scope.showClassName2 = "";
  $scope.showClassName3 = "";
  $scope.showClassName4 = "";
  function loadUser() {
    $http
      .get("http://localhost:4444/users/" + userID)
      .then(function (response) {
        console.log(response);
        var startDate = new Date(response.data.dob);
        $scope.fullName = response.data.fullName;
        $scope.dob = startDate;
        $scope.phoneNumber = response.data.phoneNumber;
        $scope.role = response.data.role;
        $scope.address = response.data.address;
      })
      .catch(function (error) {
        console.error("Error loading users:", error);
      });
  }

  loadUser();
  $scope.addUser = function (event) {
    if (event) {
      event.preventDefault();
    }
    if (!$scope.fullName) {
      $scope.showError = true;
      $scope.showClassName = " Họ và Tên không được để trống.";
    } else {
      $scope.showError = false;
      $scope.showClassName = "";
    }
    if (!$scope.dob) {
      $scope.showError1 = true;
      $scope.showClassName1 = " Ngày Sinh không được để trống.";
    } else {
      $scope.showError1 = false;
      $scope.showClassName1 = " ";
    }
    if (!$scope.phoneNumber) {
      $scope.showError2 = true;
      $scope.showClassName2 = "Số Điện Thoại không được để trống.";
    } else {
      $scope.showClassName2 = "";

      $scope.showError2 = false;
    }
    if (!$scope.address) {
      $scope.showError3 = true;
      $scope.showClassName4 = " Địa Chỉ không được để trống.";
    } else {
      $scope.showError3 = false;
      $scope.showClassName4 = "";
    }
    if (
      !$scope.fullName ||
      !$scope.dob ||
      !$scope.phoneNumber ||
      !$scope.role ||
      !$scope.address
    ) {
      $scope.showError = true;
      alert("vui long nhap day du");
      return;
    }

    var newUser = {
      fullName: $scope.fullName,
      dob: $scope.dob,
      phoneNumber: $scope.phoneNumber,
      role: $scope.role,
      address: $scope.address,
    };

    $http
      .put("http://localhost:4444/users/" + userID, newUser)
      .then(function (response) {
        console.log("User udpate successfully:", response.data);
        $scope.fullName = "";
        $scope.dob = "";
        $scope.phoneNumber = "";
        $scope.role = "STAFF";
        $scope.address = "";
        $scope.showClassName = false;
        $scope.showClassName1 = false;
        $scope.showClassName2 = false;
        $scope.showClassName3 = false;
        $scope.showClassName4 = false;
        $scope.addUserForm.$setPristine();
        $scope.addUserForm.$setUntouched();
        alert("User udpate successfully");
      })
      .catch(function (error) {
        console.error("Error adding user:", error);
      });
  };
});
