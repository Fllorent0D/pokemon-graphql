import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_changelog_proseWhereInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-where.input';
import { Type } from 'class-transformer';
import { move_effect_changelog_proseOrderByWithRelationInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-order-by-with-relation.input';
import { move_effect_changelog_proseWhereUniqueInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Move_effect_changelog_proseScalarFieldEnum } from './move-effect-changelog-prose-scalar-field.enum';

@ArgsType()
export class FindFirstmoveEffectChangelogProseArgs {

    @Field(() => move_effect_changelog_proseWhereInput, {nullable:true})
    @Type(() => move_effect_changelog_proseWhereInput)
    where?: move_effect_changelog_proseWhereInput;

    @Field(() => [move_effect_changelog_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_effect_changelog_proseOrderByWithRelationInput>;

    @Field(() => move_effect_changelog_proseWhereUniqueInput, {nullable:true})
    cursor?: move_effect_changelog_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Move_effect_changelog_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Move_effect_changelog_proseScalarFieldEnum>;
}
