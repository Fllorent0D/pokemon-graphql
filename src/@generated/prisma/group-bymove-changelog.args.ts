import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_changelogWhereInput } from '../move-changelog/move-changelog-where.input';
import { Type } from 'class-transformer';
import { move_changelogOrderByWithAggregationInput } from '../move-changelog/move-changelog-order-by-with-aggregation.input';
import { Move_changelogScalarFieldEnum } from './move-changelog-scalar-field.enum';
import { move_changelogScalarWhereWithAggregatesInput } from '../move-changelog/move-changelog-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveChangelogArgs {

    @Field(() => move_changelogWhereInput, {nullable:true})
    @Type(() => move_changelogWhereInput)
    where?: move_changelogWhereInput;

    @Field(() => [move_changelogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_changelogOrderByWithAggregationInput>;

    @Field(() => [Move_changelogScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_changelogScalarFieldEnum>;

    @Field(() => move_changelogScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_changelogScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
