import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_flavor_textWhereInput } from '../ability-flavor-text/ability-flavor-text-where.input';

@InputType()
export class Ability_flavor_textListRelationFilter {

    @Field(() => ability_flavor_textWhereInput, {nullable:true})
    every?: ability_flavor_textWhereInput;

    @Field(() => ability_flavor_textWhereInput, {nullable:true})
    some?: ability_flavor_textWhereInput;

    @Field(() => ability_flavor_textWhereInput, {nullable:true})
    none?: ability_flavor_textWhereInput;
}
