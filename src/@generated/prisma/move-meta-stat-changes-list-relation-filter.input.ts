import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_stat_changesWhereInput } from '../move-meta-stat-changes/move-meta-stat-changes-where.input';

@InputType()
export class Move_meta_stat_changesListRelationFilter {

    @Field(() => move_meta_stat_changesWhereInput, {nullable:true})
    every?: move_meta_stat_changesWhereInput;

    @Field(() => move_meta_stat_changesWhereInput, {nullable:true})
    some?: move_meta_stat_changesWhereInput;

    @Field(() => move_meta_stat_changesWhereInput, {nullable:true})
    none?: move_meta_stat_changesWhereInput;
}
