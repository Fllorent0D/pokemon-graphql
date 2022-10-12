import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_proseWhereInput } from '../move-effect-prose/move-effect-prose-where.input';
import { Type } from 'class-transformer';
import { move_effect_proseOrderByWithRelationInput } from '../move-effect-prose/move-effect-prose-order-by-with-relation.input';
import { move_effect_proseWhereUniqueInput } from '../move-effect-prose/move-effect-prose-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatemoveEffectProseArgs {

    @Field(() => move_effect_proseWhereInput, {nullable:true})
    @Type(() => move_effect_proseWhereInput)
    where?: move_effect_proseWhereInput;

    @Field(() => [move_effect_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_effect_proseOrderByWithRelationInput>;

    @Field(() => move_effect_proseWhereUniqueInput, {nullable:true})
    cursor?: move_effect_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
