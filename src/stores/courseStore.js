import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import ActionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCoursesBySlug(slug) {
    return _courses.find((courses) => courses.slug === slug);
  }
}

const courseStore = new CourseStore();

Dispatcher.register((action) => {
  switch (action.actionTypes) {
    case ActionTypes.CREATE_COURSE:
      _courses.push(action.course);
      break;

    default:
    //nothing to do here.
  }
});

export default courseStore;
