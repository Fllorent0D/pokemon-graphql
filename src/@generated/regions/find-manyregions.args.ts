import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { regionsWhereInput } from './regions-where.input';
import { Type } from 'class-transformer';
import { regionsOrderByWithRelationInput } from './regions-order-by-with-relation.input';
import { regionsWhereUniqueInput } from './regions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RegionsScalarFieldEnum } from '../prisma/regions-scalar-field.enum';

@ArgsType()
export class FindManyregionsArgs {

    @Field(() => regionsWhereInput, {nullable:true})
    @Type(() => regionsWhereInput)
    where?: regionsWhereInput;

    @Field(() => [regionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<regionsOrderByWithRelationInput>;

    @Field(() => regionsWhereUniqueInput, {nullable:true})
    cursor?: regionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RegionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RegionsScalarFieldEnum>;
}
