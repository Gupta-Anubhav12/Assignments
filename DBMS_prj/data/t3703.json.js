window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3703","name":"django_content_type","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"qYfI2UxniT@remotemysql.com","id":"d4"}},{"field":"Schema","value":""},{"field":"Name","value":"django_content_type"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-33689","object_id":"column-33689","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33690","object_id":"column-33690","name":"app_label","name_without_path":"app_label","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33691","object_id":"column-33691","name":"model","name_without_path":"model","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"auth_permission_content_type_id_2f476e4b_fk_django_co","title":null,"description":null,"is_user_defined":false,"foreign_table":"auth_permission","foreign_table_show_schema":"auth_permission","foreign_table_verbose":"auth_permission","foreign_table_verbose_show_schema":"auth_permission","foreign_table_object_id":"t3696","primary_table":"django_content_type","primary_table_show_schema":"django_content_type","primary_table_verbose":"django_content_type","primary_table_verbose_show_schema":"django_content_type","primary_table_object_id":"t3703","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"content_type_id"}],"custom_fields":{}},{"name":"django_admin_log_content_type_id_c4bce8eb_fk_django_co","title":null,"description":null,"is_user_defined":false,"foreign_table":"django_admin_log","foreign_table_show_schema":"django_admin_log","foreign_table_verbose":"django_admin_log","foreign_table_verbose_show_schema":"django_admin_log","foreign_table_object_id":"t3702","primary_table":"django_content_type","primary_table_show_schema":"django_content_type","primary_table_verbose":"django_content_type","primary_table_verbose_show_schema":"django_content_type","primary_table_object_id":"t3703","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"content_type_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"django_content_type_app_label_model_76bd3d3b_uniq","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"app_label","name":"app_label"},{"path":null,"name_without_path":"model","name":"model"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2020-10-22 16:43"};