import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesUpdateWithoutOther_pokemon_speciesInput } from './pokemon-species-update-without-other-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutOther_pokemon_speciesInput } from './pokemon-species-create-without-other-pokemon-species.input';

@InputType()
export class pokemon_speciesUpsertWithoutOther_pokemon_speciesInput {

    @Field(() => pokemon_speciesUpdateWithoutOther_pokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutOther_pokemon_speciesInput)
    update!: pokemon_speciesUpdateWithoutOther_pokemon_speciesInput;

    @Field(() => pokemon_speciesCreateWithoutOther_pokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutOther_pokemon_speciesInput)
    create!: pokemon_speciesCreateWithoutOther_pokemon_speciesInput;
}
