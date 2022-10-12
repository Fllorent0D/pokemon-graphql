import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_type_namesWhereInput } from '../contest-type-names/contest-type-names-where.input';
import { Type } from 'class-transformer';
import { contest_type_namesOrderByWithRelationInput } from '../contest-type-names/contest-type-names-order-by-with-relation.input';
import { contest_type_namesWhereUniqueInput } from '../contest-type-names/contest-type-names-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Contest_type_namesScalarFieldEnum } from './contest-type-names-scalar-field.enum';

@ArgsType()
export class FindManycontestTypeNamesArgs {

    @Field(() => contest_type_namesWhereInput, {nullable:true})
    @Type(() => contest_type_namesWhereInput)
    where?: contest_type_namesWhereInput;

    @Field(() => [contest_type_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<contest_type_namesOrderByWithRelationInput>;

    @Field(() => contest_type_namesWhereUniqueInput, {nullable:true})
    cursor?: contest_type_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Contest_type_namesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Contest_type_namesScalarFieldEnum>;
}
