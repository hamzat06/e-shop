import React from "react";

export const Modal = ({product, secondForm}) => {

	return (
		<div>
				<div id="modal-full" class="uk-modal-full uk-modal" data-uk-modal>
				    <div class="uk-modal-dialog" data-uk-height-viewport>
				        <button class="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
				        <div className="uk-container uk-padding uk-flex uk-flex-center">
					        <div class="uk-width-2-3@s uk-margin-large-top">
					        	{secondForm === false ? (
						        	<div>
							        	<h1 className="uk-text-center uk-text-bold">MoOSTs Activity</h1>
							        	<form className="uk-margin-large uk-form-stacked uk-grid-small" data-uk-grid>
							        		<div class="uk-width-1-2@s">
							        				<label class="uk-form-label" for="form-stacked-text">Activity No.</label>
											        <input class="uk-input" type="text"/>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Activity Name</label>
											        <input class="uk-input" type="text"/>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Activity Type</label>
											        <select class="uk-select">
											        		<option disabled selected>Select one</option>
									                <option>Inspections</option>
									                <option>Repairs</option>
									                <option>Replacements/Overhauls</option>
									                <option>Calibration/Testing installation</option>
									                <option>Expert Cleaning</option>
									            </select>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Date of Capture</label>
											        <input class="uk-input" type="date"/>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Knowledge Criticality Code</label>
											        <input class="uk-input" type="text"/>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Frequency Value (between 1-4)</label>
											        <input class="uk-input" type="text"/>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">ORI Value (between 1-10)</label>
											        <input class="uk-input" type="text"/>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">IHSE Value (between 1-10)</label>
											        <input class="uk-input" type="text"/>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Source of Labour</label>
											        <select class="uk-select">
											        		<option disabled selected>Select one</option>
									                <option>External</option>
									                <option>Combination (External + Internal)</option>
									                <option>Internal</option>
									            </select>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Number of Labour (Real Values)</label>
											        <select class="uk-select">
											        		<option disabled selected>Select one</option>
									                <option> > 10 </option>
									                <option>4-9</option>
									                <option>1-3</option>
									            </select>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Duration of Technical Work (Real Values)</label>
											        <select class="uk-select">
											        		<option disabled selected>Select one</option>
									                <option> 45.85 ≥ 68.75 </option>
									                <option>22.9 {"<"} 45.87 </option>
									                <option>0.1 {"<"} 22.9</option>
									            </select>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Hierarchy of Specialized Labour</label>
											        <select class="uk-select">
											        		<option disabled selected>Select one</option>
									                <option>Mid-level Managers</option>
									                <option>Supervisor and Site Level Coordinators</option>
									                <option>Crafts</option>
									            </select>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Discipline Requirement</label>
											        <select class="uk-select">
											        		<option disabled selected>Select one</option>
									                <option>Welder</option>
									                <option>Fabricator</option>
									                <option>Scaffolder</option>
									                <option>Electrical Fitter</option>
									                <option>Instrumentation</option>
									                <option>Method Inspection</option>
									                <option>System Inspection</option>
									                <option>System Coordinator</option>
									                <option>Maintenance Manager</option>
									                <option>Reliability Engineer</option>
									                <option>HSE</option>
									                <option>MoOSTs Coordinator</option>
									                <option>MoOSTs Executioner</option>
									                <option>Project Control Planner</option>
									                <option>Scheduling</option>
									                <option>Estimating</option>
									                <option>Reporting</option>
									                <option>Document Controller / IT Expert</option>
									            </select>
											    </div>
											    {/*<div class="uk-width-1-2@s">
											    	<label class="uk-form-label" for="form-stacked-text">Thumbnail [image/video]</label>
											    	<div uk-form-custom="target: true">
										            <input type="file"/>
										            <input class="uk-input uk-form-width-large" type="text" placeholder="Select file" disabled/>
										        </div>
											    </div>*/}
											    
											    <div className="uk-margin-top uk-text-center uk-width-1-1">
											    	<button type="submit" className="uk-button uk-button-secondary">Add Activity</button>
											    </div>
							        	</form>
						        	</div>
					        	): (
					        		<div>
					        			<h1 className="uk-text-center uk-text-bold">MoOSTs Knowledge/Information Model</h1>
							        	<form className="uk-margin-large uk-form-stacked uk-grid-small" data-uk-grid>
							        		<div class="uk-width-1-2@s">
							        				<label class="uk-form-label" for="form-stacked-text">Knowledge Criticality</label>
											        <select class="uk-select">
											        		<option disabled selected>Select one</option>
									                <option>High</option>
									                <option>Medium</option>
									                <option>Low</option>
									            </select>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Knowledge Type</label>
											        <select class="uk-select">
											        		<option disabled selected>Select one</option>
									                <option>Explicit</option>
									                <option>Tacit</option>
									            </select>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Knowledge Capture Source</label>
											        <select class="uk-select">
											        		<option disabled selected>Select one</option>
									                <option>Expert Maintenance Personnel</option>
									                <option>Daily MoOSTs Review Meetings</option>
									                <option>MoOSTs Debrief Sessions with Maintenance</option>
									                <option>Calibration/Testing installation</option>
									                <option>Expert Cleaning</option>
									            </select>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Knowledge Criteria Details</label>
											        <select class="uk-select">
											        		<option disabled selected>Select one</option>
									                <option>Explicit-Document/Report, Standards, Specification</option>
									                <option>Tacit Skills, Know-how, Experience from Past Lessons</option>
									            </select>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Knowledge Capture Technique and Input Descriptions</label>
											        <select class="uk-select">
											        		<option disabled selected>Select one</option>
									                <option>Top 5, List 5 Important lessons, and/or files/documents or resources from the task</option>
									                <option>Protocol Analysis - Provide Task Diagnosis, Classification and Assessent in Details</option>
									                <option>Laddering - Identify all important elements of the task and why</option>
									                <option>Critical Decision List - Identify the knowledge gap in a particular activity</option>
									            </select>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Knowledge Approval Approach</label>
											        <select class="uk-select">
											        		<option disabled selected>Select one</option>
									                <option>Expert decision dased on approval ranking</option>
									                <option>Census group decision based on approval ranking</option>
									            </select>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Knowledge Value of a 5 point, Likert scale of 1 to 5</label>
											        <select class="uk-select">
											        		<option disabled selected>Select one</option>
									                <option>Accuracy - To ensure that the knowledge, measurement or prediction details are correct to an extent</option>
									                <option>Degree of completeness to ensure that the knowledge captured is complete to an extent for reusability</option>
									                <option>Technical relevance to prevent irrelevant overload of items into the global library</option>
									            </select>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Knowledge Ranking</label>
											        <select class="uk-select">
											        		<option disabled selected>Select one</option>
									                <option>High - Score greater than 10</option>
									                <option>Medium - Score greater than 5 or equal to 10</option>
									                <option>Low - Score of less than or equal to 3</option>
									            </select>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Duration of Technical Work (Real Values)</label>
											        <select class="uk-select">
											        		<option disabled selected>Select one</option>
									                <option> 45.85 ≥ 68.75 </option>
									                <option>22.9 {"<"} 45.87 </option>
									                <option>0.1 {"<"} 22.9</option>
									            </select>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Final Decision</label>
											        <select class="uk-select">
											        		<option disabled selected>Select one</option>
									                <option>Approved</option>
									                <option>Rejected</option>
									            </select>
											    </div>
											    
											    <div class="uk-width-1-2@s">
											    	<label class="uk-form-label" for="form-stacked-text">Reference of Links (Document/Video/Picture and Links Upload)</label>
											    	<div uk-form-custom="target: true">
										            <input type="file"/>
										            <input class="uk-input uk-form-width-large" type="text" placeholder="Select file" disabled/>
										        </div>
											    </div>

											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Keywords Seperated by "," (Derived from Knowledge description)</label>
											        <input class="uk-input" type="text"/>
											    </div>
											    <div class="uk-width-1-2@s">
											    		<label class="uk-form-label" for="form-stacked-text">Assigned MoOSTs KP ID</label>
											        <input class="uk-input" type="text"/>
											    </div>
											    
											    <div className="uk-margin-top uk-text-center uk-width-1-1">
											    	<button type="submit" className="uk-button uk-button-secondary">Add Knowledge/Information</button>
											    </div>
							        	</form>
					        		</div>

					        	)}
					        	
					        </div>
				        </div>
				    </div>
				</div>
		</div>
	)
}