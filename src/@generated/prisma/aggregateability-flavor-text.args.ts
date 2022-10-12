import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_flavor_textWhereInput } from '../ability-flavor-text/ability-flavor-text-where.input';
import { Type } from 'class-transformer';
import { ability_flavor_textOrderByWithRelationInput } from '../ability-flavor-text/ability-flavor-text-order-by-with-relation.input';
import { ability_flavor_textWhereUniqueInput } from '../ability-flavor-text/ability-flavor-text-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateabilityFlavorTextArgs {

    @Field(() => ability_flavor_textWhereInput, {nullable:true})
    @Type(() => ability_flavor_textWhereInput)
    where?: ability_flavor_textWhereInput;

    @Field(() => [ability_flavor_textOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ability_flavor_textOrderByWithRelationInput>;

    @Field(() => ability_flavor_textWhereUniqueInput, {nullable:true})
    cursor?: ability_flavor_textWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
