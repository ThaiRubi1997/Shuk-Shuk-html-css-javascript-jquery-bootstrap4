  $(document).ready(function() {
 
        //Khi bàn phím được nhấn và thả ra thì sẽ chạy phương thức này
        
        $("#formDemo").validate({
                    rules: {
                        ho: "required",
                        ten: "required",
                        diachi: {
                            required: true,
                            minlength: 2
                        },
                        sodienthoai: {
                            required: true,
                            minlength: 5
                        },
                        password: {
                            required: true,
                            minlength: 5
                        },
                        confirm_password: {
                            required: true,
                            minlength: 5,
                            equalTo: "#password"
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        dieukhoan: "required"
                    },
                    messages: {
                        ho: "Vui lòng nhập họ",
                        ten: "Vui lòng nhập tên",
                        diachi: {
                            required: "Vui lòng nhập địa chỉ",
                            minlength: "Địa chỉ ngắn vậy, chém gió ah?"
                        },
                        sodienthoai: {
                            required: "Vui lòng nhập số điện thoại",
                            minlength: "Số máy quý khách vừa nhập là số không có thực"
                        },
                        password: {
                            required: 'Vui lòng nhập mật khẩu',
                            minlength: 'Vui lòng nhập ít nhất 5 kí tự'
                        },
                        confirm_password: {
                            required: 'Vui lòng nhập mật khẩu',
                            minlength: 'Vui lòng nhập ít nhất 5 kí tự',
                            equalTo: 'Mật khẩu không trùng'
                        },
                        email: {
                            required: "Please provide a password",
                            minlength: "Your password must be at least 5 characters long",
                            equalTo: "Please enter the same password as above"
                        },
                        email: "Vui lòng nhập Email",
                        agree: "Vui lòng đồng ý các điều khoản"
                    }
                });

        $("#form-step1").validate({
                    rules: {
                        name: "required",
                        phone: {
                            required: true,
                            minlength: 5
                        },
                        address: {
                            required: true,
                            minlength: 2
                        },
                    },
                    messages: {                        
                        name: "Full name cannot be empty",
                        phone:"Phone Number must be longer than 5 characters",
                        address: {
                            required: "Address cannot be empty",
                            minlength: "Address must be longer than 2 characters"
                        },
                        phone: {
                            required: "Number Phone cannot be empty ",
                            minlength: "Phone Number must be longer than 5 characters"
                        },
                    }
                });
        $("#show-credit-card").validate({
                    rules: {
                        name: "required",
                        visa: "required",
                        
                    },
                    messages: {                        
                        name: "Name cannot be empty",
                        visa: "Cannot be empty"
                    }
                });
              
    });