import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { statsCreateNestedOneWithoutMove_meta_stat_changesInput } from '../stats/stats-create-nested-one-without-move-meta-stat-changes.input';

@InputType()
export class move_meta_stat_changesCreateWithoutMovesInput {

    @Field(() => Int, {nullable:false})
    change!: number;

    @Field(() => statsCreateNestedOneWithoutMove_meta_stat_changesInput, {nullable:false})
    stats!: statsCreateNestedOneWithoutMove_meta_stat_changesInput;
}
