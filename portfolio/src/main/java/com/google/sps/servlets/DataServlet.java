// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import com.google.gson.Gson;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;

class Comment {
  String message;
  long timestamp;

  Comment(String message, long timestamp){
    this.message = message;
    this.timestamp = timestamp;
  }
}

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {
    
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
      List<Comment> commentList = new ArrayList<>();
      Query query = new Query("comment").addSort("timestamp", SortDirection.DESCENDING);
      DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
      PreparedQuery results = datastore.prepare(query);
        
      for (Entity entity : results.asIterable()) {
        String message = (String) entity.getProperty("message");
        long timestamp = (long) entity.getProperty("timestamp");
    
        Comment comment = new Comment(message, timestamp);
        commentList.add(comment);
      }
      String json = convertToJsonUsingGson(commentList);
      response.setContentType("application/json;");
      response.getWriter().println(json);
    }
    
    private String convertToJsonUsingGson(List<Comment> commentList) {
      Gson gson = new Gson();
      String json = gson.toJson(commentList);
      return json;
    }
    
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
      String message = getParameter(request, "input", "");
      long timestamp = System.currentTimeMillis();

      Entity messageEntity = new Entity("comment");
      messageEntity.setProperty("message", message);
      messageEntity.setProperty("timestamp", timestamp);

      DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
      datastore.put(messageEntity);

      response.sendRedirect("/comment.html");
    }
    
    private String getParameter(HttpServletRequest request, String name, String defaultValue) {
      String value = request.getParameter(name);
      if (value == null) {
        return defaultValue;
      }
      return value;
  }
}
