

package com.example.springtemplate.daos;

import com.example.springtemplate.models.Player;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PlayerJdbcDao {

  static final String DRIVER = "com.mysql.cj.jdbc.Driver";
  static final String HOST = "localhost:3306";
  static final String SCHEMA = "db_finalproject";
  static final String CONFIG = "serverTimezone=UTC";
  static final String URL =
      "jdbc:mysql://" + HOST + "/" + SCHEMA + "?" + CONFIG;
  static final String USERNAME = "root";
  static final String PASSWORD = "Daviddina21";

  String CREATE_PLAYER = "INSERT INTO players VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, null)";
  String FIND_ALL_PLAYERS = "SELECT * FROM players";
  String FIND_PLAYER_BY_ID = "SELECT * FROM players WHERE id=?";
  String DELETE_PLAYER = "DELETE FROM players WHERE id=?";
  String UPDATE_PLAYER = "UPDATE players SET firstName=?, lastName=?, username=?, password=?, email-?"
      + ", DateOfBirth=?, points=?, team=? WHERE id=?";

  static Connection connection = null;
  static PreparedStatement statement = null;

  private Connection getConnection() throws ClassNotFoundException, SQLException {
    Class.forName(DRIVER);
    return DriverManager.getConnection(URL, USERNAME, PASSWORD);
  }

  private void closeConnection(Connection connection) throws SQLException {
    connection.close();
  }

  public Integer createPlayer(Player player)
      throws ClassNotFoundException, SQLException {
    Integer rowsInserted = 0;
    connection = getConnection();
    statement = connection.prepareStatement(CREATE_PLAYER);
    statement.setString(1, player.getFirstName());
    statement.setString(2, player.getLastName());
    statement.setString(3, player.getUsername());
    statement.setString(4, player.getPassword());
    statement.setString(5, player.getEmail());
    statement.setDate(6, player.getDateOfBirth());
    statement.setInt(7, player.getPoints());
    statement.setString(8, player.getTeam().getTeamName());
    rowsInserted = statement.executeUpdate();
    closeConnection(connection);
    return rowsInserted;
  }

  public List<Player> findAllPlayers() throws ClassNotFoundException, SQLException {
    List<Player> players = new ArrayList<Player>();
    connection = getConnection();
    statement = connection.prepareStatement(FIND_ALL_PLAYERS);
    ResultSet resultSet = statement.executeQuery();
    while (resultSet.next()) {
      Player player = new Player(
          resultSet.getString("firstName"),
          resultSet.getString("lastName"),
          resultSet.getString("username"),
          resultSet.getString("password"),
          resultSet.getString("email"),
          resultSet.getDate("DateOfBirth"),
          resultSet.getInt("points")
      );
      players.add(player);
    }
    closeConnection(connection);
    return players;

  }

  public Player findPlayerById(Integer id) throws SQLException, ClassNotFoundException {
    Player player = null;
    connection = getConnection();
    statement = connection.prepareStatement(FIND_PLAYER_BY_ID);
    statement.setInt(1, id);
    ResultSet resultSet = statement.executeQuery();
    if (resultSet.next()) {
      player = new Player(
          resultSet.getString("firstName"),
          resultSet.getString("lastName"),
          resultSet.getString("username"),
          resultSet.getString("password"),
          resultSet.getString("email"),
          resultSet.getDate("DateOfBirth"),
          resultSet.getInt("points")
      );
    }
    closeConnection(connection);
    return player;

  }

  public Integer deletePlayer(Integer playerId) throws SQLException, ClassNotFoundException {
    Integer rowsDeleted = 0;
    connection = getConnection();
    statement = connection.prepareStatement(DELETE_PLAYER);
    statement.setInt(1, playerId);
    rowsDeleted = statement.executeUpdate();
    closeConnection(connection);
    return rowsDeleted;

  }

  public Integer updatePlayer(Integer playerId, Player newPlayer)
      throws SQLException, ClassNotFoundException {
    Integer rowsUpdated = 0;
    connection = getConnection();
    statement = connection.prepareStatement(UPDATE_PLAYER);
    statement.setString(1, newPlayer.getFirstName());
    statement.setString(2, newPlayer.getLastName());
    statement.setString(3, newPlayer.getUsername());
    statement.setString(4, newPlayer.getPassword());
    statement.setString(5, newPlayer.getEmail());
    statement.setDate(6, newPlayer.getDateOfBirth());
    statement.setInt(7, newPlayer.getPoints());
    statement.setString(8, newPlayer.getTeam().getTeamName());

    rowsUpdated = statement.executeUpdate();
    closeConnection(connection);
    return rowsUpdated;

  }
}
