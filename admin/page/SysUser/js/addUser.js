var id;
$(function() {

	layui.use(['form', 'element'], function() {
		var form = layui.form,
			element = layui.element;
		id = window.location.href.getQuery("id");

		var returnDataBM = postDataSYYH('wwGetDataList', {
			TblNum: 7002
		});

		if(returnDataBM.msg || returnDataBM.success) {

			for(var i in returnDataBM.data) {
				$('#mDepart').append('<option value="' + returnDataBM.data[i].DepartName + '">' + returnDataBM.data[i].DepartName + '</option>')
			}

		}
		if(id) {
			$('#XDLMID').val(id);
			$('#addUser').html('确定');
			var returnData = postDataSYYH('wwGetDataList', {
				TblNum: 7000,
				X1: id
			});

			for(var item in returnData.data[0]) {
				$('#' + item).val(returnData.data[0][item]);
			}


			$("#mUserName").val(returnData.data[0].mUserName)

			$('#mUserPassword').val('');
			if(returnData.data[0].mIdentity != '' && returnData.data[0].mIdentity.indexOf('主任') != -1) {
				$('#isbmzr').val(1);
				//				$('#isRecMsg').val(1);
			} else {
				$('#isbmzr').val(0);
				//				$('#isRecMsg').val(0);
			}
			if(returnData.data[0].isDisabled == "1" || returnData.data[0].isDisabled == "True") {
				$("#isDisabled").prop("checked", true)
			} else {
				$("#isDisabled").prop("checked", false)
			}
			if(returnData.data[0].isRecMsg == "1" || returnData.data[0].isRecMsg == "True") {
				$("#isRecMsg").prop("checked", true)
			} else {
				$("#isRecMsg").prop("checked", false)
			}

		} else {

			//		$('#onlynum').val(returnDataTimes.OnlyNum);
			postData("GetOnlyNum", "", function(data) {
				$('#onlynum').val(data.OnlyNum);

			}, "/DataInterface/DataCenterHandler.ashx", "", "sykf=syyh&XKLX=syyh")
		}
		form.on('select(mIdentity)', function(data) {
			if(data.value != '' && data.value.indexOf('主任') != -1) {
				$('#isbmzr').val(1);
				//				$('#isRecMsg').val(1);
			} else {
				$('#isbmzr').val(0);
				//				$('#isRecMsg').val(0);
			}
		});

		form.on('submit(XMForm)', function(data) {

			data.field.XDLMisDisabled = ($("#isDisabled").prop('checked') ? "1" : "0")
			data.field.XDLMisRecMsg = ($("#isRecMsg").prop('checked') ? "1" : "0")
			data.field.XDLMmUserName = $("#mUserName").val()
			data.field.XDLMrealName=$("#realName").val()
			if(id != null) {
				layer.confirm('确定要修改吗？', function(index) {
					var returnData112 = postDataSYYH('wwModifyDataById', data.field);

					if(returnData112.msg || returnData112.success) {
						layer.msg('修改完成', {
							icon: 1,
							time: 1000
						}, function() {
							layer.close(index);
							QXALL();
						})
					}

				})

				return false;
			} else {
				if($('#mUserPassword').val() == '') {
					layer.msg('密码不能为空', {
						icon: 0,
						time: 1000
					});
				} else {
					layer.confirm('确定要添加吗？', function(index) {
						var add_data = postDataSYYH('wwAddNewRow', data.field);

						if(add_data.msg || add_data.success) {
							layer.msg('添加完成', {
								icon: 1,
								time: 800
							}, function() {
								QXALL();
							});
						}
						layer.close(index);
					})
				}

				return false;

			}

		})
		form.render("select")
		form.render()
	});
})