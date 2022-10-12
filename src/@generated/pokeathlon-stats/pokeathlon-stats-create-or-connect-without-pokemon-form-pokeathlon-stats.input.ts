import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_statsWhereUniqueInput } from './pokeathlon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput } from './pokeathlon-stats-create-without-pokemon-form-pokeathlon-stats.input';

@InputType()
export class pokeathlon_statsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput {

    @Field(() => pokeathlon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokeathlon_statsWhereUniqueInput)
    where!: pokeathlon_statsWhereUniqueInput;

    @Field(() => pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput, {nullable:false})
    @Type(() => pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput)
    create!: pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput;
}
