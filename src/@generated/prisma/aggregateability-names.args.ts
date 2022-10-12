import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_namesWhereInput } from '../ability-names/ability-names-where.input';
import { Type } from 'class-transformer';
import { ability_namesOrderByWithRelationInput } from '../ability-names/ability-names-order-by-with-relation.input';
import { ability_namesWhereUniqueInput } from '../ability-names/ability-names-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateabilityNamesArgs {

    @Field(() => ability_namesWhereInput, {nullable:true})
    @Type(() => ability_namesWhereInput)
    where?: ability_namesWhereInput;

    @Field(() => [ability_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ability_namesOrderByWithRelationInput>;

    @Field(() => ability_namesWhereUniqueInput, {nullable:true})
    cursor?: ability_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
