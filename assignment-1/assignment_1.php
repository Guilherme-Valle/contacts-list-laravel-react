<?php

class Stack {

	private $stack = null;

	function __construct(){
		$this->stack = [];
	}
	
	function push($element){
		array_unshift($this->stack, $element);
	}
	
	function pop(){
		return array_shift($this->stack);
	}
	
	function isEmpty(){
		return sizeof($this->stack) == 0;
	}
}


function isStarterBracket($bracket){
	return in_array($bracket, ['{', '(', '[']);
}

function isTerminalBracket($bracket){
	return in_array($bracket, ['}', ')', ']']);
}

function matchStarterAndTerminalBracket($starter_bracket,  $terminal_bracket){
	$match_brackets_dict = [
		'{' => '}',
		'(' => ')',
		'[' => ']'
	];									  
	return $starter_bracket && $terminal_bracket && $match_brackets_dict[$starter_bracket] == $terminal_bracket;
}

function matchBrackets($brackets){
	$stack = new Stack();
	$brackets_array = str_split($brackets);
	
	foreach($brackets_array as $bracket){
		if (isStarterBracket($bracket)){
			$stack->push($bracket);
			continue;
		}
		
		if (isTerminalBracket($bracket)){
			$last_starter_bracket = $stack->pop();
			if (!matchStarterAndTerminalBracket($last_starter_bracket, $bracket)){
				return 'false';
			}
			
		}
			
	}
				
	return $stack->isEmpty() ? 'true' : 'false';
}
				
print_r('Test 1 with (){}[]: ' . matchBrackets('(){}[]') . "\n");
print_r('Test 2 with [{()}](){}: ' . matchBrackets('[{()}](){}') . "\n");
print_r('Test 3 with []{(): ' . matchBrackets('[]{()') . "\n");
print_r('Test 4 with [{)]: ' . matchBrackets('[{)]') . "\n");
