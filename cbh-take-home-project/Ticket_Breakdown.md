# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
pseudoFacility = {
    id: Number
    shifts: Object
}
psuedoShifts = {
shifts: Object
}
psuedoAgent = {
    id: Number
    name: String
    shifts : Object
}
Custom ID Table - Ticket 001

Client Request Summary: Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.

A map of each facility's ID and associated custom agent will need to be added as a property to the agent schema/table. Add "CustomID" table to allow look-up of agent ID by Custom ID. Custom ID's will have the following attributes; id, name, and facility id. Create functions; postCustomId, putCustomId, getCustomId, deleteCustomId.

Custom ID Functions - Ticket 002

Client Request Summary: Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.

Create Lambda function generateCustomReport. This function should share the same functionality of generateReport but will retrieve the agent ID using the agent's custom ID as an argument.

Create Lambda function getAgentByCustomId. This function will take customId and facilityId as arguments and return the associated agent ID from the CustomID table. Each agent ID in the shifts array should be replaced by the facilities custom ID created for the user. If the a custom ID doesn't exist, leave the ID as-is.

Custom ID Testing - Ticket 003

Add tests for the following. Pleaae include edge cases and error handling;

Functions should update CustomID table as intended(post, put, get, delete).
getAgentByCustomId should return an agent ID given a facility custom ID.
generateCustomReport should return shifts with the agentIds replaced with the requesting facility's custom IDs.



