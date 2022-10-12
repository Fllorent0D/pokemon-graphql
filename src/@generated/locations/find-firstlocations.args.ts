import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { locationsWhereInput } from './locations-where.input';
import { Type } from 'class-transformer';
import { locationsOrderByWithRelationInput } from './locations-order-by-with-relation.input';
import { locationsWhereUniqueInput } from './locations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LocationsScalarFieldEnum } from '../prisma/locations-scalar-field.enum';

@ArgsType()
export class FindFirstlocationsArgs {

    @Field(() => locationsWhereInput, {nullable:true})
    @Type(() => locationsWhereInput)
    where?: locationsWhereInput;

    @Field(() => [locationsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<locationsOrderByWithRelationInput>;

    @Field(() => locationsWhereUniqueInput, {nullable:true})
    cursor?: locationsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LocationsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LocationsScalarFieldEnum>;
}
