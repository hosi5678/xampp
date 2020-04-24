function about_members(){

	common_change_borders();

	create_members_box("新規メンバー登録","新規メンバーの氏名","新規メンバーの登録",1,0);

	ajax_select_from_members();

}
