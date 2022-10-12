import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_typesWhereInput } from '../contest-types/contest-types-where.input';
import { Type } from 'class-transformer';
import { contest_typesOrderByWithRelationInput } from '../contest-types/contest-types-order-by-with-relation.input';
import { contest_typesWhereUniqueInput } from '../contest-types/contest-types-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Contest_typesScalarFieldEnum } from './contest-types-scalar-field.enum';

@ArgsType()
export class FindManycontestTypesArgs {

    @Field(() => contest_typesWhereInput, {nullable:true})
    @Type(() => contest_typesWhereInput)
    where?: contest_typesWhereInput;

    @Field(() => [contest_typesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<contest_typesOrderByWithRelationInput>;

    @Field(() => contest_typesWhereUniqueInput, {nullable:true})
    cursor?: contest_typesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Contest_typesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Contest_typesScalarFieldEnum>;
}
