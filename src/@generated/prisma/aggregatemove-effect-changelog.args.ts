import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_changelogWhereInput } from '../move-effect-changelog/move-effect-changelog-where.input';
import { Type } from 'class-transformer';
import { move_effect_changelogOrderByWithRelationInput } from '../move-effect-changelog/move-effect-changelog-order-by-with-relation.input';
import { move_effect_changelogWhereUniqueInput } from '../move-effect-changelog/move-effect-changelog-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatemoveEffectChangelogArgs {

    @Field(() => move_effect_changelogWhereInput, {nullable:true})
    @Type(() => move_effect_changelogWhereInput)
    where?: move_effect_changelogWhereInput;

    @Field(() => [move_effect_changelogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_effect_changelogOrderByWithRelationInput>;

    @Field(() => move_effect_changelogWhereUniqueInput, {nullable:true})
    cursor?: move_effect_changelogWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
