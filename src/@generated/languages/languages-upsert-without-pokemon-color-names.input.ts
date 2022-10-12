import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutPokemon_color_namesInput } from './languages-update-without-pokemon-color-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_color_namesInput } from './languages-create-without-pokemon-color-names.input';

@InputType()
export class languagesUpsertWithoutPokemon_color_namesInput {

    @Field(() => languagesUpdateWithoutPokemon_color_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutPokemon_color_namesInput)
    update!: languagesUpdateWithoutPokemon_color_namesInput;

    @Field(() => languagesCreateWithoutPokemon_color_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_color_namesInput)
    create!: languagesCreateWithoutPokemon_color_namesInput;
}
