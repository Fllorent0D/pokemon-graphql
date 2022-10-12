import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_statsUpdateWithoutPokemon_form_pokeathlon_statsInput } from './pokeathlon-stats-update-without-pokemon-form-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput } from './pokeathlon-stats-create-without-pokemon-form-pokeathlon-stats.input';

@InputType()
export class pokeathlon_statsUpsertWithoutPokemon_form_pokeathlon_statsInput {

    @Field(() => pokeathlon_statsUpdateWithoutPokemon_form_pokeathlon_statsInput, {nullable:false})
    @Type(() => pokeathlon_statsUpdateWithoutPokemon_form_pokeathlon_statsInput)
    update!: pokeathlon_statsUpdateWithoutPokemon_form_pokeathlon_statsInput;

    @Field(() => pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput, {nullable:false})
    @Type(() => pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput)
    create!: pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput;
}
