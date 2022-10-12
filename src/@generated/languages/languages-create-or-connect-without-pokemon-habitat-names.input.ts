import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_habitat_namesInput } from './languages-create-without-pokemon-habitat-names.input';

@InputType()
export class languagesCreateOrConnectWithoutPokemon_habitat_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutPokemon_habitat_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_habitat_namesInput)
    create!: languagesCreateWithoutPokemon_habitat_namesInput;
}
