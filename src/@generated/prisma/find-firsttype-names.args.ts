import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { type_namesWhereInput } from '../type-names/type-names-where.input';
import { Type } from 'class-transformer';
import { type_namesOrderByWithRelationInput } from '../type-names/type-names-order-by-with-relation.input';
import { type_namesWhereUniqueInput } from '../type-names/type-names-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Type_namesScalarFieldEnum } from './type-names-scalar-field.enum';

@ArgsType()
export class FindFirsttypeNamesArgs {

    @Field(() => type_namesWhereInput, {nullable:true})
    @Type(() => type_namesWhereInput)
    where?: type_namesWhereInput;

    @Field(() => [type_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<type_namesOrderByWithRelationInput>;

    @Field(() => type_namesWhereUniqueInput, {nullable:true})
    cursor?: type_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Type_namesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Type_namesScalarFieldEnum>;
}
