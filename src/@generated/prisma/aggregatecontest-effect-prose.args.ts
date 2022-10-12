import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_effect_proseWhereInput } from '../contest-effect-prose/contest-effect-prose-where.input';
import { Type } from 'class-transformer';
import { contest_effect_proseOrderByWithRelationInput } from '../contest-effect-prose/contest-effect-prose-order-by-with-relation.input';
import { contest_effect_proseWhereUniqueInput } from '../contest-effect-prose/contest-effect-prose-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatecontestEffectProseArgs {

    @Field(() => contest_effect_proseWhereInput, {nullable:true})
    @Type(() => contest_effect_proseWhereInput)
    where?: contest_effect_proseWhereInput;

    @Field(() => [contest_effect_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<contest_effect_proseOrderByWithRelationInput>;

    @Field(() => contest_effect_proseWhereUniqueInput, {nullable:true})
    cursor?: contest_effect_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
