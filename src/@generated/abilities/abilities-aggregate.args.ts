import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { abilitiesWhereInput } from './abilities-where.input';
import { Type } from 'class-transformer';
import { abilitiesOrderByWithRelationInput } from './abilities-order-by-with-relation.input';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class abilitiesAggregateArgs {

    @Field(() => abilitiesWhereInput, {nullable:true})
    @Type(() => abilitiesWhereInput)
    where?: abilitiesWhereInput;

    @Field(() => [abilitiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<abilitiesOrderByWithRelationInput>;

    @Field(() => abilitiesWhereUniqueInput, {nullable:true})
    cursor?: abilitiesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
