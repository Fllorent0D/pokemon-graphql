import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { statsWhereInput } from './stats-where.input';
import { Type } from 'class-transformer';
import { statsOrderByWithRelationInput } from './stats-order-by-with-relation.input';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StatsScalarFieldEnum } from '../prisma/stats-scalar-field.enum';

@ArgsType()
export class FindManystatsArgs {

    @Field(() => statsWhereInput, {nullable:true})
    @Type(() => statsWhereInput)
    where?: statsWhereInput;

    @Field(() => [statsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<statsOrderByWithRelationInput>;

    @Field(() => statsWhereUniqueInput, {nullable:true})
    cursor?: statsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StatsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StatsScalarFieldEnum>;
}
