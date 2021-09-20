window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3695","name":"auth_group_permissions","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"qYfI2UxniT@remotemysql.com","id":"d4"}},{"field":"Schema","value":""},{"field":"Name","value":"auth_group_permissions"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-33644","object_id":"column-33644","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33645","object_id":"column-33645","name":"group_id","name_without_path":"group_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3694","name":"auth_group","name_show_schema":"auth_group"}]},{"id":"column-33646","object_id":"column-33646","name":"permission_id","name_without_path":"permission_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3696","name":"auth_permission","name_show_schema":"auth_permission"}]}],"relations":[{"name":"auth_group_permissions_group_id_b120cbf9_fk_auth_group_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"auth_group_permissions","foreign_table_show_schema":"auth_group_permissions","foreign_table_verbose":"auth_group_permissions","foreign_table_verbose_show_schema":"auth_group_permissions","foreign_table_object_id":"t3695","primary_table":"auth_group","primary_table_show_schema":"auth_group","primary_table_verbose":"auth_group","primary_table_verbose_show_schema":"auth_group","primary_table_object_id":"t3694","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"group_id"}],"custom_fields":{}},{"name":"auth_group_permissio_permission_id_84c5c92e_fk_auth_perm","title":null,"description":null,"is_user_defined":false,"foreign_table":"auth_group_permissions","foreign_table_show_schema":"auth_group_permissions","foreign_table_verbose":"auth_group_permissions","foreign_table_verbose_show_schema":"auth_group_permissions","foreign_table_object_id":"t3695","primary_table":"auth_permission","primary_table_show_schema":"auth_permission","primary_table_verbose":"auth_permission","primary_table_verbose_show_schema":"auth_permission","primary_table_object_id":"t3696","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"permission_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"auth_group_permissions_group_id_permission_id_0cd325b0_uniq","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"group_id","name":"group_id"},{"path":null,"name_without_path":"permission_id","name":"permission_id"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2020-10-22 16:43"};