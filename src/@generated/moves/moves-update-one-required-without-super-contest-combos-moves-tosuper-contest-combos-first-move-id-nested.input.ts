import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutSuper_contest_combos_movesTosuper_contest_combos_first_move_idInput } from './moves-update-without-super-contest-combos-moves-tosuper-contest-combos-first-move-id.input';

@InputType()
export class movesUpdateOneRequiredWithoutSuper_contest_combos_movesTosuper_contest_combos_first_move_idNestedInput {

    @Field(() => movesWhereUniqueInput, {nullable:true})
    @Type(() => movesWhereUniqueInput)
    connect?: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutSuper_contest_combos_movesTosuper_contest_combos_first_move_idInput, {nullable:true})
    @Type(() => movesUpdateWithoutSuper_contest_combos_movesTosuper_contest_combos_first_move_idInput)
    update?: movesUpdateWithoutSuper_contest_combos_movesTosuper_contest_combos_first_move_idInput;
}
