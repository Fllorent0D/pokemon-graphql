import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_namesWhereInput } from '../nature-names/nature-names-where.input';
import { Type } from 'class-transformer';
import { nature_namesOrderByWithRelationInput } from '../nature-names/nature-names-order-by-with-relation.input';
import { nature_namesWhereUniqueInput } from '../nature-names/nature-names-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatenatureNamesArgs {

    @Field(() => nature_namesWhereInput, {nullable:true})
    @Type(() => nature_namesWhereInput)
    where?: nature_namesWhereInput;

    @Field(() => [nature_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<nature_namesOrderByWithRelationInput>;

    @Field(() => nature_namesWhereUniqueInput, {nullable:true})
    cursor?: nature_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
