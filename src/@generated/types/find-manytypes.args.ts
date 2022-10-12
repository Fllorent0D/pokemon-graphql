import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { typesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { typesOrderByWithRelationInput } from './types-order-by-with-relation.input';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TypesScalarFieldEnum } from '../prisma/types-scalar-field.enum';

@ArgsType()
export class FindManytypesArgs {

    @Field(() => typesWhereInput, {nullable:true})
    @Type(() => typesWhereInput)
    where?: typesWhereInput;

    @Field(() => [typesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<typesOrderByWithRelationInput>;

    @Field(() => typesWhereUniqueInput, {nullable:true})
    cursor?: typesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TypesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TypesScalarFieldEnum>;
}
