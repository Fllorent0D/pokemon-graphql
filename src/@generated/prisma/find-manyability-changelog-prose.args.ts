import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_changelog_proseWhereInput } from '../ability-changelog-prose/ability-changelog-prose-where.input';
import { Type } from 'class-transformer';
import { ability_changelog_proseOrderByWithRelationInput } from '../ability-changelog-prose/ability-changelog-prose-order-by-with-relation.input';
import { ability_changelog_proseWhereUniqueInput } from '../ability-changelog-prose/ability-changelog-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Ability_changelog_proseScalarFieldEnum } from './ability-changelog-prose-scalar-field.enum';

@ArgsType()
export class FindManyabilityChangelogProseArgs {

    @Field(() => ability_changelog_proseWhereInput, {nullable:true})
    @Type(() => ability_changelog_proseWhereInput)
    where?: ability_changelog_proseWhereInput;

    @Field(() => [ability_changelog_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ability_changelog_proseOrderByWithRelationInput>;

    @Field(() => ability_changelog_proseWhereUniqueInput, {nullable:true})
    cursor?: ability_changelog_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Ability_changelog_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Ability_changelog_proseScalarFieldEnum>;
}
