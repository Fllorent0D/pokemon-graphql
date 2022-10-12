import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_changelogWhereInput } from '../ability-changelog/ability-changelog-where.input';
import { Type } from 'class-transformer';
import { ability_changelogOrderByWithAggregationInput } from '../ability-changelog/ability-changelog-order-by-with-aggregation.input';
import { Ability_changelogScalarFieldEnum } from './ability-changelog-scalar-field.enum';
import { ability_changelogScalarWhereWithAggregatesInput } from '../ability-changelog/ability-changelog-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByabilityChangelogArgs {

    @Field(() => ability_changelogWhereInput, {nullable:true})
    @Type(() => ability_changelogWhereInput)
    where?: ability_changelogWhereInput;

    @Field(() => [ability_changelogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ability_changelogOrderByWithAggregationInput>;

    @Field(() => [Ability_changelogScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Ability_changelogScalarFieldEnum>;

    @Field(() => ability_changelogScalarWhereWithAggregatesInput, {nullable:true})
    having?: ability_changelogScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
