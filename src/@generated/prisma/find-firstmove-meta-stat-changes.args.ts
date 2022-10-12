import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_stat_changesWhereInput } from '../move-meta-stat-changes/move-meta-stat-changes-where.input';
import { Type } from 'class-transformer';
import { move_meta_stat_changesOrderByWithRelationInput } from '../move-meta-stat-changes/move-meta-stat-changes-order-by-with-relation.input';
import { move_meta_stat_changesWhereUniqueInput } from '../move-meta-stat-changes/move-meta-stat-changes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Move_meta_stat_changesScalarFieldEnum } from './move-meta-stat-changes-scalar-field.enum';

@ArgsType()
export class FindFirstmoveMetaStatChangesArgs {

    @Field(() => move_meta_stat_changesWhereInput, {nullable:true})
    @Type(() => move_meta_stat_changesWhereInput)
    where?: move_meta_stat_changesWhereInput;

    @Field(() => [move_meta_stat_changesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_meta_stat_changesOrderByWithRelationInput>;

    @Field(() => move_meta_stat_changesWhereUniqueInput, {nullable:true})
    cursor?: move_meta_stat_changesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Move_meta_stat_changesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Move_meta_stat_changesScalarFieldEnum>;
}
