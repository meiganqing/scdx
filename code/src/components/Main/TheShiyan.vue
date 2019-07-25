<!--  -->
<template>
	<div class="problem">
		<button @click="goNext" class="gobutt">进入实验</button>
	</div>
</template>

<script>
	export default {
		name: "TheShiyan",
		data() {
			return {};
		},

		components: {},

		methods: {
			//  点击请求获取后台数据
			//  PostData(urldata, postDta, callback) {
			//    console.log(postDta);
			//    var postUrl = this.$http + urldata;
			//    this.axios
			//      .post(postUrl, postDta, {
			//        headers: {
			//          "Content-Type": "application/x-www-form-urlencoded"
			//        }
			//      })
			//      .then(
			//        function(res) {
			//          if (callback) {
			//            callback(res);
			//          }
			//        }.bind(this)
			//      )
			//      .catch(
			//        function(err) {
			//          if (err.response) {
			//            console.log(err.response);
			//          }
			//        }.bind(this)
			//      );
			//  },
			//
			goNext: function() {
				var that = this;
				this.PostDataVertify(

					{
						XDLMCID: "1001",
						XDLMSID: "DYBH201905301718571857250141",
						XDLMA: "2019060511114105058994", //关联编号
						XDLME: "1" //本步id
					},
					function(retunrData) {
						if(retunrData.rows.length > 0) {
							if(retunrData.data.rows[0].数据类型 == "图片") {
								that.$router.push({
									path: "/Thebagimg",
									query: {
										luid: retunrData.rows[0].id,
										xdlma: "2019060511114105058994"
									}
								});
							} else {
								that.$router.push({
									path: "/Thebagimg",
									query: {
										luid: retunrData.rows[0].id,
										xdlma: "2019060511114105058994"
									}
								});
							}
						}
					}
				);
			},
		}
	}
</script>
<style lang='scss' scoped>
	.problem {
		background: red;
		width: 100%;
		height: 100%;
		background: url("../../assets/xmimage/index-img/00.jpg")no-repeat;
		background-size: 100% 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.gobutt {
		display: block;
		width: 300px;
		height: 100px;
		background-color: rgba(30, 30, 30, 0.5);
		color: white;
		cursor: pointer;
	}
</style>