import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_changelog_proseWhereInput } from '../ability-changelog-prose/ability-changelog-prose-where.input';
import { Type } from 'class-transformer';
import { ability_changelog_proseOrderByWithAggregationInput } from '../ability-changelog-prose/ability-changelog-prose-order-by-with-aggregation.input';
import { Ability_changelog_proseScalarFieldEnum } from './ability-changelog-prose-scalar-field.enum';
import { ability_changelog_proseScalarWhereWithAggregatesInput } from '../ability-changelog-prose/ability-changelog-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByabilityChangelogProseArgs {

    @Field(() => ability_changelog_proseWhereInput, {nullable:true})
    @Type(() => ability_changelog_proseWhereInput)
    where?: ability_changelog_proseWhereInput;

    @Field(() => [ability_changelog_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ability_changelog_proseOrderByWithAggregationInput>;

    @Field(() => [Ability_changelog_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Ability_changelog_proseScalarFieldEnum>;

    @Field(() => ability_changelog_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: ability_changelog_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
