import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import { pokemonCreateWithoutEncountersInput } from './pokemon-create-without-encounters.input';

@InputType()
export class pokemonCreateOrConnectWithoutEncountersInput {

    @Field(() => pokemonWhereUniqueInput, {nullable:false})
    @Type(() => pokemonWhereUniqueInput)
    where!: pokemonWhereUniqueInput;

    @Field(() => pokemonCreateWithoutEncountersInput, {nullable:false})
    @Type(() => pokemonCreateWithoutEncountersInput)
    create!: pokemonCreateWithoutEncountersInput;
}
