import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { generationsWhereInput } from './generations-where.input';
import { Type } from 'class-transformer';
import { generationsOrderByWithRelationInput } from './generations-order-by-with-relation.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class generationsAggregateArgs {

    @Field(() => generationsWhereInput, {nullable:true})
    @Type(() => generationsWhereInput)
    where?: generationsWhereInput;

    @Field(() => [generationsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<generationsOrderByWithRelationInput>;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    cursor?: generationsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
