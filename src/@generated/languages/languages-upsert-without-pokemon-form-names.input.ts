import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutPokemon_form_namesInput } from './languages-update-without-pokemon-form-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_form_namesInput } from './languages-create-without-pokemon-form-names.input';

@InputType()
export class languagesUpsertWithoutPokemon_form_namesInput {

    @Field(() => languagesUpdateWithoutPokemon_form_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutPokemon_form_namesInput)
    update!: languagesUpdateWithoutPokemon_form_namesInput;

    @Field(() => languagesCreateWithoutPokemon_form_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_form_namesInput)
    create!: languagesCreateWithoutPokemon_form_namesInput;
}
