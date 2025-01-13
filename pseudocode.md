# Brainstorming

## Summary
At its "./root", the ToDo App is a series of repos, each containing a collection of lists, which in turn hold a database of list entries, which should be enumerated as key:value pairs (objects).

User should be able to: 
-- Navigate between projects and within projects. 
-- On "click", add or remove any of the 3 primary Object Classes: 1."Project"; 2."List"; 3."Item".
-- Add, edit, and remove details attached to each of these objects, such as content or labels.

## Component Features Detailed Breakdown:
1. Add, remove, navigate between projects
2. Project dashboard shows all lists made by user 
3. Lists expand to full screen on "click"
4. Return to dashboard on "click"
5. Pop-up add new list form on click
6. User can enter inputs like list "name"
7. User can add new list to dash on "click"
8. Click on list component to add new list item 
9. New list item has inputs for "title", "description", "dueDate", "priority"
10. New list item added to list on "click" 
11. List items can be deleted
12. Lists can be deleted
13. Lists can be sorted by priority
14. List items can be sorted by priority
15. Data persists, is stored in local storage on creation
16. Local storage data is retrieved on page load


# Architecture / Flow:

## Project View
1. Side panel stores list manipulation and other features
2. Side panel consists of clickable boxes/buttons 
3. Each box/button should have it's own separate .js module 
4. List all projects in side panel, with click = display project
5. Add list button also lives in side panel 
6. Main container holds Grid Items with auto-fit grid-template-cols

## List View
1. List expands to fill screen 
2. Button to return to dashboard
3. Button to add new list item
4. Button to delete list items 
5. Button to edit list items
6. Button to edit list properties