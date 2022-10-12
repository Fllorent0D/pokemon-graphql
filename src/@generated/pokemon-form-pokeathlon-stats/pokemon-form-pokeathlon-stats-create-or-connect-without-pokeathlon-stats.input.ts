import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsWhereUniqueInput } from './pokemon-form-pokeathlon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_form_pokeathlon_statsCreateWithoutPokeathlon_statsInput } from './pokemon-form-pokeathlon-stats-create-without-pokeathlon-stats.input';

@InputType()
export class pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput {

    @Field(() => pokemon_form_pokeathlon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_form_pokeathlon_statsWhereUniqueInput)
    where!: pokemon_form_pokeathlon_statsWhereUniqueInput;

    @Field(() => pokemon_form_pokeathlon_statsCreateWithoutPokeathlon_statsInput, {nullable:false})
    @Type(() => pokemon_form_pokeathlon_statsCreateWithoutPokeathlon_statsInput)
    create!: pokemon_form_pokeathlon_statsCreateWithoutPokeathlon_statsInput;
}
