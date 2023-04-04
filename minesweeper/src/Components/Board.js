import React from "react";
import { gameReducer } from "../reducers/gameReducer";
import { createBoard } from '../Utils/createBoard'
import Cell from './Cell';

const BOARD_SIZE = 20;
const MINES_NUM = 30;

export default function Board() {
    const [gamestate, dispatch ]= React.useReducer(gameReducer, {
        board: createBoard(BOARD_SIZE, BOARD_SIZE, MINES_NUM),
    })

    return (
        <div className="mt-20">
            {gamestate.board.map((row, rowIdx) => 
                <div 
                    key={rowIdx}
                    className="flex flex-row justify-center h-full"
                >
                    {row.map((cell, cellIdx) => (
                        <Cell key={cellIdx} {...cell}/>
                    ))}
                </div>
            )}
        </div>
    )
}