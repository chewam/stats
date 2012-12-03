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

function resetAction() {
    action.status = null;
    action.player = null;
    action.move = null;
}

function getResults() {
    var results = [];

    if (window.localStorage) {
        results = JSON.parse(localStorage.getItem('results')) || [];
    }

    return results;
}

function setResults(results) {
    if (window.localStorage) {
        localStorage.setItem('results', JSON.stringify(results));
    }
}

function updateScore() {
    score[0] = 0;
    score[1] = 0;

    for (var i = 0, l = results.length; i < l; i++) {
        score[results[i].status === 'success' ? 0 : 1]++;
    }
}

function MainCtrl($scope) {

    $scope.action = action;

    results = getResults();
    updateScore();

    $scope.onAddClick = function() {
        results.push(angular.copy(action));
        updateScore();
        resetAction();
        setResults(results);
    };

    $scope.onCancelClick = function() {
        resetAction();
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
        action.status = success ? 'success' : 'error';
    };
}

function ResultListCtrl($scope) {
    $scope.results = results;
}
