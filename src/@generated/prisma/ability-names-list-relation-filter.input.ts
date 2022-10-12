import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_namesWhereInput } from '../ability-names/ability-names-where.input';

@InputType()
export class Ability_namesListRelationFilter {

    @Field(() => ability_namesWhereInput, {nullable:true})
    every?: ability_namesWhereInput;

    @Field(() => ability_namesWhereInput, {nullable:true})
    some?: ability_namesWhereInput;

    @Field(() => ability_namesWhereInput, {nullable:true})
    none?: ability_namesWhereInput;
}
