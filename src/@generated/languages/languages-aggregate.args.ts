import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { languagesWhereInput } from './languages-where.input';
import { Type } from 'class-transformer';
import { languagesOrderByWithRelationInput } from './languages-order-by-with-relation.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class languagesAggregateArgs {

    @Field(() => languagesWhereInput, {nullable:true})
    @Type(() => languagesWhereInput)
    where?: languagesWhereInput;

    @Field(() => [languagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<languagesOrderByWithRelationInput>;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    cursor?: languagesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
