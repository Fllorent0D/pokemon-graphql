import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmness_namesWhereInput } from '../berry-firmness-names/berry-firmness-names-where.input';
import { Type } from 'class-transformer';
import { berry_firmness_namesOrderByWithRelationInput } from '../berry-firmness-names/berry-firmness-names-order-by-with-relation.input';
import { berry_firmness_namesWhereUniqueInput } from '../berry-firmness-names/berry-firmness-names-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateberryFirmnessNamesArgs {

    @Field(() => berry_firmness_namesWhereInput, {nullable:true})
    @Type(() => berry_firmness_namesWhereInput)
    where?: berry_firmness_namesWhereInput;

    @Field(() => [berry_firmness_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<berry_firmness_namesOrderByWithRelationInput>;

    @Field(() => berry_firmness_namesWhereUniqueInput, {nullable:true})
    cursor?: berry_firmness_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
