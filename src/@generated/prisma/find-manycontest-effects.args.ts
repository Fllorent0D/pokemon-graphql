import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_effectsWhereInput } from '../contest-effects/contest-effects-where.input';
import { Type } from 'class-transformer';
import { contest_effectsOrderByWithRelationInput } from '../contest-effects/contest-effects-order-by-with-relation.input';
import { contest_effectsWhereUniqueInput } from '../contest-effects/contest-effects-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Contest_effectsScalarFieldEnum } from './contest-effects-scalar-field.enum';

@ArgsType()
export class FindManycontestEffectsArgs {

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

    @Field(() => [Contest_effectsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Contest_effectsScalarFieldEnum>;
}
