import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutPokemon_habitat_namesInput } from './languages-update-without-pokemon-habitat-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_habitat_namesInput } from './languages-create-without-pokemon-habitat-names.input';

@InputType()
export class languagesUpsertWithoutPokemon_habitat_namesInput {

    @Field(() => languagesUpdateWithoutPokemon_habitat_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutPokemon_habitat_namesInput)
    update!: languagesUpdateWithoutPokemon_habitat_namesInput;

    @Field(() => languagesCreateWithoutPokemon_habitat_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_habitat_namesInput)
    create!: languagesCreateWithoutPokemon_habitat_namesInput;
}
