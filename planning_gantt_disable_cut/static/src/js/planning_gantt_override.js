/** @odoo-module **/

// Use the exact path that worked with web.assets_backend_lazy
import { PlanningGanttRenderer } from "@planning/views/planning_gantt/planning_gantt_renderer"; 
import { patch } from "@web/core/utils/patch";

patch(PlanningGanttRenderer.prototype, {

    // 1. ACTION OVERRIDE: Neutralize the function found in the source code
    // This is the function that executes the shift splitting logic.
    onPillSplitToolClicked(ev) {
        // Stop the event and return immediately to prevent Odoo from executing the split logic.
        if (ev) {
            ev.stopPropagation();
        }
        console.log("SUCCESS: Planning Shift Split Action Blocked!");
        return; 
    },

    // 2. UI OVERRIDE: Hide the scissors icon
    // This method injects properties into the Gantt bar for rendering.
    getBarProps(pill) {
        // Call the original method to get all base properties
        const props = this._super(pill);

        // This property controls the visibility of the scissors icon.
        props.canSplit = false; 
        
        // Optional: Also disable resizing and dropping to prevent other modifications
        props.canResize = false;
        props.canDrop = false;
        
        return props;
    },
});