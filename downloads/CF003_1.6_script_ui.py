import bpy

rig_id = "99fsedpuef6052d5"

###################
## Rig UI Panels ##
###################

class RigProperties(bpy.types.Panel):
    bl_idname = "VIEW3D_PT_rig_properties_" + rig_id
    bl_label = "Properties"
    bl_category = 'Rig UI'
    bl_space_type = 'VIEW_3D'
    bl_region_type = 'UI'



    @classmethod
    def poll(self, context):
        try:
            return (context.active_object.data.get("rig_id") == rig_id)
        except (AttributeError, KeyError, TypeError):
            return False

    def draw(self, context):
        layout = self.layout
        row = layout.row()
        pose_bones = context.active_object.pose.bones
        try:
            selected_bones = [bone.name for bone in context.selected_pose_bones]
            selected_bones += [context.active_pose_bone.name]
        except (AttributeError, TypeError):
            return
        
        def is_selected(names):
        #Returns whether any of the named bones are selected
            if type(names) == list:
                for name in names:
                    if name in selected_bones:
                        return True
            elif names in selected_bones:
                return True
            return False
    
        #Define the names we'll use for bones
    
        head = "CTRL_head"
        
        
        pose_bones = context.active_object.pose.bones
           
    
        #Define what controls to show depending on the bones selected
    
        if is_selected([head]):
            layout.prop(pose_bones["CTRL_head"], '["test"]', slider=True) 

class RigLayers(bpy.types.Panel):
    bl_idname = "VIEW3D_PT_rig_layers_" + rig_id
    bl_label = "Layers"
    bl_category = 'Rig UI'
    bl_space_type = 'VIEW_3D'
    bl_region_type = 'UI'
    

    @classmethod
    def poll(self, context):
        try:
            return (context.active_object.data.get("rig_id") == rig_id)
        except (AttributeError, KeyError, TypeError):
            return False

    def draw(self, context):
        layout = self.layout
        col = layout.column()
 
        #Torso & Root
        
        row = col.row()
        row.prop(context.active_object.data, "layers", index=0, toggle=True, text="Torso", icon="ARMATURE_DATA")
        
        row = col.row()
        row.prop(context.active_object.data, "layers", index=16, toggle=True, text="Root", icon= "GRID")
        
        #Arms
        
        row = col.row()
        row.label(text="Left:")
        row.prop(context.active_object.data, "layers", index=2, toggle=True, text="FK", icon="OUTLINER_DATA_ARMATURE")
        row.prop(context.active_object.data, "layers", index=3, toggle=True, text="IK", icon="OUTLINER_DATA_ARMATURE")
        
        row = col.row()
        row.label(text="Right:")
        row.prop(context.active_object.data, "layers", index=4, toggle=True, text="FK", icon="OUTLINER_DATA_ARMATURE")
        row.prop(context.active_object.data, "layers", index=5, toggle=True, text="IK", icon="OUTLINER_DATA_ARMATURE")
        
        #Legs
        
        row = col.row()
        row.label(text="Left:")
        row.prop(context.active_object.data, "layers", index=6, toggle=True, text="FK", icon="CON_KINEMATIC")
        row.prop(context.active_object.data, "layers", index=7, toggle=True, text="IK", icon="CON_KINEMATIC")
        
        row = col.row()
        row.label(text="Right:")
        row.prop(context.active_object.data, "layers", index=8, toggle=True, text="FK", icon="CON_KINEMATIC")
        row.prop(context.active_object.data, "layers", index=9, toggle=True, text="IK", icon="CON_KINEMATIC")
        
        #Hair
        
        row = col.row()
        row.prop(context.active_object.data, "layers", index=11, toggle=True, text="Hair", icon="HAIR")
        

        
def register():
    bpy.utils.register_class(RigProperties);
    bpy.utils.register_class(RigLayers);

    
def unregister():
    bpy.utils.unregister_class(RigProperties);
    bpy.utils.unregister_class(RigLayers);

    
register()