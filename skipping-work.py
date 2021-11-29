def solution(x: list, y: list):
    solution = {}
    if y.__len__() > x.__len__():
        aux = x
        x = y
        y = aux
    for number in x:
        solution[number] = 1
    for number in y:
        if solution.keys().__contains__(number):
            solution.pop(number)
    return list(solution.keys())[0]


print(solution([13, 5, 6, 2, 5], [5, 2, 5, 13]))
print(solution([14, 27, 1, 4, 2, 50, 3, 1], [2, 4, -4, 3, 1, 1, 14, 27, 50]))
