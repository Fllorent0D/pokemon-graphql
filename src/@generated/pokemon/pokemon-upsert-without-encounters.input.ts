import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonUpdateWithoutEncountersInput } from './pokemon-update-without-encounters.input';
import { Type } from 'class-transformer';
import { pokemonCreateWithoutEncountersInput } from './pokemon-create-without-encounters.input';

@InputType()
export class pokemonUpsertWithoutEncountersInput {

    @Field(() => pokemonUpdateWithoutEncountersInput, {nullable:false})
    @Type(() => pokemonUpdateWithoutEncountersInput)
    update!: pokemonUpdateWithoutEncountersInput;

    @Field(() => pokemonCreateWithoutEncountersInput, {nullable:false})
    @Type(() => pokemonCreateWithoutEncountersInput)
    create!: pokemonCreateWithoutEncountersInput;
}
