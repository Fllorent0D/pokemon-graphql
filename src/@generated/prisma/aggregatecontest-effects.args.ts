import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_effectsWhereInput } from '../contest-effects/contest-effects-where.input';
import { Type } from 'class-transformer';
import { contest_effectsOrderByWithRelationInput } from '../contest-effects/contest-effects-order-by-with-relation.input';
import { contest_effectsWhereUniqueInput } from '../contest-effects/contest-effects-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatecontestEffectsArgs {

    @Field(() => contest_effectsWhereInput, {nullable:true})
    @Type(() => contest_effectsWhereInput)
    where?: contest_effectsWhereInput;

    @Field(() => [contest_effectsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<contest_effectsOrderByWithRelationInput>;

    @Field(() => contest_effectsWhereUniqueInput, {nullable:true})
    cursor?: contest_effectsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
