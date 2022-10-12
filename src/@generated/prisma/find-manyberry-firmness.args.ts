import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmnessWhereInput } from '../berry-firmness/berry-firmness-where.input';
import { Type } from 'class-transformer';
import { berry_firmnessOrderByWithRelationInput } from '../berry-firmness/berry-firmness-order-by-with-relation.input';
import { berry_firmnessWhereUniqueInput } from '../berry-firmness/berry-firmness-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Berry_firmnessScalarFieldEnum } from './berry-firmness-scalar-field.enum';

@ArgsType()
export class FindManyberryFirmnessArgs {

    @Field(() => berry_firmnessWhereInput, {nullable:true})
    @Type(() => berry_firmnessWhereInput)
    where?: berry_firmnessWhereInput;

    @Field(() => [berry_firmnessOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<berry_firmnessOrderByWithRelationInput>;

    @Field(() => berry_firmnessWhereUniqueInput, {nullable:true})
    cursor?: berry_firmnessWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Berry_firmnessScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Berry_firmnessScalarFieldEnum>;
}
