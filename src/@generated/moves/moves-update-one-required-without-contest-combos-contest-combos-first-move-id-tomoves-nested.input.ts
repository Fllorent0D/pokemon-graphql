import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutContest_combos_contest_combos_first_move_idTomovesInput } from './moves-update-without-contest-combos-contest-combos-first-move-id-tomoves.input';

@InputType()
export class movesUpdateOneRequiredWithoutContest_combos_contest_combos_first_move_idTomovesNestedInput {

    @Field(() => movesWhereUniqueInput, {nullable:true})
    @Type(() => movesWhereUniqueInput)
    connect?: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutContest_combos_contest_combos_first_move_idTomovesInput, {nullable:true})
    @Type(() => movesUpdateWithoutContest_combos_contest_combos_first_move_idTomovesInput)
    update?: movesUpdateWithoutContest_combos_contest_combos_first_move_idTomovesInput;
}
