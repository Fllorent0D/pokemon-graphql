import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_flavorsWhereInput } from '../berry-flavors/berry-flavors-where.input';
import { Type } from 'class-transformer';
import { berry_flavorsOrderByWithRelationInput } from '../berry-flavors/berry-flavors-order-by-with-relation.input';
import { berry_flavorsWhereUniqueInput } from '../berry-flavors/berry-flavors-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Berry_flavorsScalarFieldEnum } from './berry-flavors-scalar-field.enum';

@ArgsType()
export class FindManyberryFlavorsArgs {

    @Field(() => berry_flavorsWhereInput, {nullable:true})
    @Type(() => berry_flavorsWhereInput)
    where?: berry_flavorsWhereInput;

    @Field(() => [berry_flavorsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<berry_flavorsOrderByWithRelationInput>;

    @Field(() => berry_flavorsWhereUniqueInput, {nullable:true})
    cursor?: berry_flavorsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Berry_flavorsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Berry_flavorsScalarFieldEnum>;
}
