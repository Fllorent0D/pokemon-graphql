import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effectsWhereInput } from '../move-effects/move-effects-where.input';
import { Type } from 'class-transformer';
import { move_effectsOrderByWithRelationInput } from '../move-effects/move-effects-order-by-with-relation.input';
import { move_effectsWhereUniqueInput } from '../move-effects/move-effects-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatemoveEffectsArgs {

    @Field(() => move_effectsWhereInput, {nullable:true})
    @Type(() => move_effectsWhereInput)
    where?: move_effectsWhereInput;

    @Field(() => [move_effectsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_effectsOrderByWithRelationInput>;

    @Field(() => move_effectsWhereUniqueInput, {nullable:true})
    cursor?: move_effectsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
