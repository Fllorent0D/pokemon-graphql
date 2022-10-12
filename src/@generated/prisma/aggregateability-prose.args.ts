import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_proseWhereInput } from '../ability-prose/ability-prose-where.input';
import { Type } from 'class-transformer';
import { ability_proseOrderByWithRelationInput } from '../ability-prose/ability-prose-order-by-with-relation.input';
import { ability_proseWhereUniqueInput } from '../ability-prose/ability-prose-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateabilityProseArgs {

    @Field(() => ability_proseWhereInput, {nullable:true})
    @Type(() => ability_proseWhereInput)
    where?: ability_proseWhereInput;

    @Field(() => [ability_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ability_proseOrderByWithRelationInput>;

    @Field(() => ability_proseWhereUniqueInput, {nullable:true})
    cursor?: ability_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
