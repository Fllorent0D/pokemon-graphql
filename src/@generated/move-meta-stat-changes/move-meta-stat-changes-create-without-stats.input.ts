import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { movesCreateNestedOneWithoutMove_meta_stat_changesInput } from '../moves/moves-create-nested-one-without-move-meta-stat-changes.input';

@InputType()
export class move_meta_stat_changesCreateWithoutStatsInput {

    @Field(() => Int, {nullable:false})
    change!: number;

    @Field(() => movesCreateNestedOneWithoutMove_meta_stat_changesInput, {nullable:false})
    moves!: movesCreateNestedOneWithoutMove_meta_stat_changesInput;
}
