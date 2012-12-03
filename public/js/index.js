var results = [];

var score = [0, 0];

var action = {};

var players = [
    {name: 'Diane'},
    {name: 'Marine'},
    {name: 'Elodie'},
    {name: 'Marion M'},
    {name: 'Marion B'},
    {name: 'Flavie'},
    {name: 'Hoèvi'},
    {name: 'Flavie'},
    {name: 'Ariane'},
    {name: 'Pauline'},
    {name: 'Chandra'}
];

var moves = [
    {name: 'Defense'},
    {name: 'Service'},
    {name: 'Passe'},
    {name: 'Attaque'},
    {name: 'Réception'},
    {name: 'Contre'},
    {name: 'Soutien'},
    {name: 'Bidouille'}
];

function MainCtrl($scope) {

    $scope.onAddClick = function() {
        console.log('onAddClick', arguments);
        console.warn('action', action);
        results.push(angular.copy(action));
        if (action.success) score[0]++;
        else score[1]++;
        action = {};
    };
}

function PlayerListCtrl($scope) {
    $scope.players = players;

    $scope.onPlayerClick = function(player) {
        console.log('onPlayerClick', arguments);
        action.player = player;
    };

}

function MoveListCtrl($scope) {
    $scope.moves = moves;

    $scope.onMoveClick = function(move) {
        console.log('onMoveClick', arguments);
        action.move = move;
    };

}

function ScoreCtrl($scope) {
    $scope.score = score;
}

function ActionCtrl($scope) {

    $scope.onActionClick = function(success) {
        console.log('onActionClick', arguments);
        action.success = !!success;
    };
}

function ResultListCtrl($scope) {
    $scope.results = results;
}
