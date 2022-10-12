import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutOther_pokemon_speciesInput } from './pokemon-species-create-without-other-pokemon-species.input';

@InputType()
export class pokemon_speciesCreateOrConnectWithoutOther_pokemon_speciesInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesCreateWithoutOther_pokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutOther_pokemon_speciesInput)
    create!: pokemon_speciesCreateWithoutOther_pokemon_speciesInput;
}
